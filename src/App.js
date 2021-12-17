import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='container-fluid app'>
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div className="row fixed-bottom mb-5 pb-5">
        <div className="col-10 col-sm-12 text-center mx-auto">
          <p className='text-white fs-5'>We’re going to put the power of a large scale business in the palm of your hand!</p>
        </div>
      </div>
      <div className="row fixed-bottom">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
