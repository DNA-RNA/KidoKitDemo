import React from "react";
import vektor from '../images/Vector.png';
import selected from '../images/Selected.png'
import sifreVector from '../images/sifre-vektor.png';

class KayitOl extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://testapi.kidokit.com/api/account/register", {
      method: "POST",
      body: data,
    });
  }
  render() {
    return (
      <div className="body">
 <div className="container">
        <div className="title">Kayıt Olun</div>
        <form onSubmit={this.handleSubmit} className="form">
       <div className="details">
       <div className="form-box">
      <span className="description">Adınız ve Soyadınız</span> 
      <input type="text" name="fullName" placeholder="Adınız ve soyadınız" required />
      </div>
      <div className="form-box">
      <span className="description">E-posta adresinizi yazınız</span> 
      <input type="text" name="email"  placeholder="Mail adresini giriniz"/>
     
 
      </div>
      <div className="form-box">
      <span className="description">Bir şifre belirleyiniz</span>
      <img className="password-vector-1" src={sifreVector} alt="sifre-vector" />  
      <input type="password" name="password"  placeholder="Sifre giriniz" />
      
      </div>
      <div className="form-box">
      <span className="description">Bir şifre belirleyiniz</span>
      <img className="password-vector-2" src={sifreVector} alt="sifre-vector" /> 
      <input type="password" name="password"  placeholder="Sifre giriniz" />
      </div>
      <div className="form-box">
      <span className="description">Çocuğun ismi?</span> 
      <input type="text" name="childName" placeholder="Çocuğun İsmi" />
      </div>
      <div className="form-box">
      <span className="description">Çocuğun Doğum tarihi?</span> 
      <input type="date" name="childBirthday"  placeholder="Çocuğun doğum tarihini giriniz" />
      </div>
      <div className="form-box">
      <span className="description">Çocuğunuzun Cinsiyet?</span> 
      <div className="category">
        <label htmlFor="">
          <span className="gender" name="childGender">Erkek</span>
        </label>
        <label htmlFor="">
          <span className="gender" name="childGender">Kız</span>
        </label>
      </div>
      </div>
      <div className="form-box">
      <img src={vektor} alt="vektor" />
      <span className="warning-text">  Kayıt sonrası yeni çocuk kayıtları oluşturabilirsiniz</span>
      </div>
       </div>
      
       <div className="contract"> <img src={selected} alt="select-tik" /> <p>  <a href="#"><b>Kullanım Koşullarını ve Gizlilik Sözleşmesini </b></a> okudum,kabul ediyorum.</p>
       </div>
           <div className="button">
            <button className="btn">Kayıt Ol</button>
          </div>
      </form>
      </div>

      </div>
     
      
    );
  }
}

export default KayitOl;
