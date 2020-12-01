import styled from 'styled-components'

export const TodoForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    margin: 20px;

`

export const TodoInput = styled.input`
    padding: 20px;
    background: transparent;
    border: 2px solid #FF073A;
    border-radius: 50px;
    width: 70vw;
    max-width: 300px;
    outline: none;
    color: #fff;
    margin: 20px;
`

export const TodoSubmit = styled.button`
    padding: 10px;
    background: transparent;
    color: #fff;
    border: 2px solid #FF073A;
    border-radius: 50px;
    width: 100px;
    margin: 20px;
    outline: none;
    transition: 0.2s ease-in-out;

    &:hover {
        background: #FF073A;
    }

`