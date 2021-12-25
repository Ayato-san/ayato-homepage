import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const CGIItem = ({ children, title }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            {children}
            <Text fontSize={18}>{title}</Text>
        </LinkBox>
    </Box>
)
export const SitesGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <NextLink href={`/sites/${id}`}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
)
