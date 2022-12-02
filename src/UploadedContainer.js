import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import MetadataContainer from "./MetadataContainer";

const UploadedContainer = () => {



	return (
		<Wrapper>
			<Header>
				<Button>Upload</Button>
			</Header>
			<Container>
				<ImageCard imageUrl={'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1800&t=st=1670014963~exp=1670015563~hmac=492b7e70e9b0aa61834be242a60446e9daa1c93e8c6d47c66f3429b567b65a77 '} />
				<MetadataContainer />
			</Container>
		</Wrapper>
	)
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