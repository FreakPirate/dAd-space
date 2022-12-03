import { Image, message, Upload } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import uploadSvg from '../assets/upload.svg';
const { Dragger } = Upload;
import AWS from 'aws-sdk'
// require('dotenv').config()

const S3_BUCKET ='dad-space';
const REGION ='ap-south-1';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})


const UploadContainer = (props) => {
	const [progress , setProgress] = useState(0);
	const uploadFile = (file) => {
		
		const extensionRegex = /(?:\.([^.]+))?$/;
		const extension = extensionRegex.exec(file.name)[1];
		const name = encodeURIComponent(file.name).substring(0, file.name.lastIndexOf('.')) + Date.now() + '.' + extension;
		const params = {
			Body: file,
			Bucket: S3_BUCKET,
			Key: name
		};

		myBucket.putObject(params)
			.on('httpUploadProgress', (evt) => {
				setProgress(Math.round((evt.loaded / evt.total) * 100));
				console.log(evt);
			})
			.on('complete', e => {
				console.log(e);
			})
			.send((err) => {
				if (err) console.log('new errrrrrr', err)
			});
		const url = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${name}`;
		console.log('URL', url);
		
	};

	
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
			uploadFile(info.file.originFileObj);
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
