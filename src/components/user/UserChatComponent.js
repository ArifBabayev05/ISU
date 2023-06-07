import "../../style/chatBot.css";
import logo from "../../images/iSULogo.png"
const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <img width='45' className="logo rounded-circle" src={logo}/>
      </label>
      
    </>
  );
};

export default UserChatComponent;
