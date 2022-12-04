import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';

const Card = (props) => {
	const { id, url, title, description } = props;

	const getDescription = (description) => {
		if (description?.length > 110) {
			return description.substring(0, 105) + '...';
		}
		return description;
	};

	return (
		<CardTile
			key={id}
		>
			<CardImageWrapper><CardImage src={url} /></CardImageWrapper>
			<CardTitle>{title}</CardTitle>
			<Tooltip title={description} placement='topLeft'><CardDescription>{getDescription(description)}</CardDescription></Tooltip>
		</CardTile>
	);
};

export default Card;

const CardTile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 330px;
	margin: 18px 18px 0px 18px;
	height: 330px;
	background-color: #27272A;
	border-radius: 1rem;
	cursor: pointer;
`;

const CardImageWrapper = styled.div`
	width: 100%;
	height: 60%;
	max-height: 198px;
`;

const CardImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 1rem;
	object-fit: contain;
`;

const CardTitle = styled.div`
	font-size: 20px;
	margin: -10px 12px 0px 12px;
`;

const CardDescription = styled.div`
	font-size: 14px;
	margin: 12px;
	height: 15%;
`;