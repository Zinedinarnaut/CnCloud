"use client"

import Link from 'next/link';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

import { Skeleton } from "@/components/ui/skeleton"

const Navbar: React.FC = () => {
    const { setTheme, theme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className=" p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" legacyBehavior>
                    <a className="text-white text-xl font-bold mr-[-65vh]">CnCloud</a>
                </Link>

                {/* Navigation Links */}
                <div className={`flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8`}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Beautifully designed components built with Radix UI and
                                                        Tailwind CSS.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/docs" title="Introduction">
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem href="/docs/installation" title="Installation">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Documentation
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="space-x-4 flex items-center">
                    <Button variant="outline">Login</Button>
{/*                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <Skeleton className="h-12 w-12 rounded-full" />
                    </Avatar>*/}
                </div>

{/*                 Theme Mode Toggle
                <div className="flex items-center space-x-4">
                    <div className="space-x-4 flex items-center">
                        <Button variant="ghost">Login</Button>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <Skeleton className="h-12 w-12 rounded-full" />
                        </Avatar>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <SunIcon className="h-[1.0rem] w-[1.0rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>*/}

                {/* Hamburger Menu for smaller screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar;
