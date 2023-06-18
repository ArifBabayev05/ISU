import React from 'react'
import "../style/requisiteupload.css";
import UploadIcon from "../images/icons/uploadIcon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequisiteUpload = () => {
    const [uploaded, setUploaded] = useState(0);
  
    let navigate = useNavigate();
  
    function goCorporativePayment() {
      navigate("/corparativepayment");
    }
  
  function uploadedFileName(e){
      setUploaded(e.target.files[0].name);
  }
  
  
    return (
      <>
        <form method="post" className="requisiteUpload">
          <label htmlFor="requisiteUpload" className="requisiteUploadLabel">
            <img src={UploadIcon} alt="UploadIcon" />
            <p>{uploaded ? uploaded :"Rekvizitləri əlavə edin"}</p>
          </label>
  
          <input
            className="requisiteUploadInput"
            id="requisiteUpload"
            type="file"
            onChange={e => uploadedFileName(e)}
            hidden
          /> 
  
  
  
  <div className="requsitieBtns">
            <button onClick={goCorporativePayment}>Geri</button>
  
            <button onClick={  (e) => {
                  e.preventDefault();
                }}>Təsdiqlə</button>
          </div>
  
        </form>
  
      </>
    );
}

export default RequisiteUpload