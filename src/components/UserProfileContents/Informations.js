import React from 'react'
import "../../style/UserProfile/Informations.css"
import CardHeader from '../../utils/CardHeader'
const Informations = () => {
  return (
    <div className="card">
      <div className="card-header mb-4 ">
        <CardHeader header='Şəxsi məlumatlarım' size="24" />
      </div>
      <div className="card-body  bg-white">
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Ad</label>
              <input type="text" placeholder='XXXXXXXX' className="form-control rounded-pill" id="name" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="surname" className="form-label">Soyad</label>
              <input type="text" placeholder='XXXXXXXX' className="form-control rounded-pill" id="surname" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="dob" className="form-label">Təvəllüd</label>
              <input type="date" placeholder='XXXXXXXX' className="form-control rounded-pill" id="dob" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="finCode" className="form-label">Fin kod</label>
              <input type="text" placeholder='XXXXXXXX' className="form-control rounded-pill" id="finCode" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Mobil nömrə</label>
              <input type="text" placeholder='XXXXXXXX' className="form-control rounded-pill" id="phone" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="password" className="form-label">Mövcud şifrə</label>
              <input type="password" placeholder='XXXXXXXX' className="form-control rounded-pill" id="password" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="branch" className="form-label">Filial</label>
              <input type="text" placeholder='XXXXXXXX' className="form-control rounded-pill" id="branch" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="adress" className="form-label">Ünvan</label>
              <input type="text" placeholder='XXXXXXXX' className="form-control rounded-pill" id="adress" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Şifrənin təkrarı</label>
              <input type="password" placeholder='XXXXXXXX' className="form-control rounded-pill" id="confirmPassword" />
            </div>
          </div>
          <div className="card-bottom">
            <button className="btn btn-primary submit-button">Məlumatları güncəllə</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Informations