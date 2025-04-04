import { useState } from "react";

import TheHeader from "./components/TheHeader.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {

	const [userInput, setUserInput] = useState({
		investmentAmount: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		years: 10,
	});

	const inputIsValid = (input) => {
		return (
			input.investmentAmount > 0 &&
			input.annualInvestment > 0 &&
			input.expectedReturn > 0 &&
			input.years > 0
		);
	};

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return { ...prevUserInput, [inputIdentifier]: +newValue };
		});
	}

	return (
		<div>
			<TheHeader />
			<UserInput UserInput={userInput} onChange={handleChange} />
			{!inputIsValid(userInput) && (
				<p className="center">
					Please enter valid numbers (greater than 0).
				</p>
			)}
			{inputIsValid(userInput) && <Results input={userInput} />}
		</div>
	)
}

export default App;
