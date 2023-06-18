import React from 'react'
import '../../style/payment.css'
import PageHeader from "../../utils/PageHeader"
import PaymentProductCard from '../../components/payment/PaymentProductCard'
import Cardsinfo from '../../components/payment/CardsInfo'

const UserPaymentPage = () => {
    return <>

        <PageHeader header="Ödəniş" />

        <section id="payment" className="payment">

            <PaymentProductCard />

            <Cardsinfo />

        </section>






    </>
}

export default UserPaymentPage