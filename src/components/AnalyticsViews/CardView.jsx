import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';

const CardView = (props) => {
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (props.name !== 'Published Ads') {
			asyncFetch();
		} else {
			setValue(
				JSON.parse(localStorage.getItem('pastAds') || '[]').length
			);
		}
	}, []);

	const asyncFetch = () => {
		fetch(
			`http://35.154.128.152:3000/analytics/${
				props.userId
			}/sum/${props.name.toLowerCase()}`
		)
			.then((res) => res.json())
			.then((json) => {
				setValue(json.sum || 0);
			});
	};

	return (
		<CardContainer>
			<TitleContainer>
				<Pill>Sum</Pill>
				<StyledTitle>{props.name}</StyledTitle>
			</TitleContainer>
			<FieldValue>{value}</FieldValue>
		</CardContainer>
	);
};

export const Pill = styled(Tag)`
	font-size: 0.8rem;
	border-radius: 1rem;
	text-transform: capitalize;
	font-weight: 500;
	background-color: ${({ isDisabled }) =>
		isDisabled ? '#F9FAFB' : '#F8F4FF'};
	color: ${({ isDisabled }) => (isDisabled ? '#667085' : '#8A3FFC')};
	border: none;
	height: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 15px;
	height: 150px;
	width: 25%;
	background: #27272a;
	margin: 8px 8px;
`;

const FieldValue = styled.div`
	font-size: 50px;
	font-weight: 500;
	cursor: pointer;
`;

const StyledTitle = styled.div`
	font-size: 0.875rem;
	font-weight: 500;
	color: #fff;
	text-overflow: ellipsis;
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0px 15px;
	width: 100%;
`;

export default CardView;
