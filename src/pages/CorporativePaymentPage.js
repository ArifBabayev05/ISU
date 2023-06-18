import Cardsinfo from '../components/payment/CardsInfo';
import PaymentProductCard from '../components/payment/PaymentProductCard';
import Pageheader from '../utils/PageHeader';


const CorporativePaymentPage = () => {
    return (
        <>

            <Pageheader header="Ödəniş" />

            <section id="payment" className="payment">
                <PaymentProductCard />
                <Cardsinfo />
            </section>

        </>
    )
}

export default CorporativePaymentPage