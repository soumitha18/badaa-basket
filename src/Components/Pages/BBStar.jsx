import React from "react";

export const BBStar = () => {
	return (
		<>
			<div className="container-fluid mb-5">
				<div className="row" style={{ height: "350px", backgroundImage: "linear-gradient(-320deg,#0bd3d6,#78a10a,#78a10a,#78a10a,#0bd3d6)" }}>
					<div className="col-1"></div>
					<div className="col-5 text-white mt-5 ml-5">
						<h3>Join at a special price of just</h3>
						<div><small style={{ textDecoration: "line-through", fontSize: "20px" }}>Rs 599</small> <small style={{ fontSize: "40px" }}>Rs 299/</small> 6 months</div>
						<button style={{ marginLeft: "5px", outline: "none", border: "none", borderRadius: "3px", height: "50px", width: "350px", backgroundColor: "#e61c5f", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>JOIN NOW</button> <br />
						<p>You can cancel anytime within first 15 days</p>
					</div>
					<div className="col-5 text-white mt-5 ml-5" >
						<h3>Introducing</h3>
						<div style={{ fontSize: "50px" }}>BB Star</div>
						<h4>Big Savings</h4>
						<h4>Big Benefits</h4>
					</div>
					<div className="col-1"></div>
				</div>
				<div className="row mx-auto p-5 bg-white text-success justify-content-center rounded text-center" style={{ height: '200px' }}>
					<div className="col">
						<img src="" alt="" />
						<h4>No Delivery Charge</h4>
						<p style={{ color: "grey" }}>On orders above Rs 600</p>
					</div>
					<div className="col">
						<img src="" alt="" />
						<h4>Rs 300 Cashback</h4>
						<p style={{ color: "grey" }}>Rs 100 Cashback on first order of any 3 months</p>
					</div>
					<div className="col">
						<img src="" alt="" />
						<h4>Access to Priority Slots</h4>
						<p style={{ color: "grey" }}>bbstar members always get preference</p>
					</div>
				</div>
				<div className="row border" style={{ height: "20px", backgroundImage: "linear-gradient(-320deg,#0bd3d6,#78a10a,#78a10a,#78a10a,#0bd3d6)" }}>

				</div>
			</div>

			{/* image container */}
			<div className="Container">
				<div className="row justify-content-center mx-auto m-5">
					<img src="https://www.bigbasket.com/media/customPage/f9047119-3f91-47d5-bff0-1691df353993/70e8dc87-8413-47b2-a5c1-7f24847ebe3d/a2d48be9-f1bd-4bdc-99e7-41609ef2e7a5/bbstarCP_members_1130x400_9thOct.jpg" alt="banner" />
				</div>
				<div className="row justify-content-center mx-auto m-5">
					<img src="https://www.bigbasket.com/media/customPage/f9047119-3f91-47d5-bff0-1691df353993/70e8dc87-8413-47b2-a5c1-7f24847ebe3d/5e07737f-a52f-4aef-bc21-f62b55895a50/CP_bb-Star-Non-members_1130x400_9thOct.jpg" alt="banner" />
				</div>
				<div className="row justify-content-center mx-auto m-5">
					<img src="https://www.bigbasket.com/media/customPage/f9047119-3f91-47d5-bff0-1691df353993/70e8dc87-8413-47b2-a5c1-7f24847ebe3d/8b613ad7-1e52-427c-a6b2-d07f51b9c589/TVC_3_Priority_1130x400_4thapril.jpg" alt="banner" />
				</div>
				<div className="row justify-content-center mx-auto m-5">
					<img src="https://www.bigbasket.com/media/customPage/f9047119-3f91-47d5-bff0-1691df353993/70e8dc87-8413-47b2-a5c1-7f24847ebe3d/738a75c6-3b17-489d-b9b6-539f8b411cab/TVC_4_Additional-Offers_1130x400_4thapril.jpg" alt="banner" />
				</div>
				<div className="row justify-content-center mx-auto m-5">
					<img src="https://www.bigbasket.com/media/customPage/f9047119-3f91-47d5-bff0-1691df353993/70e8dc87-8413-47b2-a5c1-7f24847ebe3d/c6c363bf-d316-4c64-bef2-d250f653b762/TVC_5_benefits_1130x400_4thapril.jpg" alt="banner" />
				</div>
			</div>

			<div className="container">
				<div className="row justify-content-center " >
					<h3>Know more about bbstar Membership Program</h3>
				</div>
				<hr />

				<div className="row">
					<div className="col-9 mt-5">
						<h4>Cashback on Successful Delivery</h4>
						<ul>
							<li>Cashback will be credited to your bbwallet upon completion of first order of any 3 months of the membership period.</li>
							<li>There is no minimum order value to receive the cashback.</li>
							<li>Cashback is over and above all savings you do on bigbasket.</li>
							<li>Total cashback in the program is Rs. 300. Place an order in at least 3 different months and get Rs. 100 cashback on successful order delivery.</li>
							<li>Cashback will be credited within 48 hours of order delivery.</li>
							<li>No expiry on cashback - use it whenever you want.</li>
						</ul>
					</div>
					<div className="col-3">
						<img src="https://www.bigbasket.com/media/customPage/bbstar/bbstar-faq3.jpg" alt="cashback" />
					</div>
				</div>
				<hr style={{ width: "50%", marginLeft: "0" }} />

				<div className="row">
					<div className="col-3">
						<img src="https://www.bigbasket.com/media/customPage/bbstar/bbstar-faq2.jpg" alt="cashback" />
					</div>
					<div className="col-9 mt-5">
						<h4>No Delivery Charge</h4>
						<ul>
							<li>No delivery charge on order above Rs 600.</li>
							<li>Free delivery can be used across all bigbasket orders - slotted, express and specialty.</li>
							<li>If order is split into multiple shipments, then delivery tokens are applied on each shipment above Rs 600.</li>
						</ul>
					</div>
				</div>
				<hr style={{ width: "50%", marginLeft: "0" }} />

				<div className="row">
					<div className="col-9 mt-5">
						<h4>Reserved Delivery Slots</h4>
						<ul>
							<li>Delivery slots are reserved only for bbstar members.</li>
							<li>Get priority access before non bbstar member.</li>
							<li>Only available on bigbasket slotted delivery.</li>
							<li>*Reserved delivery slots are subject to availability.</li>
						</ul>
					</div>
					<div className="col-3">
						<img src="https://www.bigbasket.com/media/customPage/bbstar/bbstar-faq1.jpg" alt="cashback" />
					</div>
				</div>

				<div className="row">
					<div className="col-3">
						<img src="https://www.bigbasket.com/media/customPage/bbstar/bbstar-faq4.jpg" alt="cashback" />
					</div>
					<div className="col-9 mt-5">
						<h4>Exclusive bbstar Offers:</h4>
						<ul>
							<li>Enjoy exclusive promotions available only for bbstar members.</li>
							<li>Check our special promos and payment offers for members every month.</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-9 mt-5">
						<h4>Cancellation Policy:</h4>
						<ul>
							<li>You can cancel the membership anytime within first 15 days.</li>
							<li>The membership fees will be credited back to your bbwallet.</li>
							<li>If cashback was availed during membership then it will be reverted on cancellation.</li>
							<li>After the 15 day period, membership cancellation will not be allowed.</li>
							<li>Your membership will be auto-cancelled if payment for membership is not completed in 15 days.</li>
						</ul>
					</div>
					<div className="col-3">
						<img src="https://www.bigbasket.com/media/customPage/bbstar/bbstar-faq5.jpg" alt="cashback" />
					</div>
				</div>
				<hr style={{ width: "50%", marginLeft: "0" }} />

			</div>
		</>
	);
};
