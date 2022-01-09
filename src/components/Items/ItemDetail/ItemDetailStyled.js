import  styled  from 'styled-components';
import { theme_secondary, theme_primary } from '../../../styles/globalColors';

export const StyledItemDetail = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
align-items: center;
#info {
    display: flex;
    align-items: center;
    column-gap: 240px;
    margin-top: 50px;
    margin-left: 30px
}
#left-side {
    display: flex;
    flex-direction: column;
    img {
        width: 350px;
    }
}
#right-side {
    display: flex;
    flex-direction: column;
    h1 {
        margin-bottom: 15px;
        font-weight: 600;
        letter-spacing: -0.4px;
    }
    h2 {
        padding-bottom: 30px;
    }
    h3 {
        width: 80%;
        text-align: justify;
        letter-spacing: 0.2px;
        line-height: 29px;
    }
    .finalizar-compra-btn {
        margin: 70px 0;
        background-color: ${theme_primary};
        color: white;
        text-decoration: none;
        width: 250px;
        text-align: center;
        font-size: 20px;
        padding: 13px 0px;
        border-radius: 10px;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: ${theme_secondary};
            color: ${theme_primary};
            cursor: pointer;
            transition: all .3s ease-in-out;
        }
    }
}
`