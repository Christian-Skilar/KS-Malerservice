
import Navigation from './components/Navigation';
import { Header, About, Contact } from './components/pages';
import './App.css';

const App = () => {

  return (
    <div>
          <Navigation />
          <Header />
          <About />
          <Contact />
    </div>

    );
  }

export default App;