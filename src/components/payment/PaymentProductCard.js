import React from 'react'
import "../../style/payment.css"
import LocationMarkSVG from '../../images/icons/location-tick.svg';

const PaymentProductCard = () => {
    return (
        <>
            <div className="product__card">
                <div className="product__card__text">
                    <div className="product__info">
                        <div className="product__name">
                            <h3>Badamlı qazsız içməli su</h3>
                            <p>Say:1</p>
                        </div>
                        <p className="product__size">
                            Ölçü: <span>15 Litr</span>
                        </p>
                    </div>
                    <div className="location">
                        <div className="location__img">
                            <img src={LocationMarkSVG} />
                        </div>
                        <p>Bakı şəhəri, Fətəli Xan Xoyski 17</p>
                    </div>
                    <div className="product__fee">
                        <h5>Ümumi məbləğ:</h5>
                        <h5>
                            163.34 AZN
                        </h5>
                    </div>
                </div>
                <div className="product__card__img">
                    <img src={require("../../images/image1.png")} />
                </div>
            </div>
        </>
    );
}

export default PaymentProductCard