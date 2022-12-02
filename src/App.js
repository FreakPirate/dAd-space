import { Layout, Menu } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import UploadedContainer from './UploadedContainer';

function App() {
	const { Header, Content, Footer, Sider } = Layout;

	const items = [
		{ label: 'item 1', key: 'upload' }, // remember to pass the key prop
		{ label: 'item 2', key: 'item-2' }, // which is required
	];

	const [selectedView, setSelectedView] = useState('upload');

	const handleMenuItemSelect = ({ key }) => {
		setSelectedView(key);
	};
	

	return (
		<StyledApp>
			<Layout>
				<Sider style={{ width: 256, height: '100vh' }}>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="inline"
						items={items}
						selectedKeys={[selectedView]}
						onClick={handleMenuItemSelect}	
					/>
				</Sider>
				<Layout>
					<RightPanel>
						{selectedView === 'upload' && <UploadedContainer />}
					</RightPanel>
				</Layout>
			</Layout>
		</StyledApp>
	);
}

const StyledApp = styled.div`
	background-color: rgb(23 23 23/1);
	height: 100vh;
	width: 100vw;
	color: #ffffff;
`;

const RightPanel = styled(Layout.Content)`
	background-color: rgb(23 23 23/1);
`

export default App;
