import "../style/ManualContractPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pageheader from "../utils/PageHeader";


const ManualContractPage = () => {
  let navigate = useNavigate();

  function goCorporativePayment() {
    navigate("/corparativepayment");
  }

  return (
    <>
      <div className="manual-page-container">
        <div>
          <div className="manual-page-content">
            <Pageheader
              header="Şirkət Rekvizitləri"
              size={36}
              justifyContent={"center"}
              margin={0}
            />

            <div className=" manual-page-inputs manual-page-inputs-company">
              <div>
                <h2>“iSU” MMC</h2>

                <form>
                  <div>
                    <label htmlFor="voen">VÖEN</label>
                    <input placeholder="XXXXXXX" id="voen" type="text" />
                  </div>

                  <div>
                    <label htmlFor="owner">Direktor A.S.A</label>
                    <input placeholder="XXXXXXX" id="owner" type="text" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="manual-page-content">
            <Pageheader
              header="Bank Rekvizitləri"
              size={36}
              justifyContent={"center"}
            />

            <div className="manual-page-inputs manual-page-inputs-bank">
              <form>
                <div>
                  <label htmlFor="bank">Bank</label>
                  <input placeholder="XXXXXXX" id="bank" type="text" />
                </div>
                <div>
                  <label htmlFor="voenBank">VÖEN</label>
                  <input placeholder="XXXXXXX" id="voenBank" type="text" />
                </div>
                <div>
                  <label htmlFor="kod">Kod</label>
                  <input placeholder="XXXXXXX" id="kod" type="text" />
                </div>
              </form>
              <form>
                <div>
                  <label htmlFor="Mm">M/h</label>
                  <input placeholder="XXXXXXX" id="voen" type="text" />
                </div>
                <div>
                  <label htmlFor="Hh">H/h</label>
                  <input placeholder="XXXXXXX" id="voen" type="text" />
                </div>
                <div>
                  <label htmlFor="swift">Swift</label>
                  <input placeholder="XXXXXXX" id="swift" type="text" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="requsitieBtns">
          <button onClick={goCorporativePayment}>Geri</button>

          <button onClick={  (e) => {
                e.preventDefault();
              }}>Təsdiqlə</button>
        </div>
      </div>
    </>
  );
};

export default ManualContractPage;
