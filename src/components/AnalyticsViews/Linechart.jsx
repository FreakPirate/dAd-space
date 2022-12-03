import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';
import styled from 'styled-components';
const Linechart = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		fetch(
			`/analytics/${props.userId}/timeseries/${props.name.toLowerCase()}`
		)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => {
				console.log('fetch data in line series failed', error);
			});
	};
	const config = {
		data,
		padding: 'auto',
		xField: 'time',
		yField: props.name.toLowerCase(),
		xAxis: {
			tickCount: 5,
		},
	};

	return (
		<Container>
			<StyledTitle>
				Variation of {props.name} throughout the timeframe
			</StyledTitle>
			<StyledLineChart {...config} />
		</Container>
	);
};

const StyledLineChart = styled(Line)`
	&& {
		width: 365px;
		height: 200px !important;
		margin: 0px 8px;
		background: #27272a;
		padding: 20px 10px;
		border-radius: 0px 0px 13px 13px;
	}
`;
const Container = styled.span`
	&& {
		display: flex;
		align-items: center;
		flex-direction: column;
		border-radius: 15px;
	}
`;
const StyledTitle = styled.div`
	font-size: 0.875rem;
	font-weight: 500;
	color: #fff;
	text-overflow: ellipsis;
	padding: 20px 0px 5px 15px;
	background: #27272a;
	width: 365px;
	border-radius: 13px 13px 0px 0px;
`;

export default Linechart;
