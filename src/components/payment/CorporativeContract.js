import React from 'react'
import "../../style/corparativePayment.css"
import { LinkContainer } from 'react-router-bootstrap';


const CorporativeContract = (props) => {
  return (
    <>
      <div className="corporative-popup">
        <div>
          <div>
            <div className='d-flex justify-content-center'>
              <h1 className='mb-5'>Müqavilə formasına baxış</h1>
            </div>
            <div >
              <div className='d-flex justify-content-center'>
                <h3 ></h3>
              </div>
              <h3 className='d-flex' style={{ textAlign: 'center' }}>TƏRƏFLƏRİN HÜQUQİ ÜNVANLARI VƏ REKVİZİTLƏRİ</h3>
              <h3 className='d-flex justify-content-center'>Sifarişçi:  <span>Test-MMC</span></h3>
              <h3 className='d-flex justify-content-center'>Icraçı:  <span>Test-MMC</span></h3>
            </div>

            <div className="d-flex justify-content-center">
              <div className='mx-3'>
                <h3>Rekvizitlər: _________</h3>
                <h3>Direktor: _________</h3>
              </div>
              <div className='mx-3'>
                <h3>Rekvizitlər: _________</h3>
                <h3>Direktor: _________</h3>
              </div>
            </div>
          </div>


          <div className="popup-btns d-flex justify-content-center">
            <div className='row'>
              <div className='col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mb-3'>
                <button
                  className="popup-add"
                  onClick={(e) => {
                    props.setShowEditContractPopup(1);
                    props.setShowContract(0);
                    e.preventDefault();
                  }}
                >
                  Rekvizitləri əlavə et
                </button>
              </div>

              <div className='col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mb-3'>
                <LinkContainer to={"/requisiteupload"}>
                  <button className="popup-download">
                    Yüklə
                  </button>
                </LinkContainer>
              </div>

              <div className='col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mb-3'>
                <button
                  className="popup-close"
                  onClick={(e) => {
                    props.setShowContract(0);
                    e.preventDefault();
                  }}
                >
                  Bağla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CorporativeContract