import { Layout, Menu } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import UploadContainer from './components/UploadContainer';
import UploadedContainer from './components/UploadedContainer';
import PastAdsList from './components/PastAdsList';

function App() {
	const { Content, Sider } = Layout;

	const items = [
		{ label: 'New Ad', key: 'newAd' },
		{ label: 'Past Ads', key: 'pastAds' },
		{ label: 'Dashboard', key: 'dashboard' },
	];

	const [selectedView, setSelectedView] = useState('newAd');

	const [isUploaded, setIsUploaded] = useState(false);

	const handleMenuItemSelect = ({ key }) => {
		setSelectedView(key);
	};

	const getRightSideContent = (selectedView) => {
		switch (selectedView) {
			case 'newAd':
				return !isUploaded ? <UploadContainer setIsUploaded={setIsUploaded} /> : <UploadedContainer />;
			case 'pastAds':
				return <PastAdsList />;
			case 'dashboard':
				return <h1>Dashboard</h1>;
		}
	};
	
	return (
		<StyledApp>
			<Layout>
				<Sider width={250} style={{ height: '100vh', background: '#171717', boxShadow: '0.2px 0px #8d9093' }}>
					<AppLogo className="logo">
						<Logo src="https://rocketium.com/images/v2/5ee1a13c9855283dbe2269f2/original/bc3743b6-16b1-4d70-adc8-02c62caba2c6_1670010992259.png" alt="dAd Space" />
					</AppLogo>
					<StyledMenu
						theme='dark'
						defaultSelectedKeys={[selectedView]}
						mode="inline"
						items={items}
						selectedKeys={[selectedView]}
						onClick={handleMenuItemSelect}	
					/>
				</Sider>
				<Layout>
					<Content style={{background: 'rgb(25, 25, 25)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						{getRightSideContent(selectedView)}
					</Content>
				</Layout>
			</Layout>
		</StyledApp>
	);
}

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
const Logo = styled.img`
	width: 90%;
`;

export default App;
