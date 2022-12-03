import { Checkbox } from 'antd';
import React from 'react';
import styled from 'styled-components';

const MetadataCheckboxContainer = (props) => {
	return (
		<PersonaContainer>
            <span>Choose user persona:</span>
			<CheckboxContainer>
				<StyledCheckbox onChange={(e) => props.onChangeFormik('luxury', e.target.checked)}>Luxury Buyers</StyledCheckbox>
				<StyledCheckbox onChange={(e) => props.onChangeFormik('frequent', e.target.checked)}>Frequent Buyers</StyledCheckbox>
				<StyledCheckbox onChange={(e) => props.onChangeFormik('bulk', e.target.checked)}>Bulk Buyers</StyledCheckbox>
				<StyledCheckbox onChange={(e) => props.onChangeFormik('thrift', e.target.checked)}>Thrift Buyers</StyledCheckbox>
			</CheckboxContainer>
		</PersonaContainer>
	);
};

const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	color: #ffffff;
	justify-content: space-evenly;
	align-items: start;
`;
const StyledCheckbox = styled(Checkbox)`
	color: #ffffff;
	font-size: 14px;
	margin-right: 48px;
	margin-inline-start: 8px;
`;
const PersonaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 100px;
    & > span {
        font-size:32px;
        font-weight:700;
        margin-bottom: 40px;

    }
`;
export default MetadataCheckboxContainer;
