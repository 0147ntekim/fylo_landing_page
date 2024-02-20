import './App.css';
import Header from './header';
import Grid from './grids';
import Productive from './productive';
import Owners from './owners';
import Support from './support';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid/>
      <Productive/>
      <Owners/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
