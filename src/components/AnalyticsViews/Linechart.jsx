import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';
import styled from 'styled-components';
const Linechart = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		fetch(
			'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
		)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => {
				console.log('fetch data failed', error);
			});
	};
	const config = {
		data,
		padding: 'auto',
		xField: 'Date',
		yField: 'scales',
		xAxis: {
			// type: 'timeCat',
			tickCount: 5,
		}

	};

	return <Container>
				<StyledTitle>Variation of CTR throughout the year</StyledTitle>
    <StyledLineChart {...config} />
    </Container>;
};

const StyledLineChart = styled(Line)`
   && {
    width:400px;
    height:200px !important;
    margin: 0px 10px;
    background: #27272a;
    padding: 20px 10px;
    border-radius: 0px 0px 13px 13px ;

   }
   
`
const Container = styled.span`
   && {
    
    display: flex;
	align-items: center;
    flex-direction: column;
    border-radius: 15px;

   }
   
`
const StyledTitle = styled.div`
	font-size: 0.875rem;
	font-weight: 500;
	color: #fff;
	text-overflow: ellipsis;
    padding:20px 0px 5px 15px;
    background: #27272a;
    width:95.3%;
    border-radius: 13px 13px 0px 0px;

    
`;






export default Linechart;
