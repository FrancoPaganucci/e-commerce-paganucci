import styled from 'styled-components';
import { theme_primary, theme_secondary } from "../../styles/globalColors";

export const StyledHeader = styled.header`
background-color: ${theme_primary};
padding: 15px;
display: flex;
align-items: center;
justify-content: space-between;
.it-span {
    color: ${theme_secondary};
}
.p-welcome {
    margin-left: 30px;
    margin-top: 9px;
}
.header-left-side {
    display: flex;
    text-decoration: none;
    align-items: center;
    column-gap: 15px;
    color: #FFFFFF;
}
nav {
    margin-right: 30px;
    display: flex;
    column-gap: 50px;
    align-items: center;
    a {
        text-decoration: none;
        font-size: 20px;
        color: #FFFFFF;
        &:hover {
            text-decoration: underline 1px solid;
        }
    }
}
.hidden {
    visibility: hidden;
}
`