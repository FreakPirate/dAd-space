import React from 'react';
import styled from 'styled-components';

const MetadataTextContainer = () => {
    return (
        <TextContainer>
				<TextBox>
					<span>CTA text</span>
					<input></input>
				</TextBox>
				<TextBox>
					<span>CTA description</span>
					<input></input>
				</TextBox>
				<TextBox>
					<span>Clicktag</span>
					<input></input>
				</TextBox>
				<TextBox>
					<span>Spend Limit</span>
					<input></input>
				</TextBox>
				<TextBox>
					<span>Image Size</span>
					<input></input>
				</TextBox>
			</TextContainer>
    );
};
const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	& > input {
		background-color: transparent;
		color: #ffffff;
		border: 1px solid #ffffff;
		font-size: 24px;
		border-radius: 4px;
		padding: 10px;
	}
	& > span {
		font-size: 14px;
		margin-bottom: 8px;
	}
	margin-bottom: 20px;
`;

const TextContainer = styled.div`
width: 35%;
`;
export default MetadataTextContainer;