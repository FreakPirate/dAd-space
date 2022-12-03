import React, { useState } from 'react';
import { Tag, Layout, Menu, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { ABI, LOGO, smartContractAddress } from './constants';
import UploadContainer from './components/UploadContainer';
import UploadedContainer from './components/UploadedContainer';
import PastAdsList from './components/PastAdsList';
import Dashboard from './components/Dashboard';
import Notifications from './components/Notifications';
const { Content, Sider } = Layout;
import { ethers } from 'ethers';

const App = ({handleDisconnect, userDetails}) => {

	const items = [
		{ label: 'New Ad', key: 'newAd' },
		{ label: 'Past Ads', key: 'pastAds' },
		{ label: 'Dashboard', key: 'dashboard' },
		{ label: 'Notifications', key: 'notifications' },
	];

	const [selectedView, setSelectedView] = useState('newAd');

	const [isUploaded, setIsUploaded] = useState(false);

	const handleMenuItemSelect = ({ key }) => {
		setSelectedView(key);
	};

	const handleLogout = () => {
		handleDisconnect();
	};

	const getUserId = (userId) => {
		return `${userId?.substring(0, 4)}....${userId?.substring(userId?.length - 4)}`;
	};

	const [imageUrl , setImageUrl] = useState(null);

	const getRightSideContent = (selectedView) => {
		switch (selectedView) {
			case 'newAd':
				return !isUploaded ? <UploadContainer setImageUrl={setImageUrl} setIsUploaded={setIsUploaded} /> : <UploadedContainer imageUrl={imageUrl} setIsUploaded={setIsUploaded} onSubmitHandler={onSubmitHandler}/>;
			case 'pastAds':
				return <PastAdsList />;
			case 'dashboard':
				return <Dashboard userDetails={userDetails}/>;
			case 'notifications':
				return <Notifications userId={userDetails} />;
		}
	};

	const handleTransaction = async (data) => {
		try {
			const { ethereum } = window;
			if (ethereum) {
				const { ctaText, ctaDescription, clickTag, imageSize, luxury, thrift, bulk, frequent, spendLimit, imageUrl } = data;
				const provider = new ethers.providers.Web3Provider(ethereum);

				const signer = provider.getSigner();
				const nftContract = new ethers.Contract(smartContractAddress, ABI, signer);

				const adId = `${Date.now()}`;

				const personas = [luxury ? 'luxury' : '', thrift ? 'thrift' : '', bulk ? 'bulk' : '', frequent ? 'frequent' : ''].filter(e => e);
				const signerAddress = await signer.getAddress();

				const a = {adId, spendLimit, imageUrl, imageSize, ctaText, ctaDescription, personas, clickTag, signerAddress};
				console.log(a);
				const nftTxn = await nftContract.submitTransaction(adId, spendLimit, imageUrl, imageSize, ctaText, ctaDescription, personas, clickTag, signerAddress);

				await nftTxn.wait();

				console.log('Transaction successful', nftTxn.hash);

			} else {
				console.log('Ethereum object not found');
			}
		}
		catch (error) {
			console.log('Error: ', error);
		}
	};

	const onSubmitHandler = (updatedValues) => {
		handleTransaction(updatedValues);
	}

	return (
		<StyledApp>
			<Layout>
				<StyledSider width={250}>
					<AppLogo className="logo">
						<LogoWrapper src={LOGO} alt="dAd Space" />
					</AppLogo>
					<StyledMenu
						theme='dark'
						defaultSelectedKeys={[selectedView]}
						mode="inline"
						items={items}
						selectedKeys={[selectedView]}
						onClick={handleMenuItemSelect}	
					/>
					<UserProfile>
						<MetamaskLogo src='https://imgs.search.brave.com/F0igGqGdXUAx5UeqVyb1L-99SHazMKwsTRXdK0GPEus/rs:fit:1080:1080:1/g:ce/aHR0cDovL3d3dy5l/dGhlcmxhbWJvcy5p/by9pbWcvbWV0YW1h/c2sucG5n' alt='User:' />
						<ConnectedTag>
							<Tag color="lime">
								connected
							</Tag>
						</ConnectedTag>
						<Tooltip title={userDetails} placement='topLeft'>
							<UserIdText>{getUserId(userDetails)}</UserIdText>
						</Tooltip>
						<StyledLogout onClick={handleLogout}/>
					</UserProfile>
				</StyledSider>
				<Layout style={{height: '100vh', background: 'rgb(25, 25, 25)'}}>
					<Content style={{display: 'flex'}}>
						{getRightSideContent(selectedView)}
					</Content>
				</Layout>
			</Layout>
		</StyledApp>
	);
};

export default App;

const StyledSider = styled(Sider)`
	height: 100vh;
	background: #171717 !important;
	boxShadow: 0.2px 0px #8d9093 !important;

	.ant-layout-sider-children {
		display: flex;
		flex-direction: column;
	}
`;

const MetamaskLogo = styled.img`
	width: 35px;
	height: 35px;
`;

const StyledMenu = styled(Menu)`
	background: #171717;
	color: #fff;

	.ant-menu-item {
		margin: 8px 11px;
		width: 90%;
		&:hover {
			background: #F73859 !important;
		}
	}
	.ant-menu-item-selected {
		background-color: #F73859 !important;
	}
`;

const StyledApp = styled.div`
	height: 100vh;
	width: 100vw;
	color: #ffffff;
`;
const AppLogo = styled.div`
	margin: 12px;
	display: flex;
	justify-content: center;
`;
const LogoWrapper = styled.img`
	width: 90%;
`;
const UserProfile = styled.div`
	margin-top: auto;
	padding: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: flex-start;
	align-items: center;
`;
const UserIdText = styled.div`
	margin: 10px 0px 0px 5px;
	font-size: 12px;
`;
const ConnectedTag = styled.div`
	margin-top: 10px;
	margin-left: 5px;
`;
const StyledLogout = styled(LogoutOutlined)`
	margin-top: 10px;
	margin-left: 10px;
	color: #F73859;
	font-size: 20px;
`;