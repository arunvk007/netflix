import Navbar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner';
import './App.css';
import Rowpost from './components/RowPost/Rowpost';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost/> 
    </div>
  );
}

export default App;
