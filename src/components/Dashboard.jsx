import React from 'react';
import styled from 'styled-components';
import CardView from './AnalyticsViews/CardView';
import Linechart from './AnalyticsViews/Linechart';
import PieChart from './AnalyticsViews/PieChart';

const Dashboard = () => {
	return (
		<Container>
			<Title>Analytics</Title>
			<CardContainer>
				<CardView name={'CTR'} value="0.57%" />
				<CardView name={'Clicks'} value="1.3M" />
				<CardView name={'Impressions'} value="2.5B" />
				<CardView name={'Published Ads'} value="12" />
			</CardContainer>
            <LineContainer>
                <Linechart/>
                <Linechart/>
                <Linechart/>
            </LineContainer>
            <PieContainer>
                <PieChart/>
                <PieChart/>
                <PieChart/>
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
    justify-content:space-between;
    width:100%;
    margin-top:25px;
`;

const PieContainer = styled.div`
	display: flex;
	flex-direction: row;
    justify-content:space-between;
    width:100%;
`;
export default Dashboard;
