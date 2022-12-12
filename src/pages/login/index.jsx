
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { Header } from '../../componentes/Header'
import { Input } from '../../componentes/Input'
import { MdMail, MdLock } from 'react-icons/md'
import { ButtonLog } from '../../componentes/Button'

import { api } from '../../services/api';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Campo Obrigatório'),
    password: yup.string().min(8, 'A senha deve possuir no mínimo 8 caracteres').required('Campo Obrigatório'),
  }).required();

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1) {
                navigate('../feed')
            } else {
                alert('E-mail ou password inválido')
            }
        }catch {
            alert('E-mail ou password inválido')
        }
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMsg={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdMail />}/>
                    <Input name="password" errorMsg={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock />}/>
                    <ButtonLog title="Entrar" type="submit"/>
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