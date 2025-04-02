import logo from '../assets/investment-calculator-logo.png';

export default function TheHeader() {
	return (
		<header id="header">
			<img src={logo} alt="Logo" />
			<h1>Investment Calculator</h1>
			<p>Calculate your investment growth over time</p>
		</header>
	);
}