import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Coppyright from './components/Coppyright/Coppyright';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <Footer/>
      <Coppyright/>
    </div>
  );
}

export default App;
