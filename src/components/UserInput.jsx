import { useState } from "react";

export default function UserInput() {
	const [UserInput, setUserInput] = useState({
		investmentAmount: 10000,
		annualInverstment: 1200,
		expectedReturn: 6,
		years: 10,
	});

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return { ...prevUserInput, [inputIdentifier]: newValue };
		});
	}

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="investment-amount">Investment Amount:</label>
					<input
						type="number"
						id="investment-amount"
						name="investment-amount"
						value={UserInput.investmentAmount}
						onChange={(event) => handleChange("investmentAmount", event.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="annual-investent">Annual Investment:</label>
					<input
						type="number"
						id="annual-investent"
						name="annual-investent"
						value={UserInput.annualInverstment}
						onChange={(event) => handleChange("annualInverstment", event.target.value)}
						required
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">Expected Return:</label>
					<input
						type="number"
						id="expected-return"
						name="expected-return"
						value={UserInput.expectedReturn}
						onChange={(event) => handleChange("expectedReturn", event.target.value)}
						required
					/>
				</p>
				<p>
					<label htmlFor="years">Years:</label>
					<input
						type="number"
						id="years"
						name="years"
						value={UserInput.years}
						onChange={(event) => handleChange("years", event.target.value)}
						required
					/>
				</p>
			</div>
		</section>
	);
}