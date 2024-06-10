import React from 'react'
import { Text } from '@chakra-ui/react'

interface FeatureProps {
    icon: React.ReactNode
    headline: string
    description: string
}

const Feature: React.FC<FeatureProps> = ({
    icon,
    headline,
    description
    }) => {
    return (
        <div
        className="flex flex-col gap-6 text-left max-w-72 md:items-start
            items-center"
        >
        <div className="py-4 px-4 rounded-md border max-w-fit">
            {icon}
        </div>
        <Text variant="h3">{headline}</Text>
        <Text variant="p" className="text-minor">
            {description}
        </Text>
        </div>
    )
}

export default Feature
