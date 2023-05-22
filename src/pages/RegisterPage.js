import { Container} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../style/signup.css'
const RegisterPage = () => {
    const navigate = useNavigate();



    const url = ("http://127.0.0.1:8000/api/v2/auth/users/");


    const [userData, setUserData] = useState({
        username: "",
        phone_number: "",
        first_name: "",
        last_name: "",
        password: "",
        email: ""
    });


    function Submit(e) {
        e.preventDefault();
        // axios.post(url, {
        //     username: userData.username,
        //     phone_number: userData.phone_number,
        //     first_name: userData.first_name,
        //     last_name: userData.last_name,
        //     password: userData.password,
        //     email: userData.email
        // },
        //     {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }).then(res => {
        //         console.log(res.userData);
        //     })
    }




    function handle(e) {

        const newData = { ...userData };
        newData[e.target.id] = e.target.value;
        setUserData(newData);
    }

    return (
        <Container>
            <div className="container-register">
                <div className="left-circle-decoration"></div>

                <div className="left-circle-half-decoration"></div>

                <div className="right-decor"></div>

                <div className="right-bottom-decor"></div>

                <section id="register">
                    <div className="dots">
                        <img src={require("../images/Dots.png")} alt="dots" />
                    </div>
                    <h3>Qeydiyyatdan keç</h3>
                    <p>Sosial media ilə qeydiyyatdan keç</p>
                    <div className="btns">
                        <button>

                            Facebook
                        </button>
                        <button>

                            Google
                        </button>
                    </div>
                    <p>və yaxud</p>
                    <form action="post" onSubmit={(e) => Submit(e)}>
                        <div className="forms">
                            <input onChange={(e) => handle(e)} value={userData.username} type="text" placeholder="İstifadəçi adı" id="username" />
                        </div>
                        <div className="forms">
                            <input onChange={(e) => handle(e)} value={userData.first_name} type="text" placeholder="Ad" id="first_name" />
                        </div>
                        <div className="forms">
                            <input onChange={(e) => handle(e)} value={userData.last_name} type="text" placeholder="Soyad" id="last_name" />
                        </div>
                        <div className="forms">
                            <input onChange={(e) => handle(e)} value={userData.email} type="text" placeholder="Elektron poçt ünvanı" id="email" />
                        </div>
                        <div className="forms">
                            <input onChange={(e) => handle(e)} value={userData.phone_number} type="tel" placeholder="Nömrə" id="phone_number" />
                        </div>
                        <div className="forms">
                            <input onChange={(e) => handle(e)} value={userData.password} type="password" placeholder="Şifrə" id="password" />
                        </div>
                        <div className="forms">
                            <input type="password" placeholder="Şifrəni yenidən daxil edin" id="passwordRepeat" />
                        </div>

                        <div className="forms">
                            <button type="submit" className="submitBtn" onClick={() => { navigate('/login', { replace: true }) }}>
                                Qeydiyyatı tamamla
                            </button>
                        </div>
                    </form>
                    <div className="footer-word">
                        Qeydiyyatdan keçməklə{" "}
                        <span>
                            <a href="">Qaydalar</a>
                        </span>{" "}
                        və{" "}
                        <span>
                            <a href="">Məxfilik şərtləri</a>
                        </span>
                        ni qəbul edirəm.
                    </div>
                    <a href='/login'>Daxil ol</a>
                </section>

            </div>
        </Container>
    );
};

export default RegisterPage;
