import React from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import MetadataCheckboxContainer from './MetadataCheckboxContainer';
import MetadataTextContainer from './MetadataTextContainer';
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
			imageUrl: props.imageUrl || '',
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
		imageUrl,
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
					imageUrl={imageUrl}
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
	height: 11%;
	padding: 0px 93px;
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
	font-size: 25px;
	background-color: #f63859;
	display: flex;
    align-items: center;
	&.ant-btn {
		height: 50px;
	}
	& > span {
		color: #fff;
		font-weight: 600;
		font-size: 19px;
	}
`;
const DiscardButton = styled(Button)`
	font-size: 25px;
	background-color: transparent;
	display: flex;
    align-items: center;
	&.ant-btn {
		height: 50px;
	}
	& > span {
		color: #fff;
		font-weight: 600;
		font-size: 19px;
	}
`;
export default UploadedContainer;
