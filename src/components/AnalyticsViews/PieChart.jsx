import React, { useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import styled from 'styled-components';
import { useState } from 'react';

const PieChart = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		fetch(
			`/analytics/${
				props.userId
			}/distribution/${props.name.toLowerCase()}`
		)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => {
				console.log('fetch data in line series failed', error);
			});
	};
	const config = {
		appendPadding: 10,
		data,
		angleField: 'sum',
		colorField: 'ad_name',
		radius: 0.9,
		label: {
			type: 'inner',
			offset: '-30%',
			content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
			style: {
				fontSize: 14,
				textAlign: 'center',
			},
		},
		interactions: [
			{
				type: 'element-active',
			},
		],
	};

	return (
		<Container>
			<StyledTitle>Total {props.name} across ads</StyledTitle>
			<StyledPieChart {...config} />
		</Container>
	);
};

const StyledPieChart = styled(Pie)`
	&& {
		height: 240px !important;
		background: #27272a;
		border-radius: 0px 0px 15px 15px;
		margin: 0px 10px 0px 10px;
	}
`;
const Container = styled.span`
	&& {
		display: flex;
		align-items: center;
		flex-direction: column;
		border-radius: 15px;
		margin-top: 25px;
	}
`;
const StyledTitle = styled.div`
	font-size: 0.875rem;
	font-weight: 500;
	color: #fff;
	text-overflow: ellipsis;
	padding: 20px 0px 5px 15px;
	background: #27272a;
	width: 95.3%;
	border-radius: 13px 13px 0px 0px;
`;

export default PieChart;
