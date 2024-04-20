"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { SocialButtons } from "./social-buttons";
import { Button } from "../ui/button";
import { BackButton } from "./back-button";



interface CardWrapperProps {
    children: React.ReactNode;
    header: string;
    backButtonText: string;
    backButtonHref: string;
    showSocialIcons?: boolean;
}

export const CardWrapper = ({ children, header, backButtonText, backButtonHref, showSocialIcons }: CardWrapperProps) => {
    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>{header}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                {children}
            </CardContent>

            {showSocialIcons && (
                <CardFooter>
                    <SocialButtons />
                </CardFooter>
            )}

            <CardFooter className="flex items-center justify-center">
                <BackButton label={backButtonText} href={backButtonHref}/>
            </CardFooter>

        </Card>
    )
}