import styled from 'styled-components';
import theme from 'src/styles/theme';

const StyledLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;

    // SIDER COMPONENT
    .sider {
        color: white;
        order: 3;
        position: sticky;
        bottom: 0;
        left: 0;
        width: 100vw;
        background-color: #001c7a;
        font-size: .7em;
        display: flex;
        justify-content: space-around;
        .sider-main-menu, .sider-secondary-menu {
            padding: .5em;
            width: 100%;
            text-align: end;
            transition: all .5s ease;
        }
    }

    // HEADER COMPONENT
        .header {
            display:flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .header-name {
                margin-right: 2em;
                font-size: .7em;
            }
            .header-search {
                margin-left: 1em;
                input {
                  width: 80%;
                }
            }
        }

        .layout-content, main {
            min-height: 100vh;
        }
    @media (min-width: 768px) {
        flex-flow: row wrap;

        // SIDER COMPONENT
        .sider {
            all:unset;
            width:25%;
            height: 100vh;
            position:fixed;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            top: 0;
            color: white;
            order: 0; 
            overflow: hidden;
            background-color: #001c7a;
            font-size: 1em;
            .sider-main-menu {
                display:flex;
                height: 50%;
                justify-content: space-evenly;
                flex-flow: column nowrap;
                padding-left: 2em;
                padding-top: 1em;
                width: auto;
                text-align: start;
            }
            .sider-secondary-menu {
                padding-left: 2em;
                padding-bottom: 1em;
                height: 25%;
                display:flex;
                justify-content: space-evenly;
                flex-flow: column nowrap;
                width: auto;
                text-align: start;
            }
            .sider-logo {
                padding-left: 1em;
            }
            .sider-link--active {
            background-color: white;
            padding: 1em;
            margin-left: .2em;
            color: #001c7a;
            border-radius: 1em;
            position: relative;
            &:after {
                content: ' ';
                background-color: white;
                position: absolute;
                right: -1em;
                bottom: 0;
                height: 100%;
                width: 2em;
                z-index: 10;
            }
        }
        }
        // HEADER COMPONENT
        .header {
            display:flex;
            justify-content: space-between;
            width: 100%;
            .header-name {
                margin-right: 2em;
                font-size: 1em;
            }
            .header-search {
                margin-left: 1em;
            }
        }

        // MAIN COMPONENT
        .layout-content {
            margin-left: 25%;
            width: 100%;
        }
    }
 `;

export default StyledLayout;