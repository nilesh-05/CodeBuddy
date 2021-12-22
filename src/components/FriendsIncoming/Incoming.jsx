import React, { useState } from "react";
import {
	AiOutlineCheck,
	AiOutlineUsergroupAdd,
	AiOutlineClose,
} from "react-icons/ai";
const DropDown = () => {
	const handleClick = () => {
		setOpen(!open);
	};
	const [open, setOpen] = useState(false);
	return (
		<div className="noti-container">
			<div className="outer" onClick={handleClick}>
				<AiOutlineUsergroupAdd />
			</div>
			{open && (
				<div className="dropdown-content">
					<div className="inline-req">
						<h5>hello</h5>
						<div className="icons">
							<AiOutlineCheck style={{ margin: "10px" }} />
							<AiOutlineClose style={{ margin: "10px" }} />
						</div>
					</div>
					<div className="inline-req-1">
						<h5>hello</h5>
						<div className="icons">
							<AiOutlineCheck style={{ margin: "10px" }} />
							<AiOutlineClose style={{ margin: "10px" }} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DropDown;
