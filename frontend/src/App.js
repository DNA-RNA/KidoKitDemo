
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import AnaSayfa from './pages/AnaSayfa';
import './App.css';
import './KayitOl.css'
import './GirisYap.css'
import KayitOl from './pages/KayitOl';
import GirisYap from './pages/GirisYap';


function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<AnaSayfa/>}/>
    <Route path='/KayitOl' element={<KayitOl/>}/>
    <Route path='/GirisYap' element={<GirisYap/>}/>
    
   </Routes>
  </BrowserRouter>
  );
}

export default App;
