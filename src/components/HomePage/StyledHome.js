import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledHome = styled.div`
    display: flex;
    color: white;
    flex-flow: column nowrap;
    min-width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(to left top, #00183d, #001b5c, #001c7a, #001796, #0800b0);
    .home-display {
      margin: auto;
    }
    .home-pic {
      width: 70vw;
      margin: auto;
    }
    @media (min-width: 768px) {
      flex-flow: row nowrap;
      .home-pic {
        width: 50vw;
      }
    }
 `;

export default StyledHome;