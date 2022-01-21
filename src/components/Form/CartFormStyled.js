import styled from "styled-components"

export const StyledCartForm = styled.div`
h2 {
    padding: 10px;
    text-align: center;
}
.form-cnt {
    margin-left: 50px;
    padding: 15px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    row-gap: 10px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.26);
    max-width: 100%;
    .label {
        display: block;
        font-weight: 800;
        font-size: 0.8em;
        margin-bottom: 4px;
    }
    .field {
        width: 100%;
        height: 25px;
        border-radius: 5px;
        border: 0.1px solid grey;
    }
    .btn-submit {
        margin-top: 10px;
        cursor: pointer;
        width: 102.5%;
        padding: 7px 0;
        border: 1px solid grey;
        border-radius: 5px;
        background-color: #2196f2;
    }
    .error-msg {
        color: red;
        font-size: 0.8em;
        padding-top: 4px;
    }
}
`