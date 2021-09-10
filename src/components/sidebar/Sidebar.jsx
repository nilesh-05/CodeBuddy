import React from "react";
import "./sidebar.css";

const Sidebar = () => {
	return (
		<div
			className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
			style={{ width: "280px", height: "100vh", overflow: "none" }}
		>
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<a href="#" className="nav-link " aria-current="page">
						My Profile
					</a>
				</li>
				<li>
					<a href="#" className="nav-link text-white">
						Network
					</a>
				</li>
				<li>
					<a href="#" className="nav-link text-white">
						Requests
					</a>
				</li>
				<li>
					<a href="#" className="nav-link text-white">
						Chats
					</a>
				</li>
				<li>
					<a href="#" className="nav-link text-white">
						Settings
					</a>
				</li>
			</ul>
			<hr />
		</div>
	);
};

export default Sidebar;
