import { useState } from "react";
import { navbarData } from "../info/infor";

import "../styles/side.css";

export default function Sidebar() {
	const [selected, setSelected] = useState(0);

	return (
		<div className="sidebar">
			{navbarData.map((item, index) => {
				return (
					<div
						className={selected === index ? "barItem active" : "barItem"}
						key={index}
						onClick={() => setSelected(index)}
					>
						<div className="icon">
							<item.icon />
						</div>
						<span>{item.heading}</span>
					</div>
				);
			})}
		</div>
	);
}