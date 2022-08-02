import React from 'react'
import {useState,useEffect} from 'react'

function GirisYap() {
 
  return (
    <div>
      <div className="container-giris-yap">
      <h1 className='header-giris-yap'>Giriş Yap</h1>
      <form action="">
      <span className="form-title">E-posta adresinizi yazınız</span> 
      <input type="email" name="email" required />
      <span className="form-title">Şifrenizi Giriniz</span> 
      <input type="password" name="password" required />
      </form>
      <a href="#">Şifremi unuttum</a>
      <button className='btn-giris-yap'>Giriş Yap</button>
      
      </div>
    

    </div>
  )
}
export default GirisYap;
