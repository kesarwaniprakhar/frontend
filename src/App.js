
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
