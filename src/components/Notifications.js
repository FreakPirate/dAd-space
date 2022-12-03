import {useEffect, useState} from 'react';
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import styled from 'styled-components';
import { Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import NotificationTile from './NotificationTile';

const Notifications = ({userId}) => {

	const PK = '42b625180101ea78fa3df31daa5f3ce99b3062c8ac514e0f762f2f46599eece6'; // channel private key
	const Pkey = `0x${PK}`;
	const signer = new ethers.Wallet(Pkey);
	const [isFetching, setIsFetching] = useState(false);
	const [fetchedNotifications, setFetchedNotifications] = useState([]);

	const antIcon = (
		<LoadingOutlined
			style={{
				fontSize: 50,
				color: '#F73859',
			}}
			spin
		/>
	);

	const sendNotification = async () => {
		try {
			const apiResponse = await PushAPI.payloads.sendNotification({
				signer,
				type: 3, // target
				identityType: 2, // direct payload
				notification: {
					title: `Notification TITLE:`,
					body: `Notification BODY`
				},
				payload: {
					title: `Payload title`,
					body: `This is the msg body`,
					cta: 'CTA',
					img: 'IMG'
				},
				recipients: `eip155:5:${userId}`, // recipient address
				channel: 'eip155:5:0x4D92c9a3Db746bD0Fb65957eA6054D9d07d90412', // your channel address
				env: 'staging'
			});
			
			// apiResponse?.status === 204, if sent successfully!
			console.log('API response: ', apiResponse);
		} catch (err) {
			console.error('Error: ', err);
		}
	};

	useEffect(() => {
		const fetchNotifications = async () => {
			if (userId) {
				setIsFetching(true);
				const notifications = await PushAPI.user.getFeeds({
					user: `eip155:5:${userId}`, // user address in CAIP
					env: 'staging', // environment id
				});
				console.log('After fetching Notifications: ', notifications);
				setFetchedNotifications(notifications);
				setIsFetching(false);
			}
		};
		fetchNotifications();
	}, []);

	return (
		!isFetching ? <NotificationWrapper>
			<NotificationHeader>
				<NotificationHeaderText>
					Inbox
				</NotificationHeaderText>
				<StyledButton onClick={sendNotification}>
					Send Notifications
				</StyledButton>
			</NotificationHeader>
			<NotificationContainer>
				{fetchedNotifications.map(notification => {
					return <NotificationTile
						blockchain={notification.blockchain}
						channelIcon={notification.icon}
						channelName={notification.app}
						title={notification.title}
						message={notification.message}
					/>
				})}
			</NotificationContainer>
		</NotificationWrapper> : <SpinWrapper><Spin size='large' indicator={antIcon}/></SpinWrapper>
	);
};

export default Notifications;

const NotificationWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
    padding: 24px;
`;

const NotificationHeader = styled.div`
	display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
`;

const NotificationHeaderText = styled.div`
	font-size: 24px;
	color: #F73859;
	font-family: Inter;
	font-weight: 500;
`;

const StyledButton = styled(Button)`
	margin-left: auto;
	background-color: #f63859;
	color: #fff;

	&:hover {
		color: #fff;
		border-color: #fff;
	}
`;

const NotificationContainer = styled.div`
	margin: 10px 0px;
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