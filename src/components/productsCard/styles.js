import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 250px;
    height: fit-content;
    margin: 15px 20px;
    background-color: white;
    padding: 20px 0px;
    text-align: center;

    img {
        width: 190px;
        margin-bottom: 10px;
    }

    img + img {
        height: 190px;
    }

    p{
        font-size: 15px;
        margin-bottom: 10px;
    }
`