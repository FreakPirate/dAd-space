import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import MetadataContainer from './MetadataContainer';

const UploadedContainer = (props) => {
	return (
		<Wrapper>
			<Header>
				<Button>Upload</Button>
			</Header>
			<Container>
				<ImageCard isUploaded={props.isUploaded} />
				<MetadataContainer />
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	color: #ffffff;
	justify-content: center;
	height: 100%;
`;

const Header = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default UploadedContainer;
