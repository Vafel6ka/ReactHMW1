import React from 'react';
import ShowFoot from './ShowFoot.js';
import chat from '../img/money.svg';
import refresh from '../img/comment.svg';
import like from '../img/heart.svg';
import download from '../img/price.svg';

const footDate = [
	{
		img: chat,
		count: '482'
	},
	{
		img: refresh,
		count: '146'
	},
	{
		img: like,
		count: '887'
	},
	{
		img: download,
		count: ''
	}
];

const footPost = footDate.map((el) => <ShowFoot img={el.img} count={el.count} />);

function Post(props) {
	return (
		<div className="user-block">
			<div className="row">
				<div className="col">
					<div>
						<img className="user_photo" src={props.author.photo} alt="user_photo" />
					</div>
				</div>

				<div className="col">
					<div className="row">
						<div className="user_name">{props.author.name}</div>
						<div className="user_nickname">{props.author.nickname}</div>
						<div className="post_date">{props.date}</div>
					</div>

					<div className="row">
						<div className="post_content">{props.content}</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div>
					<img className="post_img" src={props.image} alt="post_img" />
				</div>
			</div>
			<div className="row">
				<div className="footer">
					<div className="footer">{footPost}</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
