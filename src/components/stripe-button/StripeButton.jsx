import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_UJgimWFlD8dpdPZsSJtE6CIu00Uy6IFRpZ";
	const onToken = (token) => {
		console.log(token);
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Crow Clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your Total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
