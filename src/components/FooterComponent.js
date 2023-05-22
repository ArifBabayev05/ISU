import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../style/footer.css'

import Apple from "../images/appstore.png"
import GPlay from "../images/gplay.png"
const FooterComponent = () => {
  return (
    <footer className="text-center text-lg-start  text-muted">

      <section className="footer">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-dark fw-bold mb-4">
                Saytda naviqasiya
              </h6>
              <p>
                <a href="/" className="text-reset">Ana səhifə</a>
              </p>
              <p>
                <a href="/about" className="text-reset">Haqqımızda</a>
              </p>
              <p>
                <a href="/products" className="text-reset">Məhsullar</a>
              </p>
              <p>
                <a href="/services" className="text-reset">Xidmətlər</a>
              </p>
              <p>
                <a href="/gallery" className="text-reset">Qalereya</a>
              </p>
              <p>
                <a href="/contact" className="text-reset">Əlaqə</a>
              </p>
            </div>


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-dark fw-bold mb-4">
                Xidmətlər
              </h6>
              <p>
                <a href="#!" className="text-reset">Sifariş et</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Online Kuryer sifarişi</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Online Poçt sifarişi</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Operativ müştəri xidmətləri</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Bağlamaların daşınılması</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-dark fw-bold mb-4">
                Mobil tətbiqi yükləyin
              </h6>
              <p>
                <img src={Apple} alt='someValue' />
              </p>
              <p>
                <img src={GPlay} alt='someValue' />
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Bizi sosial mediada izləyin</h6>
              <div>
                <a href="" className="me-4 ">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="" className="me-4 ">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="" className="me-4 ">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="" className="me-4 ">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="" className="me-4 ">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>


  )
}

export default FooterComponent