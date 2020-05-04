import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledMessageBox = styled.div`
    display: flex;
    .message-list {
      width: 40%;
    }
    .chat {
      width: 60%;
    }
    @media (min-width: 768px) {
    }
 `;


export default StyledMessageBox;