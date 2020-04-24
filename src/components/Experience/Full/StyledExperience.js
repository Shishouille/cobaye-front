import styled from 'styled-components';
import theme from 'src/styles/theme';


const StyledExperience= styled.article`
  min-height: 80vh;
  background-color: lightgrey;
  width: 80%;
  padding: 1.5em;
  margin: auto;
  border-radius: .4em;
  margin-top: 1em;
  text-align: center;
    .exp-header {
      margin-bottom: 1.5em;
    }
    .exp-title {
    display: flex;
    img {
      width: 25%;
    }
    }
    @media (min-width: 768px) {
      .exp-header {
        display: flex;
        div {
          width: 50%;
        }
    }
    }
 `;

export default StyledExperience;