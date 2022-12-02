import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const ImageCard = (props) => {
	useEffect(() => {
		document.getElementById('uploadedImage').src = document
			.getElementById('dummyImage')
			.getAttribute('src');
	}, [props.isUploaded]);

	return (
		<Card>
			<img id="uploadedImage" />
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

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export default ImageCard;
