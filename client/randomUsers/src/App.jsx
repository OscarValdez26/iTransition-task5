import FakeData from './pages/FakeData.jsx'
import './App.css'
import {Provider} from './context/Provider.jsx'

function App() {
  return (
    <Provider>
        <FakeData/>
    </Provider>
  )
}

export default App