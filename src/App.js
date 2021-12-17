import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='container-fluid app'>
      <div className="row">
        <div className="col g-0">
          <NavBar />
        </div>
      </div>
      <div className="row fixed-bottom">
        <div className="col g-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
