import styled from 'styled-components';
import theme from 'src/styles/theme';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-right: .5em;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;


const StyledCheckbox = styled.div` 
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? '#001C7A' : 'rgba(4, 36, 217, .2)')};
  border-radius: 3px;
  transition: all 150ms;
    ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(4, 36, 217, .5);
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`;

export { CheckboxContainer, Icon, StyledCheckbox, HiddenCheckbox }

