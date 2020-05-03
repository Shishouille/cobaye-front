import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledLabel = styled.label`
    font-size : 1.2em;
    color: #001C7A;
    margin: .2em 0;
    @media (min-width: 768px) {
    }
`;

const StyledInput = styled.input`
    border: none;
    padding: .5em;
    border-bottom: 1.5px solid #001C7A;
    background-color: rgba(4, 36, 217, .03);
    border-radius: .3em;
    &::placeholder {
      color: rgba(4, 36, 217, .5);
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(4, 36, 217, .2);
    }
    &[type="number"] {
      width: 10%;
    }
    @media (min-width: 768px) {
      &[type="number"] {
      font-size: 1.2em;
    }
    }
 `;

const StyledSwitch = styled.div`
    position: relative;
    height: 3em;
    box-sizing: border-box;
  .knobs, .layer
  {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }
  .button
  {
      position: relative;
      top: 50%;
      width: 5em;
      height: 2em;
      margin: -20px auto 0 auto;
      overflow: hidden;
  }
  .button.r, .button.r .layer
  {
      border-radius: .2em;
  }
  .button.b2
  {
      border-radius: 2px;
  }
  .checkbox
  {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      opacity: 0;
      cursor: pointer;
      z-index: 3;
  }
  .knobs
  {
      z-index: 2;
  }
  .layer
  {
      width: 100%;
      background-color: #C1D0F8;
      transition: 0.3s ease all;
      z-index: 1;
  }
  #button-10 .knobs:before, #button-10 .knobs:after, #button-10 .knobs span
  {
      position: absolute;
      top: 4px;
      width: 45%;
      height: 80%;
      font-size: 10px;
      font-weight: bold;
      text-align: center;
      line-height: 1;
      padding: 9px 4px;
      border-radius: 2px;
      transition: 0.3s ease all;
  }
  #button-10 .knobs:before
  {
      content: '';
      left: 4px;
      background-color: #001C7A;
  }
  #button-10 .knobs:after
  {
      content: 'NON';
      right: 0;
      color: #4e4e4e;
  }
  #button-10 .knobs span
  {
      display: inline-block;
      left: 4px;
      color: #fff;
      z-index: 1;
  }
  #button-10 .checkbox:checked + .knobs span
  {
      color: #4e4e4e;
  }
  #button-10 .checkbox:checked + .knobs:before
  {
      left: 42px;
      background-color: #F44336;
  }
  #button-10 .checkbox:checked + .knobs:after
  {
      color: #fff;
  }
  #button-10 .checkbox:checked ~ .layer
  {
      background-color: #fcebeb;
  }
 `;

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  option, select {
    color: rgba(4, 36, 217, .5);
    background-color: rgba(4, 36, 217, .03);
  }
  select {
    border-radius: .3em;
    border: none;
    padding: .5em;
    border-bottom: 1.5px solid #001C7A;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(4, 36, 217, .2);
    }
  }
  option {
    border-bottom: 1px solid grey;
  }
    @media (min-width: 768px) {
    }
 `;

const StyledTextarea = styled.textarea`
    border: none;
    padding: .5em;
    border-bottom: 1.5px solid #001C7A;
    background-color: rgba(4, 36, 217, .03);
    border-radius: .3em;
    &::placeholder {
      color: rgba(4, 36, 217, .5);
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(4, 36, 217, .2);
    }
    @media (min-width: 768px) {
    }
 `;

export {
  StyledInput,
  StyledSelect,
  StyledTextarea,
  StyledLabel,
  StyledSwitch,
};
