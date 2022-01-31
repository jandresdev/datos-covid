import './App.css';
//import '@progress/kendo-theme-material/dist/all.css'
import Navbar from './componets/Navbar';
import DataAllCountries from './componets/DataAllCountries';
import ListadoPaises from './componets/ListadoPaises'
import Grafica from './componets/GraficaPie.jsx'


function App() {
  return (
    <>
      <Navbar/>
      <DataAllCountries/>
      <ListadoPaises/>
      <Grafica/>
    </>
  );
}

export default App;
