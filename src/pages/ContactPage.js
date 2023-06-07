import '../style/contact.css';
import Pageheader from '../utils/PageHeader';
import LocationIcon from "../images/loc.png"
import CallIcon from "../images/call.png"
import MailIcon from "../images/mails.png"

const ContactPage = () => {
    return (
        <>
            <div>

                <Pageheader header="Əlaqə" />

                <div className="contactContainer">
                    <div className="contactFormContainer">
                        <div className="textWrapper">
                            <h1>Müraciət</h1>
                        </div>
                        <form action="post">
                            <div className="datas">
                                <input type="text" placeholder="Ad" />
                                <input type="email" placeholder="E-mail" />
                                <input type="tel" placeholder="Nömrə" />
                                <input type="text" placeholder="Başlıq" />
                            </div>
                            <div className="textarea">
                                <textarea
                                    placeholder="Mesajınız"
                                    cols="70"
                                    rows="10"
                                ></textarea>
                            </div>
                            <div className="buttonarea">
                                <button className="btnContact" type="submit" onClick={(e) => { e.preventDefault(); }}>
                                    Göndər
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="contactItems">
                        <div className="contactItem">
                            <div className="svg">
                                <img width='50' src={LocationIcon} />
                            </div>
                            <p>
                                Gəncə şəhəri, 413 <br />
                                Azadlıq pr. <br />
                                Qurbanov , AZ0978
                            </p>
                        </div>
                        <div className="contactItem">
                            <div className="svg">
                                <img width='50' src={CallIcon}/>
                            </div>
                            <p>
                                +994 50 550 50 50 <br />
                                +994 55 333 33 33 <br />
                                012 400 40 40
                            </p>
                        </div>
                        <div className="contactItem">
                            <div className="svg">
                                <img width='50' src={MailIcon} />
                            </div>
                            <p>
                                isu@gmail.com <br />
                                isu008@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ContactPage