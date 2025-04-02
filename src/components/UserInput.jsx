export default function UserInput() {
	return (
		<section id="user-input">
			<div className="input-group">
				<div>
					<label htmlFor="investment-amount">Investment Amount:</label>
					<input type="number" id="investment-amount" name="investment-amount" required />
				</div>
				<div>
					<label htmlFor="interest-rate">Interest Rate (%):</label>
					<input type="number" id="interest-rate" name="interest-rate" required />
				</div>
				<div>
					<label htmlFor="expected-return">Expected Return:</label>
					<input type="number" id="expecteed-return" name="expecteed-return" required />
				</div>
				<div>
					<label htmlFor="years">Years:</label>
					<input type="number" id="years" name="years" required />
				</div>
				<button type="submit">Calculate</button>
			</div>
		</section>
	);
}