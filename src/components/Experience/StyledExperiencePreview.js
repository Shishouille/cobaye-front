import styled from 'styled-components';
import theme from 'src/styles/theme';


const StyledExperiencePreview = styled.section`
    background-color: lightgrey;
    width: 80%;
    margin: auto;
    margin-bottom: 1em;
    padding: .5em;
    border-radius: .5em;
    p {
      font-size: .9em;
    }
    .exp-main {
      display: flex;
      justify-content: space-between;
      img {
        width: 20%;
      }
      .exp-desc {
        width: 80%;
      }
    }
    .exp-keyword {
      background-color: coral;
      font-size: .7em;
      width: fit-content;
      border-radius: .7em;
      padding: .2em;
      font-weight: bold;
      color: white;
      margin: .5em 0;
    }
    .exp-time {
      display: flex;
      justify-content: space-between;
      margin: .5em 0;
    }
    .exp-footer {
      text-align: center;
    }
    @media (min-width: 768px) {
      .exp-time {
        width: 50%;
      }
      .exp-footer {
      text-align: end;
    }
    }
 `;

export default StyledExperiencePreview;