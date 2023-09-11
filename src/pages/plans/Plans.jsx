import React from "react";
import "./plans.css";
// import { Link } from "react-router-dom";
import { plans } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
// import GooglePayButton from "@google-pay/button-react";
import Card from "../../UI/Card";

const Plans = () => {
	// const paymentRequest = {
	// 	apiVersion: 2,
	// 	apiVersionMinor: 0,
	// 	allowedPaymentMethods: [
	// 		{
	// 			type: "CARD",
	// 			parameters: {
	// 				allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
	// 				allowedCardNetworks: ["MASTERCARD", "VISA"]
	// 			},
	// 			tokenizationSpecification: {
	// 				type: "PAYMENT_GATEWAY",
	// 				parameters: {
	// 					gateway: "example",
	// 					gatewayMerchantId: "exampleGatewayMerchantId"
	// 				}
	// 			}
	// 		}
	// 	],
	// 	merchantInfo: {
	// 		merchantId: "12345678901234567890",
	// 		merchantName: "Demo Merchant"
	// 	},
	// 	transactionInfo: {
	// 		totalPriceStatus: "FINAL",
	// 		totalPriceLabel: "Total",
	// 		totalPrice: "100.00",
	// 		currencyCode: "USD",
	// 		countryCode: "US"
	// 	}
	// };

	// function handleLoadPaymentData(paymentData) {
	// 	console.log("load payment data", paymentData);
	// }
	return (
		<>
			<Header title="Membership Plans" image={HeaderImage}>
				Et eu reprehenderit esse minim.Et eu reprehenderit esse minim. Et eu
				reprehenderit esse minim.
			</Header>
			<section className="plans">
				<div className="container plans__container">
					{plans.map(({ id, name, desc, price, features }) => {
						return (
							<Card key={id} className="plan">
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>{`₹ ${price}`}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>
								{features.map(({ feature, available, index }) => {
									return (
										<p key={index} className={available ? "" : "disabled"}>
											{feature}
										</p>
									);
								})}<br />
								{/* <div className="buttons">
									<GooglePayButton
										buttonType="short"
										buttonColor="white"
										paymentRequest={paymentRequest}
										onLoadPaymentData={handleLoadPaymentData}
									/>
								</div> */}
							</Card>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Plans;
