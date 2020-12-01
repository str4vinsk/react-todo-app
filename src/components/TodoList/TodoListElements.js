import styled from 'styled-components'

export const List = styled.ul`
    list-style: none;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70vw;
        max-width: 500px;
        white-space: pre-line; 
        flex-flow: wrap;
        overflow-wrap: break-all;
        word-break: break-all;
        transition: 0.2s ease-in-out;
        padding: 20px;
        background: linear-gradient(to right,#6e0224,#a8359d);
        margin: 20px;
        color: #fff;
    }

    div {
        display: flex;
    }

    .btn {
        margin-left: 10px;
        cursor: pointer;
    }

    li.active {
        text-decoration: line-through;
        opacity: 50%;
    }
`