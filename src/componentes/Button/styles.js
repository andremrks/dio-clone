import styled, {css} from "styled-components"

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    color: #fff;
    font-size: 14px;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    cursor: pointer;

    &:hover {
        opacity: 0.65;
    }

    ${({variant}) => variant !== "primary" && css`
        font-size: 17px;
        max-width: 167px;    
        height: 33px;
        background: #e4105d;
        margin: 40px 0;
    
        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            border-radius: 22px;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
        }
    `}
`

export const ButtonLogin = styled.button`
    background: #e4105d;
    font-size: 17px;
    border-radius: 22px;
    position: relative;
    color: #fff;
    padding: 4px 12px;
    min-width: 120px;
    width: 100%;
    margin: 40px 0;
    cursor: pointer;

    &:hover {
        opacity: 0.65;
    }

    &::after {
        content: '';
        position: absolute;
        border: 1px solid #e4105d;
        border-radius: 22px;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
    }
`