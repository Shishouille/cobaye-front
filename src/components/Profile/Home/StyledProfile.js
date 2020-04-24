import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledProfile = styled.div`
  margin-left: 1em;
  margin-right: 1em;
  h1 {
    margin-top: 1em;
  }
  h2 {
    margin: 1em 0;
  }
  .exp-wrapper {
    overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 2em;
    .exp-card {
      flex: 0 0 10em;
      margin: 1em;
      display:flex;
      flex-flow: column nowrap;
      .exp-content {
        background-color: lightgrey;
        border-radius: .3em;
        text-align: center;
      }
    }
  }
  .profile-main {
    display: flex;
    .notifications {
      width: 70%;
    }
    .calendar {
      width: 30%;
    }
  }
 `;

export default StyledProfile;