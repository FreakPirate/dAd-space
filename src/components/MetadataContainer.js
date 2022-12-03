import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Checkbox } from 'antd';

const MetadataContainer = ({ initialValues, onSubmitHandler }) => {
	// const formikForm = useFormik({
	// 	initialValues,
	// 	enableReinitialize: true,
	// 	onSubmit: onSubmitHandler,
	// });
	// const {  } = formikForm.values;

	return (
		<Container>
			<div>
				<TextContainer>
					<span>CTA text</span>
					<input></input>
				</TextContainer>
				<TextContainer>
					<span>CTA description</span>
					<input></input>
				</TextContainer>
				<TextContainer>
					<span>Clicktag</span>
					<input></input>
				</TextContainer>
				<TextContainer>
					<span>Spend Limit</span>
					<input></input>
				</TextContainer>
				<TextContainer>
					<span>Image Size</span>
					<input></input>
				</TextContainer>
			</div>
			<CheckboxContainer>
				<StyledCheckbox onChange={null}>Luxury Buyers</StyledCheckbox>
				<StyledCheckbox onChange={null}>Frequent Buyers</StyledCheckbox>
				<StyledCheckbox onChange={null}>Bulk Buyers</StyledCheckbox>
				<StyledCheckbox onChange={null}>Thrift Buyers</StyledCheckbox>

			</CheckboxContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	/* /* height: 420px; */
	width: 100%;
	background-color: transparent;
	justify-content: space-evenly;
	margin: 20px;
`;

const TextContainer = styled.div`
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
		margin-bottom: 4px;
	}
	margin-bottom: 16px;
`;
const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: #ffffff;
	flex-direction: column;
    justify-content: space-around;
    align-items: start;
`;

const StyledCheckbox = styled(Checkbox)`
	color: #ffffff;
	font-size: 20px;
	margin-bottom: 8px;
	margin-inline-start: 8px;
`;
export default MetadataContainer;
