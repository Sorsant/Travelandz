import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Landing from './Page/Landing/Landing';
import Home from './Page/home/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
