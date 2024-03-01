import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './Page/Landing/Landing';
import Home from './Page/home/Home';
import Detail from './components/Detail/Detail'
function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<Detail />} />
        {/* <Route path='/*' element={<Error />} /> */}


      </Routes>

    </div>
  );
}

export default App;
