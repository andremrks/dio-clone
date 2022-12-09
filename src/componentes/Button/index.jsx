import React from 'react'

import { useNavigate } from 'react-router-dom'

import { ButtonContainer } from './styles'
import { ButtonLogin } from './styles'

const Button = ({title, variant="primary", onClick}) => {

  const navigate = useNavigate()

  const handleClickSignIn = () => {
      navigate('/login')
  }

  return (
    <ButtonContainer variant={variant} onClick={handleClickSignIn}>
        {title}
    </ButtonContainer>
  )
}

export { Button }

const ButtonLog = ({title, variant="primary", onClick}) => {
  return (
    <ButtonLogin variant={variant} onClick={onClick}>
        {title}
    </ButtonLogin>
  )
}

export { ButtonLog }