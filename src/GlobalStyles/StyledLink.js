import styled from 'styled-components';
import theme from 'src/styles/theme';


const StyledLink = styled.a`
    text-decoration: underline;
    color: #001C7A;
    cursor: pointer;
    &:hover {
        text-decoration: none;
    }
    @media (min-width: 768px) {
    }
 `;

export default StyledLink;