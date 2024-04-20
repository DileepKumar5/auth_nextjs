"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode; //mandatory prop
    mode?: 'redirect' | 'modal'; //option prop
}

export const LoginButton = ({children,mode = 'redirect' }: LoginButtonProps) => {

    const router = useRouter();

    const handleClick = ()=> {
        console.log("Login Button Clicked !");
        router.push("/auth/login");
    }

    if(mode === 'modal'){
        return (
            <span>
                This will be a Model Button
            </span>
        )
    }

    return (
        <span onClick={handleClick}>
            {children}
        </span>
    )
}
