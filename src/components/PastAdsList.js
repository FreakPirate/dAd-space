import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Card from './Card';
import { ethers } from 'ethers';
import { ABI, smartContractAddress } from '../constants';
import _ from 'lodash';


const PastAdsList = (props) => {
	const antIcon = (
		<LoadingOutlined
			style={{
				fontSize: 50,
				color: '#F73859',
			}}
			spin
		/>
	);
	const { userId } = props;

	const getAdFromId = async id => {
		try {
			const { ethereum } = window;
			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const nftContract = new ethers.Contract(smartContractAddress, ABI, signer);
				const nftTxn = await nftContract.transactions(id);

				console.log('Transaction successful', nftTxn);
				return nftTxn;
			} else {
				console.log('Ethereum object not found');
				return [];
			}
		}
		catch (error) {
			console.log('Error: ', error);
			return [];
		}
	}

	const [pastAds, setPastAds] = useState([]);
	const existingAds = JSON.parse(localStorage.getItem('pastAds') || '[]');

	useEffect(() => {
		const getAds = async () => {
			let data = await Promise.all(existingAds.map(async id => {
				return await getAdFromId(id);
			}));
			return data;
		}
		getAds().then(data => {
			setPastAds(data);
		});
	}, [localStorage.getItem('pastAds')]);

	return (
		pastAds?.length > 0 ? <ListWrapper>
			{pastAds?.map(ad => {
				return <Card
						id={ad.adId}
						url={ad.imageUrl}
						title={ad.cta}
						description={ad.desc}
					>
				</Card>;
			})}
		</ListWrapper> : <SpinWrapper><Spin size='large' indicator={antIcon}/></SpinWrapper>
	);
};

export default PastAdsList;

const ListWrapper = styled.div`
	display: flex;
	margin: 24px;
	align-content: baseline;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	overflow: scroll;
`;

const SpinWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: center;
	align-items: center;
`;