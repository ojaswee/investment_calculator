export default function UserInput({ onChange, UserInput }) {
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
                        onChange={(event) => onChange("investmentAmount", event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment:</label>
                    <input
                        type="number"
                        id="annual-investment"
                        name="annual-investment"
                        value={UserInput.annualInvestment}
                        onChange={(event) => onChange("annualInvestment", event.target.value)}
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
                        onChange={(event) => onChange("expectedReturn", event.target.value)}
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
                        onChange={(event) => onChange("years", event.target.value)}
                        required
                    />
                </p>
            </div>
        </section>
    );
}