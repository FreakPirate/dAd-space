import React from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import MetadataCheckboxContainer from './MetadataCheckboxContainer';
import MetadataContainer from './MetadataContainer';
import MetadataTextContainer from './MetadataTextContainer';
import Navbar from './Navbar';

const UploadedContainer = (props) => {
	return (
		<Wrapper>
			<Header>
				<Navbar setIsUploaded={props.setIsUploaded}/>
			</Header>
			<Container>
				<ImageCard isUploaded={props.isUploaded} />
				<MetadataTextContainer />
			</Container>
			<MetadataCheckboxContainer/>
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
	justify-content: end;
    flex-direction: column;
    align-items: flex-end;
    height: 11%;
	padding: 0px 100px ;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	height: 70%;
`;

export default UploadedContainer;
