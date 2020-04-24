import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledHome = styled.div`
    display: flex;
    color: white;
    flex-flow: column nowrap;
    min-width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(to left top, #00183d, #001b5c, #001c7a, #001796, #0800b0);
    &::before {
      content: '';
      position: fixed;
      z-index: 0;
      right: -5em;
      bottom: -5em;
      border-radius: 50%;
      width: 20em;
      opacity: 10%;
      height: 20em;
      background-color: #E3EBFE;
    }
    .home-display {
      margin: auto;
      position:relative;
      z-index: 2;
    }
    .home-pic {
      width: 70vw;
      margin: auto;
    }
    .home-title {
      text-align: center;
      h1 {
        margin-bottom: 1em;
        font-size: 1.5em;
      }
    }
    .home-button {
      display: flex;
      justify-content: space-around;
      button {
        margin: 1em 0;
      }
    }
    .home-exp {
      margin-top: 1em;
      text-decoration: underline;
    }
    @media (min-width: 768px) {
      .home-pic {
        width: 50vw;
      }
      .home-display {
        width: 50%;
      }
      .home-title {
          width: 70%;
          h1 {
            font-size: 2em;
          }
        }
    }
    @media (min-width: 1024px) {
      flex-flow: row nowrap;
      justify-content: space-between;
    }
 `;

export default StyledHome;