import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';


function App() {
  return(
    <> 
      <Navbar title="nNexus"  home="Home"/> 
      <div className="container">
        <Textform header="Enter Your Text Here" />
      </div>
    </>
  );
}

export default App;
