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

  function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return { ...prevUserInput, [inputIdentifier]: +newValue };
		});
	}

  return (
    <div>
      <TheHeader />
      <UserInput UserInput={userInput} onChange={handleChange}/>
      <Results input={userInput}/>
    </div>
  )
}

export default App;
