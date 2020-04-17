import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledHome = styled.div`
      display: flex;
      flex-flow: column nowrap;
      min-width: 100vw;
      min-height: 90vh;
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