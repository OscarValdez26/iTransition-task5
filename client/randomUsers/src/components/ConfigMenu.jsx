import SliderInput from './SliderInput';
import { HStack, Input, IconButton, Col, Button } from 'rsuite';
import ConversionIcon from '@rsuite/icons/Conversion';
import { AppContext } from '../context/Provider';
import { useContext } from 'react';
import { CSVLink } from "react-csv";

function ConfigMenu() {
    const { seed, setSeed, setRegion, csvExport } = useContext(AppContext);
    const changeSeed = () => {
        const newSeed = Math.floor(Math.random() * 100000);
        setSeed(newSeed);
    }
    const changeRegion = (value) => {
        switch (value) {
            case 0:
                setRegion("EN");
                break;
            case 1:
                setRegion("RU");
                break;
            case 2:
                setRegion("ES");
                break;
            case 3:
                setRegion("FR");
                break;
            case 4:
                setRegion("JA");
                break;
            default:
                break;
        }
    }
    const headers = [
        { label: "Index", key: "key" },
        { label: "ID", key: "id" },
        { label: "Name", key: "name" },
        { label: "Address", key: "address" },
        { label: "Phone", key: "phone" },
    ];
    return (
        <div className="text-white h-auto bg-gray-800 p-4">
            <HStack justifyContent='space-between'>
                <label className="m-2 p-2 text-bold">Region:</label>
                <select className="text-black m-2 p-2 text-bold rounded-md" defaultValue={"USA"} onChange={event => changeRegion(event.target.selectedIndex)}>
                    <option value="EN">USA</option>
                    <option value="RU">Russia</option>
                    <option value="ES">Spain</option>
                    <option value="FR">France</option>
                    <option value="JA">Japan</option>
                </select>
                <label className="m-2 p-2 text-bold">Errors:</label>
                <SliderInput />
                <Col md={4} xs={12}><Input value={seed} size='md' onChange={value => setSeed(parseInt(value))} /></Col>
                <IconButton onClick={changeSeed} icon={<ConversionIcon />}>Change</IconButton>
                <CSVLink data={csvExport} filename='fakeusers.csv' headers={headers}><Button appearance="primary" color='green'>Export</Button>
                </CSVLink> 
            </HStack>
        </div>
    );
}

export default ConfigMenu;