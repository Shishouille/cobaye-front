import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledMessageBox = styled.div`
    display: flex;
    // LEFT PART - LIST
    .message-list {
      width: 40%;
      border-right: 2px solid #001c7a;
      max-height: 95vh;
      overflow-y: auto;
      .message-list-card {
        width: 85%;
        border-radius: .3em;
        box-shadow: 5px 5px 14px -5px #B8B9C6;
        margin: 1em auto;
        padding: .7em;
        background-color: rgba(4, 36, 217, .05);
        .message-infos {
          display: flex;
          justify-content: space-between;
          padding: 0 .5em;
          .date {
            font-size: .8em;
            color: grey;
          }
          svg {
            width: 1.2em;
            height: 1.2em;
          }
        }
        .message-main {
          color: rgba(4, 36, 217, .3);
          padding: 0 .5em;
          .excerpt {
            padding: .5em 0;
            color: black;
          }
          .title {
            padding-bottom: .5em;
            font-size: .8em;
            text-transform: uppercase;
          }
        }
      }
    }

    // RIGHT PART - MESSAGES 
    .chat {
      width: 60%;
      margin-left: 3em;
    }
    .messages-wrapper {
      max-height: 80vh;
      overflow-y: auto;
    }
    .message-single {
      .message-author {
        margin-left: 3em;
      }
      div {
        background-color: rgba(4, 36, 217, .05);
        border-radius: 5em 0 0 5em;
        padding-left: 3em;
        padding-top: .5em;
        padding-bottom: .5em;    
        span {
          display: block;
          font-size: .6em;
          font-weight: bold;
        }
      } 
    }
    .your-message {
      border-radius: 0 5em 5em 0;
      text-align: end;
        .message-author {
          margin-right: 3em;
        } 
        div {
          padding-left:0;
          padding-right: 3em;
          background-color: #001c7a;
          color: white;
        }
    }   
    .typer {
      display: flex;
      justify-content: flex-end;
      button {
        border-radius: 50%;
        background-color: #001c7a;
        width: 3em;
        height: 3em;   
        margin-right: 2em;     
      }
      svg {
        width: 1.5em;
        height: 1.5em;
      }
      input {
        height: 3em;
        border: none;
        border-bottom: 1px solid #001c7a;
        width: 80%;
        margin-right: 2em;
        padding-left: 1em;
      }
    }
    @media (min-width: 768px) {
    }
 `;


export default StyledMessageBox;