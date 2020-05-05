import styled from 'styled-components';
import theme from 'src/styles/theme';


const StyledForm = styled.div`
    display: flex;
    flex-flow: column;
    width: 80%;
    margin: auto;
    .form-input {
      display: flex;
      flex-direction: column;
    }
    .signin-confirm {
      display: flex;
      margin: 1em 0;
      justify-content: space-around;
    }
    @media (min-width: 768px) {

    }
 `;

export default StyledForm;
