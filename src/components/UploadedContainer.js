import React from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import MetadataCheckboxContainer from './MetadataCheckboxContainer';
import MetadataContainer from './MetadataContainer';
import MetadataTextContainer from './MetadataTextContainer';
import Navbar from './Navbar';
import { useFormik } from 'formik';
import { Button } from 'antd';

const UploadedContainer = (props) => {
	const formikForm = useFormik({
		initialValues: {
			ctaText: '',
			ctaDescription: '',
			clickTag: '',
			clickTag: '',
			imageSize: '',
			luxury: false,
			thrift: false,
			frequent: false,
			bulk: false,
			spendLimit: '',
		},
		enableReinitialize: true,
		onSubmit: props.onSubmitHandler,
	});
	const {
		ctaText,
		ctaDescription,
		clickTag,
		imageSize,
		luxury,
		thrift,
		bulk,
		frequent,
		spendLimit,
	} = formikForm.values;
	
	return (
		<Wrapper>
			<Header>
				<NavbarHeader>
					<PublishButton onClick={() => formikForm.submitForm()}>
						Publish
					</PublishButton>
					<DiscardButton onClick={() => props.setIsUploaded(false)}>
						Discard
					</DiscardButton>
				</NavbarHeader>{' '}
			</Header>
			<Container>
				<ImageCard isUploaded={props.isUploaded} />
				<MetadataTextContainer
					onChange={(e) => {
						formikForm.handleChange(e);
					}}
					ctaText={ctaText}
					ctaDescription={ctaDescription}
					clickTag={clickTag}
					spendLimit={spendLimit}
					imageSize={imageSize}
				/>
			</Container>
			<MetadataCheckboxContainer
				luxury={luxury}
				thrift={thrift}
				bulk={bulk}
				frequent={frequent}
				onChangeFormik={(key, val) => {
					formikForm.setFieldValue(key, val);
				}}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	color: #ffffff;
	justify-content: center;
	height: 100%;
	width: 100% ;
`;

const Header = styled.div`
	display: flex;
	justify-content: end;
	flex-direction: column;
	align-items: flex-end;
	height: 10%;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	height: 70%;
`;
const NavbarHeader = styled.div`
	width: 300px;
	display: flex;
	justify-content: space-evenly;
`;

const PublishButton = styled(Button)`
	font-size: 18px;
	background-color: #f63859;
	border: none;
	&.ant-btn {
		height: 40px;
	}
	& > span {
		color: #fff;
		font-weight: 600;
		font-size: 16px;
	}
`;
const DiscardButton = styled(Button)`
	font-size: 18px;
	background-color: transparent;
	&.ant-btn {
		height: 40px;
	}
	& > span {
		color: #fff;
		font-weight: 600;
		font-size: 16px;
	}
`;
export default UploadedContainer;
