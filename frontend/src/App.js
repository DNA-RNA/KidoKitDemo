

import logo from './images/logo.png';
import './App.css';


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <section className='Body'> 
    <h3> Hoş geldiniz !</h3>
    <p>Çocuğunuzu büyütürken artık yalnız değilsiniz!</p>
    <p>Hemen kayıt olup günlük plana erişin</p>   
    </section>

    <section className='Button'>
        <button type="button">Kayıt Ol</button>
   </section>
   <p> Zaten bir hesabınız var mı? <a>Giriş Yapın</a> </p>
    
  </div>
  );
}

export default App;
