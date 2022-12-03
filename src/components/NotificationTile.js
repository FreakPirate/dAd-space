import React from 'react';
import styled from 'styled-components';

const NotificationTile = ({
	channelIcon,
	channelName,
	title,
	message,
}) => {
	return (
		<NotificationTileWrapper>
			<TileHeader>
				<Icon>
					<img style={{width: '19px', height: '19px'}} src={channelIcon} />
				</Icon>
				<ChannelName>
					{channelName}
				</ChannelName>
			</TileHeader>
			<TileBody>
				<BodyTitle>{title}</BodyTitle>
				<BodyMessage>{message}</BodyMessage>
			</TileBody>
		</NotificationTileWrapper>
	);
};

export default NotificationTile;

const NotificationTileWrapper = styled.div`
	border-radius: 0.8rem;
	background: #000000;
	height: 110px;
	margin: 10px 0px;
`;
const TileHeader = styled.div`
	display: flex;
	height: 33%;
	background: #222222;
	padding: 8px;
	border-radius: 0.5rem 0.5rem 0 0;
	flex-wrap: nowrap;
	flex-direction: row;
	align-content: center;
	justify-content: flex-start;
	align-items: center;
`;
const Icon = styled.div``;
const ChannelName = styled.div`
	margin-left: 10px;
	font-size: 12px;
	font-weight: 200;
`;
const TileBody = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: center;
	align-items: flex-start;
	padding: 10px;
`;
const BodyTitle = styled.div`
	margin-top: 2px;
	font-weight: 400;
`;
const BodyMessage = styled.div`
	margin-top: 14px;
	font-size: 12px;
	font-weight: 300;
`;
