import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Login = () => {
	return (
		<ImageContainer
			style={{ background: 'rgb(25, 25, 25)', height: '100vh' }}
		>
			<Logo
				src="https://rocketium.com/images/v2/5ee1a13c9855283dbe2269f2/original/bc3743b6-16b1-4d70-adc8-02c62caba2c6_1670010992259.png"
				alt="dAd Space"
			/>
		</ImageContainer>
	);
};

const Logo = styled.img`
	width: 450px;
	height: 165px;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export default Login;
