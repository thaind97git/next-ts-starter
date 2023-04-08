import React from 'react'
import { Button as MButton, ButtonProps as MButtonProps } from '@mui/material'

interface ButtonProps extends MButtonProps {
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <MButton {...props}>{children}</MButton>
}
