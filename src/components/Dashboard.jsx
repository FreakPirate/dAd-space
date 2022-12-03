import React from 'react';
import styled from 'styled-components';
import CardView from './AnalyticsViews/CardView';
import Linechart from './AnalyticsViews/Linechart';
import PieChart from './AnalyticsViews/PieChart';

const views = ['CTR', 'Clicks', 'Impressions'];

const Dashboard = (props) => {
	const { userDetails } = props;

	return (
		<Container>
			<Title>Analytics</Title>
			<CardContainer>
				{[...views, 'Published Ads'].map((view, i) => (
					<CardView name={view} userId={userDetails} />
				))}
			</CardContainer>
			<LineContainer>
				{views.map((view, i) => (
					<Linechart name={view} userId={userDetails} />
				))}
			</LineContainer>
			<PieContainer>
				{views.map((view, i) => (
					<PieChart name={view} userId={userDetails} />
				))}
			</PieContainer>
		</Container>
	);
};
const Title = styled.div`
	margin: 10px 0px 30px 0px;
	font-size: 40px;
	font-weight: 500;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 40px 40px 0px 40px;
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const LineContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 25px;
`;

const PieContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;
export default Dashboard;
