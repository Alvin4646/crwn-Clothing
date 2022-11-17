import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51M4KIbSJ6Jwg2GPie8ukxIxJOZs2rIAifpvH4Iyb25uyFEu2PFOiL0gPCi1g1DHYKMfqPYgCBM46z4ieEO9ZcYpF00KDZooUET';

    const onToken=token=>{
        console.log(token);
        alert('payment successful');
    }
    return(
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is Rs. ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;