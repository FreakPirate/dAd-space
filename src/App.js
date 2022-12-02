import { Layout, Menu } from 'antd';
import styled from 'styled-components';

function App() {
	const { Header, Content, Footer, Sider } = Layout;

	const items = [
		{ label: 'item 1', key: 'item-1' }, // remember to pass the key prop
		{ label: 'item 2', key: 'item-2' }, // which is required
	];
	return (
		<StyledApp>
			<Layout>
				<Sider style={{ width: 256, height: '100vh' }}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" items={items} />
				</Sider>
				<Layout>
					<Content>
						<div className="site-layout-background">content</div>
					</Content>
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
export default App;
