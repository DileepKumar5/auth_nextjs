'use client';

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const SocialButtons = () => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <Button className="w-full" variant="outline" size="lg" onClick={()=> {}}>
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full" onClick={()=> {}} >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    )
}
