import React from 'react';

function ShowFoot(props) {
	return (
		<div className="bottom">
			<img className="bottomImg" src={props.img} alt="action_icon" />
			<span>{props.count}</span>
		</div>
	);
}
export default ShowFoot;
