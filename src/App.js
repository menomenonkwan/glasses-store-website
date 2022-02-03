import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Home from './pages/home/Home';
import NavigationBar from './components/Navbar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={ <Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
