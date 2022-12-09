import { Link } from 'react-router-dom'

import { Button } from '../../componentes/Button'
import { Card } from '../../componentes/Card'
import { Header } from '../../componentes/Header'
import { UserInfo } from '../../componentes/UserInfo'

import { Container, Column, Title, TitleHighlight  } from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={89} nome="André Marques" image="https://avatars.githubusercontent.com/u/103900490?v=4" />
                <UserInfo percentual={70} nome="André Marques" image="https://avatars.githubusercontent.com/u/103900490?v=4" />
                <UserInfo percentual={68} nome="André Marques" image="https://avatars.githubusercontent.com/u/103900490?v=4" />
                <UserInfo percentual={40} nome="André Marques" image="https://avatars.githubusercontent.com/u/103900490?v=4" />
                <UserInfo percentual={33} nome="André Marques" image="https://avatars.githubusercontent.com/u/103900490?v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed }