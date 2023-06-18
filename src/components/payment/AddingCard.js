import React from 'react'
import "../../style/payment.css"

const AddingCard = () => {
    return (
        <>
            <div className="fill-card-datas">
                <h3>Kart məlumatları</h3>
                <form>
                    <div className="card-datas">
                        <div className="name">
                            <label htmlFor="name">Ad</label>
                            <input placeholder="XXXXXXX" type="text" id="name" />
                        </div>
                        <div className="surname">
                            <label htmlFor="surname">Soyad</label>
                            <input placeholder="XXXXXXX" type="text" id="surname" />
                        </div>

                        <div className="your-card">
                            <label htmlFor="card-number-input">Kart Nömrəsi</label>
                            <input id="card-number-input" placeholder="....    ....    ....    ...." minLength="16" maxLength="16" />
                        </div>

                        <div className="date">
                            <div className="month">
                                <label htmlFor="month">Ay</label>
                                <input id="month" type="number" />
                            </div>
                            <div className="year">
                                <label htmlFor="year">İl</label>
                                <input id="year" type="number" />
                            </div>
                        </div>

                        <div className="cvc">
                            <label htmlFor="cvc">CVC</label>
                            <input placeholder="XXXXXXX" id="cvc" type="number" minLength="3" maxLength="3" />
                        </div>

                        <button className="add-your-card" type="submit">Əlavə et</button>

                    </div>
                </form>

            </div>
        </>
    )
}

export default AddingCard