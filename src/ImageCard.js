import React from "react";
import styled from "styled-components";

const ImageCard = props => {

	const { imageUrl } = props;

	if (!imageUrl) {
		console.error('Image url is not present');
	}

	return (
		<Card>

		</Card>
	);
};

const Card = styled.div`
	display: flex;
	width: 430px;
	height: 550px;
	color: #ffffff;
	margin: 20px;
	background: aqua;
`;


export default ImageCard;