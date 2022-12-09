import { useNavigate } from 'react-router-dom'

import banner from '../../assets/banner.png'
import { Button } from '../../componentes/Button'
import { Header } from '../../componentes/Header'

import { Container, TextContent, Title, TitleHighlight  } from './styles'

const Home = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                    Implemente 
                    <br />     
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}></Button>
            </div>
            <div>
                <img src={banner} alt="Imagem Principal" />
            </div>
        </Container>
    </>)
}

export { Home }