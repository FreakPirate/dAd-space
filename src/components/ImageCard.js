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
	
	color: #ffffff;
	background: transparent;
	img {
		width: 650px;
	height: 500px;
	margin: 50px;
		object-fit: contain;
		border-radius: 25px;

	}
`;

export default ImageCard;
