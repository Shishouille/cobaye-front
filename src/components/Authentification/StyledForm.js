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
    @media (min-width: 768px) {

    }
 `;

export default StyledForm;
