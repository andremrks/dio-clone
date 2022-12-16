import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () =>  {
  return (
    <CardContainer>
        <ImageBackground src="https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/103900490?v=4" />
                <div>
                    <h4>André Marques</h4>
                    <p>Há 6 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de Front-end Developer</h4>
                <p>Projeto feito em React no Bootcamp da Orangetech+ na DIO...<strong><a href="https://dio.me">Saiba Mais</a></strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }