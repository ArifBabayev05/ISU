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
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control rounded-pill" id="name" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="surname" className="form-label">Surname</label>
              <input type="text" className="form-control rounded-pill" id="surname" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control rounded-pill" id="email" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control rounded-pill" id="phone" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control rounded-pill" id="address" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control rounded-pill" id="city" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="country" className="form-label">Country</label>
              <input type="text" className="form-control rounded-pill" id="country" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="zip" className="form-label">ZIP Code</label>
              <input type="text" className="form-control rounded-pill" id="zip" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input type="date" className="form-control rounded-pill" id="dob" />
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