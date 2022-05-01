import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    p{
        background-color: #f0efeb;
        width: 300px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        border-radius: 15px;
        :hover{
            cursor: pointer;
            background-color: #eae4e9;
        }
    }
`