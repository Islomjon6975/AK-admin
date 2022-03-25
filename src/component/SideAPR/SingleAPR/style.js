import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 106px;
`

export const Wrapper1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    background: #F1F2F4;
    border-top: 2px solid #D9D9D9;
    border-bottom: 2px solid #D9D9D9;
    padding: 0 2px;
`

export const Wrapper2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    border-bottom: 2px solid #D9D9D9;
    padding: 0 5px;
    .ant-input-number-input {
        width: 100%;
        height: 30px;
        padding: 0 11px;
        text-align: left;
        background-color: transparent;
        border: 0;
        border-radius: 2px;
        outline: 0;
        transition: all 0.3s linear;
        -webkit-appearance: textfield !important;
        -moz-appearance: textfield !important;
        appearance: textfield !important;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        letter-spacing: -0.02em;
        color: #000000;
    }
`

export const Wrapper3 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;  
    display: flex;
    align-items: center;
    color: #000000;
    
`

export const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-bottom: 24px;
`