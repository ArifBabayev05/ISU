import "../../style/payment.css"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Addingcard from "./AddingCard";
import MasterCardSVG from "../../images/icons/mastercard.svg";
import VisaSVG from "../../images/icons/visa.svg";
import PlusIconSVG from "../../images/icons/add.svg";
import Corporativecontract from "./CorporativeContract";
import ContractEditPopUp from "./ContractEditPopUp";

const Cardsinfo = () => {
    const [showAddCard, setShowAddCard] = useState(0);
    const [showContract, setShowContract] = useState(0);
    const [showEditContractPopup, setShowEditContractPopup] = useState(0);
    const location = useLocation();


    return (
        <>
            <div className="payment__infos">
                <div className="payment__methods">
                    <div className="payment-cash">
                        <h4>Ödəniş metodu</h4>
                        <div>
                            <input id="radio" type="checkbox" name="radio" />
                            <label htmlFor="radio">Qapıda ödəmə</label>
                        </div>
                    </div>

                    <div className="payment-cards">
                        <h4>Kartlarım</h4>
                        <div className="cards">
                            <div className="card-info">
                                <div className="card-img">
                                    <img className="mastercard" src={MasterCardSVG} />
                                </div>
                                <div className="bank-name">XXXX BANK</div>
                                <div className="card-code">**** **** **** 8395</div>
                                <div className="card-select">
                                    <input type="radio" name="radio" />
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="card-img">
                                    <img className="visa" src={VisaSVG} />
                                </div>
                                <div className="bank-name">XXXX BANK</div>
                                <div className="card-code">**** **** **** 8395</div>
                                <div className="card-select">
                                    <input type="radio" name="radio" />
                                </div>
                            </div>
                        </div>
                        <div className="add-new-card">
                            <div className="add-svg">
                                <a
                                    onClick={() => {
                                        setShowAddCard(!showAddCard);
                                        console.log(showAddCard);
                                    }}
                                >
                                    {" "}
                                    <img src={PlusIconSVG} />
                                </a>
                            </div>
                            <h4>Yeni kart əlavə et</h4>
                        </div>
                    </div>
                </div>

                {showAddCard ? <Addingcard /> : ""}

                {location.pathname === '/corparativepayment' ? <div className="method">
                    <div className="add-new-card">
                        <div className="add-svg">
                            <a
                                onClick={() => {
                                    setShowContract(1);
                                }}
                            >
                                {" "}
                                <img src={PlusIconSVG} />
                            </a>
                        </div>
                        <h4>Yeni hesab əlavə et</h4>
                    </div>
                </div> : ''}

                {showContract ? (
                    <Corporativecontract
                        setShowContract={setShowContract}
                        setShowEditContractPopup={setShowEditContractPopup}
                    />
                ) : (
                    ""
                )}




                {showEditContractPopup ? (
                    <ContractEditPopUp
                        setShowEditContractPopup={setShowEditContractPopup}
                    />
                ) : (
                    ""
                )}

                <form>
                    <div className="payment-submit">
                        <div className="total-fee">Ümumi: 163.34 AZN</div>
                        <button
                            className="submitBtn"
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            Təsdiqlə
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Cardsinfo;
