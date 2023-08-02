import "../styles/main.css";
import Logo from "../logo/logo.jpg";

function Navbar() {
	return (
		<div>
			<link
				rel="stylesheet"
				href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
			></link>
			<div className="navbar">
				<span className="text">HELLO! PISENCE</span>
				<div className="logo">
					<img src={Logo} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;