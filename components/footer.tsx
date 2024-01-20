import Link from "next/link";

import { cn } from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import { Icons } from "@/components/icons";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container flex flex-row justify-center py-4">
                <div className="break-normal justify-center text-base text-muted-foreground">
                    <p
                        className="text-white"
                    >
                        CnCloud
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
