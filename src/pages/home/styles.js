import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 10rem;
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #fff;
`

export const TitleHighlight = styled.span`
    font-size: 40px;
    color: #e4105d;
`

export const TextContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 420px;
    line-height: 22px;
    color: #fff;
`