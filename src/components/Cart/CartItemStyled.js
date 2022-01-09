import styled from 'styled-components';

export const StyledCartItem = styled.div`
table {
    width: 95%;
    tbody {
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 50px;
        padding: 20px 30px;
        margin-right: 40px;
        transition: all .3s ease-in-out;
        border-radius: 25px;
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            transition: all .2s ease-in-out;
        }
    tr {
        width: 100%;
        button {
            cursor: pointer;
        }
    }
    .prod-img {
        max-width: 95px; 
    }
}

`