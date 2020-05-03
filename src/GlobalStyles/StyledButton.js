import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledButtonHome = styled.button`
    border: none;
    background-color: white;
    border-radius: .5em;
    width: 10em;
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

const StyledButtonForm = styled.button`
    border: none;
    background-color: #001C7A;
    color: white;
    padding: .5em;
    margin: .2em 0;
    border-radius: .3em;
    text-align: center;
    text-transform: uppercase;
    width: 15em;
    .lg {

    }
    .md {

    }
    &:hover {
    }
    &:focus {
    }
    .active {
    }
    .disabled {
    }
    @media (min-width: 768px) {
    }
 `;

export { StyledButtonHome, StyledButtonForm };