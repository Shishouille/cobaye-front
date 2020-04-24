import styled from 'styled-components';
import theme from 'src/styles/theme';


const StyledHeader = styled.div`
  margin:auto;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      display: inline-block;
      text-decoration: underline;
    }
  }

 `;

export default StyledHeader;