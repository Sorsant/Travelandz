import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Landing from './Page/Landing/Landing';
import Home from './Page/home/Home';
function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/home/:id' element={} />  */}


      </Routes>

    </div>
  );
}

export default App;
