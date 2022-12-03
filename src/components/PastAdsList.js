import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Tooltip, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const PastAdsList = (props) => {
	const data = [
		{
			id: 1,
			url: 'https://rocketium.com/images/v2/5ee1a13c9855283dbe2269f2/original/bc3743b6-16b1-4d70-adc8-02c62caba2c6_1670010992259.png',
			title: 'Ad 1',
			description: 'This is the first ad',
		},
		{
			id: 2,
			url: 'https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			title: 'Ad 2',
			description: 'This is the second ad. This is the second ad. This is the second ad',
		},
		{
			id: 3,
			url: 'https://images.unsplash.com/photo-1670004826168-f579520f5e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			title: 'Ad 3',
			description: 'This is the third ad. This is the third ad. This is the third ad. This is the third ad. This is the third ad. This is the third ad. This is the third ad. This is the',
		},
		{
			id: 4,
			url: 'https://images.unsplash.com/photo-1670007770799-8ae5d669c923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
			title: 'Ad 4',
			description: 'This is the fourth ad',
		},
		{
			id: 5,
			url: 'https://images.unsplash.com/photo-1669986480068-901a77513c09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
			title: 'Ad 5',
			description: 'This is the fifth ad',
		},
		{
			id: 6,
			url: 'https://images.unsplash.com/photo-1669951584309-492ed24d274f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
			title: 'Ad 6',
			description: 'This is the sixth ad',
		},
		{
			id: 7,
			url: 'https://images.unsplash.com/photo-1669733794267-0f09571b25df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			title: 'Ad 7',
			description: 'This is the seventh ad',
		},
	];

	const antIcon = (
		<LoadingOutlined
			style={{
				fontSize: 50,
				color: '#F73859',
			}}
			spin
		/>
	);
	const { userId } = props;

	const [pastAds, setPastAds] = useState(null);

	const getDescription = (description) => {
		if (description.length > 110) {
			return description.substring(0, 105) + '...';
		}
		return description;
	};

	useEffect(() => {
		const fetchAds = async (userId) => {
			// const response = await fetch(`http://localhost:3001/ads/${userId}`);
			// const { data } = response;
			// console.log(data);
			if (!pastAds && JSON.stringify(pastAds) !== JSON.stringify(data)) {
				setPastAds(data);
			}
		};
		fetchAds(userId);
	});

	return (
		<ListWrapper>
			{pastAds ? pastAds?.map(ad => {
				return <Card
						key={ad.id}
					>
						<CardImageWrapper><CardImage src={ad.url} /></CardImageWrapper>
						<CardTitle>{ad.title}</CardTitle>
						<Tooltip title={ad.description} placement='topLeft'><CardDescription>{getDescription(ad.description)}</CardDescription></Tooltip>
				</Card>
			}) : <Spin size='large' indicator={antIcon}/>}
		</ListWrapper>
	);
};

export default PastAdsList;

const ListWrapper = styled.div`
	display: flex;
	margin: 24px;
	align-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 330px;
	margin: 18px;
	height: 330px;
`;

const CardImageWrapper = styled.div`
	width: 100%;
	height: 60%;
	max-height: 198px;
`;

const CardImage = styled.img`
	width: 100%;
	height: 100%;
`;

const CardTitle = styled.div`
	font-size: 20px;
`;

const CardDescription = styled.div`
	font-size: 14px;
`;