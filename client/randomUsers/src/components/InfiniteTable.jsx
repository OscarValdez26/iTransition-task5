import { useContext, useEffect, useState } from 'react';
import { Table, Loader } from 'rsuite';
import { AppContext } from '../context/Provider';
import { getData } from '../api/api';

const { Column, HeaderCell, Cell } = Table;

const FixedLoader = () => (
  <Loader
    content="Loading..."
    style={{
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      bottom: '0',
      background: '#f5f5f5',
      width: '100%',
      padding: '4px 0'
    }}
  />
);

const tableHeight = 580;

const InfiniteTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {seed,region,error,setSeed,setCsvExport} = useContext(AppContext)
  const [firtsLoad,setFirstload] = useState(true);

  useEffect(()=>{
    if(firtsLoad === true){
      loadMore();
      setFirstload(false);
    }
  },[firtsLoad]);

  const fetchData = async () => {
    try {
        const json = {
            region: region,
            error: error,
            seed: seed
        }
        const users = await getData(JSON.stringify(json));
        const newData = [...data, ...users];
        const updatedData = newData.map((item, index) => ({
            ...item, // Copia las propiedades existentes
            key: index // Agrega una nueva clave
        }));
        setData(updatedData);
        setCsvExport(updatedData);
        setSeed(seed + 20);
    } catch (err) {
        console.log(err.message);
    }
};

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 1000);
  };

  const handleScroll = (x, y) => {
    const contextHeight = data.length * 46;
    const top = Math.abs(y);

    if (contextHeight - top - tableHeight < 100) {
      loadMore();
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Table
        virtualized
        shouldUpdateScroll={false}
        height={tableHeight}
        data={data}
        onScroll={handleScroll}
      >
        <Column width={40}>
          <HeaderCell>Index</HeaderCell>
          <Cell dataKey="key" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={200}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Address</HeaderCell>
          <Cell dataKey="address" />
        </Column>
        <Column width={100} flexGrow={1}>
          <HeaderCell>Phone</HeaderCell>
          <Cell dataKey="phone" />
        </Column>
      </Table>
      {loading && <FixedLoader />}
    </div>
  );
};

export default InfiniteTable;