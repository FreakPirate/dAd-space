import { Image, message, Upload } from 'antd';
import React from 'react';
import styled from 'styled-components';
import uploadSvg from '../assets/upload.svg';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const UploadContainer = (props) => {
	const prop = {
		name: 'file',
		onChange(info) {

			const reader = new FileReader();

			reader.addEventListener(
				'load',
				() => {
					document.getElementById('dummyImage').src = reader.result;
                    props.setIsUploaded(true)
				},
				false
			);

			reader.readAsDataURL(info.file.originFileObj);

		},
		onDrop(e) {
			console.log('Dropped files', e.dataTransfer.files);
		},
	};
	return (
		<div>
			<Description>
				<span>Get your Ad ready with in minutes.</span>
				<img src={uploadSvg} width="300" height="300" />
			</Description>
			<ImageUploader {...prop}>
				<UploadText className="ant-upload-text">
					Click or drag file to this area to upload
				</UploadText>
			</ImageUploader>
		</div>
	);
};

const Description = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 60px 200px;
	& > span {
		font-size: 75px;
	}
`;
const ImageUploader = styled(Dragger)`
	&.ant-upload-wrapper {
		display: flex;
		justify-content: center;
		& > .ant-upload {
			width: 70%;
			background-color: rgb(38 38 38/ 1);
			border-radius: 1.5rem;
			border-width: 4px;
		}
		& > .ant-upload:hover {
			border-color: #fff;
			background-color: rgb(64 64 64/1);
		}
        & > .ant-upload-list-text {
            display:none;
        }
        
	}
`;

const UploadText = styled.div`
	color: #fff;
	font-weight: 600;
	font-size: large;
	padding: 80px;
`;
export default UploadContainer;
