import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ input }) {
	const results = calculateInvestmentResults(input);
	return (
		console.log(results),
		<p>Results</p>
	)
}