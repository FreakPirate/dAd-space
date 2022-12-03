import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Navbar = (props) => {
	return (
		<NavbarHeader>
			<PublishButton onClick={() => props.onPublish()}>Publish</PublishButton>
			<DiscardButton onClick={() => props.setIsUploaded(false)}>Discard</DiscardButton>
		</NavbarHeader>
	);
};

const NavbarHeader = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-evenly;

`;

const PublishButton = styled(Button)`
    
    font-size: 25px;
    background-color: #f63859;

    & > span {
        color: #fff;
    font-weight: 600;
    font-size: 19px;
    }
`
const DiscardButton = styled(Button)`
    
    font-size: 25px;
    background-color: transparent;

    & > span {
        color: #fff;
    font-weight: 600;
    font-size: 19px;
    }
`
export default Navbar;
