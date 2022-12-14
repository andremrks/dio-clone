import React from 'react'

import { Controller } from "react-hook-form";
import { IconContainer, InputContainer, InputText, ErrorText } from './style'

const Input = ({leftIcon, name, control, errorMsg, ...rest}) => {
  return (
    <>
    {errorMsg ? <ErrorText>{errorMsg}</ErrorText> : null}
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} {...rest} />}
        />
    </InputContainer>
    </>
    )
}

export { Input }