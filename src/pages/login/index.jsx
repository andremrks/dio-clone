import { useNavigate } from 'react-router-dom'

import { Header } from '../../componentes/Header'
import { Input } from '../../componentes/Input'
import { MdMail, MdLock } from 'react-icons/md'
import { ButtonLog } from '../../componentes/Button'

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper,  } from './styles'

const Login = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="E-mail" leftIcon={<MdMail />}/>
                    <Input placeholder="Password" type="password" leftIcon={<MdLock />}/>
                    <ButtonLog title="Entrar" type="button" onClick={handleClickSignIn}/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
            </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }