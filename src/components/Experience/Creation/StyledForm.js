import styled from 'styled-components';
import theme from 'src/styles/theme';


const StyledForm = styled.div`
    display: flex;
    flex-flow: column;
    width: 80%;
    margin: auto;
    .form-criterias {
      display: flex;
      flex-direction: column;
    }
    .form-checkbox {
      display: flex;
      margin: .2em 0;
    }
    .form-toggle-switch {
      display: flex;
    }
    .react-tag-input {
      border: none;
      border-bottom: 1.5px solid #001C7A;
      background-color: rgba(4, 36, 217, .03);
      border-radius: .3em;
      input::placeholder {
        color: rgba(4, 36, 217, .5);
        font-size: .7em;
      }
      .react-tag-input__tag {
        background-color: #001C7A;
        color: #C1D0F8;
        border-radius: .3em;
      }
      .react-tag-input__tag__remove {
        background: #C1D0F8;
        &::before, &::after {
          background-color: #001C7A;
        }
      }
    }
    @media (min-width: 768px) {

    }
 `;

export default StyledForm;
