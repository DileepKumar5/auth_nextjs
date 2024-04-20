import { CardWrapper } from '@/components/auth/card-wrapper'
import { LoginForm } from '@/components/auth/login-form'
import React from 'react'

const LoginPage = () => {
    return (
        <CardWrapper
            header='Sign In'
            backButtonText="Don't have account? Register"
            backButtonHref='/auth/register'
            showSocialIcons
        >
            <LoginForm/>
        </CardWrapper>
    )
}

export default LoginPage