import Logo from '../../assets/Konnecct-logo.png';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const StyledMenu = Styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    height: 100px;
    background-color: none;
`;

const StyledLogo = Styled.div`
   
`;
const StyledImgLogo= Styled.img`
    width: 150%;
    height: 200%;
`;

const StyledDivMenu = Styled.div`
    display: flex;
    flex-direction : row;
    margin-left: 800px;
    margin-top: 80px;
`;
const StyledLink= Styled(Link)`
    margin:15px;
    text-decoration: none;
    font-size: 1.3em;
    color: #000;
    font-family: Epilogue;
`

function Menu() {
    return (
        <StyledMenu>
            <StyledLogo>
                <StyledImgLogo src={Logo} alt="logo" />
            </StyledLogo>
            <StyledDivMenu>
                <StyledLink to="/">Link1</StyledLink>
                <StyledLink to="/">Link2</StyledLink>
                <StyledLink to="/">Link3</StyledLink>
            </StyledDivMenu>
        </StyledMenu>
    );
}

export default Menu;