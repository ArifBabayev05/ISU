import { useNavigate } from "react-router-dom";
import "../../style/payment.css"
import { LinkContainer } from "react-router-bootstrap";
const ContractEditPopUp = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="edit-popup">
                <div>
                    <div className="edit-popup-btns">
                        {/* <button
                            className="popup-add"
                            onClick={(e) => {
                                props.setShowEditContractPopup(1);
                                props.setShowContract(0);
                                e.preventDefault();
                            }}
                        >
                            Fayl əlavə et
                        </button> */}
                        <LinkContainer to={"/requisiteupload"}>
                            <button className="popup-download">
                                Fayl əlavə et
                            </button>
                        </LinkContainer>

                        <button className="popup-download" onClick={() => { navigate('/requisite') }}>Manual Daxil et</button>

                        <button
                            className="popup-close"
                            onClick={(e) => {
                                props.setShowEditContractPopup(0);
                                e.preventDefault();
                            }}
                        >
                            Bağla
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContractEditPopUp;