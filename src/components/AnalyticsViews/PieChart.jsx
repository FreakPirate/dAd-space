import React from 'react';
import { Pie } from '@ant-design/charts';
import styled from 'styled-components';

const PieChart = () => {
    const data = [
        {
          type: '分类一',
          value: 27,
        },
        {
          type: '分类二',
          value: 25,
        },
        {
          type: '分类三',
          value: 18,
        },
        {
          type: '分类四',
          value: 15,
        },
        {
          type: '分类五',
          value: 10,
        },
        {
          type: '其他',
          value: 5,
        },
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
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
      
      return<Container>
      <StyledTitle>Variation of CTR throughout the year</StyledTitle>
<StyledPieChart {...config} />
</Container>;
};

const StyledPieChart = styled(Pie)`
   && {
    height:240px !important;
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
    margin-top: 25px ;
   }
   
`;
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






export default PieChart;