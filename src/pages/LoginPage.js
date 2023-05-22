import { Container} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/login.css'

const LoginPage = () => {
    const url = ('http://localhost:8000/api/v2/authenticate/token/login/');

    const [loginData, setLoginData] = useState({
        password: '',
        email: ''
    })

    const navigate = useNavigate();


    function Submit(e) { }

    function handle(e) {
        e.preventDefault();
        const newData = { ...loginData };
        newData[e.target.id] = e.target.value;
        setLoginData(newData);
        console.log(loginData)
    }

    return (
        <Container>
            <div className="left-circle-decoration"></div>

            <div className="left-circle-half-decoration"></div>

            <div className="right-decor"></div>

            <div className="right-bottom-decor"></div>

            <div
                className="login mt-5"
                style={{ marginBottom: 250 + "px !important" }}
            >
                <form className="loginContainer" method="post" onSubmit={(e) => { Submit(e) }}>
                    <h1>Daxil Ol</h1>
                    <p>Sosial media ilə qeydiyyatdan keç</p>
                    <div className="btns">
                        <button type="button">
                            Facebook
                        </button>
                        <button type="button">
                            Google
                        </button>
                    </div>
                    <p>Və yaxud e-mail ilə daxil ol</p>

                    <div className="inputContainer">
                        <input type="text" placeholder="Email" value={loginData.email} onChange={(e) => { handle(e) }} id="email" />
                        <input type="password" placeholder="Şifrə" value={loginData.password} onChange={(e) => { handle(e) }} id="password" />
                    </div>
                    <button type="button" className="btnLogin" onClick={() => { navigate('/products', { replace: true }) }} >
                        Daxil ol
                    </button>
                </form>
                <a href="/signup">Qeydiyyatdan keç</a>
            </div>


        </Container>
    );
}
export default LoginPage