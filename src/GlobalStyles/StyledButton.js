import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledButton = styled.button`
    background-color: white;
    border-radius: .5em;
    width: 20em;
    text-transform: uppercase;
    height: 3em;
    color: #00032E;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,.2);
    &:hover {
      box-shadow: none;
    }
    &:focus {
      box-shadow: inset 0px 0px 2px 2px rgba(0,0,0,.2);
    }
    .active {
      background-color: #0150c9;
      color: white;
    }
    .disabled {
      color: grey;
      opacity: .2;
      box-shadow: none;
    }
    @media (min-width: 768px) {
    }
 `;

export default StyledButton;