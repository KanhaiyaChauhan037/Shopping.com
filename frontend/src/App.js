import './App.css';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Allroutes from './pages/Allroutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes/>
      <Footer />
    </div>
  );
}

export default App;
