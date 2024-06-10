'use client'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export function Footer() {
    return (
        <footer className="flex h-12 items-center justify-center w-full border-t">
        <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
            <div className="gap-x-11 md:flex flex-1 hidden">
            <Link
                href="/"
                className="pointer flex items-center"
            >
                <img src="/logo.svg" className="mr-3" />
                <Text className="!text-white !text-base font-medium ">
                Pandem
                </Text>
            </Link>
            </div>
            <div className="flex max-w-fit items-center gap-x-4">
            <Link
                href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
                target="_blank"
                className="pointer block w-fit flex-1"
            >
                <Text variant="p" className="w-max">
                Book a demo
                </Text>
            </Link>
            <Link
                href="/terms-of-service"
                className="pointer block w-fit flex-1"
            >
                <Text variant="p" className="w-max">
                Terms of service
                </Text>
            </Link>
            <Link
                href="/privacy-policy"
                className="pointer block w-fit"
            >
                <Text variant="p">
                Privacy Policy
                </Text>
            </Link>
            </div>
        </div>
        </footer>
    )
}
