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
    color: white;
    padding: .7em 0;
    margin: .2em 0;
    border-radius: 8px;
    background: #001C7A;
    text-align: center;
    text-transform: uppercase;
    width: 15em;
    svg {
      margin-right: .5em;
    }
    .lg {

    }
    .md {

    }
    &:hover {
      background: #002499;
    }
    &:focus {
      border-color: #002499;
    }
    .active {
    }
    .disabled {
    }
    @media (min-width: 768px) {
    }
 `;

const StyledButtonIcon = styled.button`
  border: none;
  background-color: #001C7A;
  border-radius: 50%;
  width: 2em;
  height: 2em;
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

export { StyledButtonHome, StyledButtonForm, StyledButtonIcon };