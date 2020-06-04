import styled, { themeProvider } from 'styled-components';

//Stylized Component:
const theme = {
  primary: '#5995DA', //blue
  secondary: '#5D6063' //gray
}

const StyledTd = styled.td`
  width: 50px;
  height: 50px;
	background: #5D6063;
	text-align: center;
	&:hover {
		color: #76AEED;
		text-decoration: underline;
	}
`

const StyledForm = styled.form`
	display: inline;
	padding: 3px;
`

const StyledButton = styled.button`
	font-family: Arial;
	font-size: 1.3rem;
	border: 1px solid #5D6063;
	border-radius: 5px;
	padding: 7px 10px;
	color: #FFFFFF;
	background: #5995DA;
	text-align: center;
	border-radius: 50px;
	display: inline;
	&:hover {
		color: #76AEED;
		text-decoration: underline;
	}
`;

const StyledInput = styled.input`
	font-size: 1em;
	padding: 1em;
	margin: 1em;
	background: #FFFFFF;
	border: 1px solid #5D6063;
  border-radius: 3px;
	box-sizing: border-box;
	width: 50%;
`

const StyledContainerDiv = styled.div`
	margin: auto;
`;


export { StyledButton, StyledInput, StyledContainerDiv, StyledForm, StyledTd }