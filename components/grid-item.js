import NextLink from 'next/link'
import Image from 'next/image'
import Section from '../components/section'
import {
    Box,
    Text,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    Heading
} from '@chakra-ui/react'
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
                <LinkOverlay href={`/sites/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const ImgGrid = ({ children, title, delay = 0 }) => (
    <Section delay={delay}>
        <Heading as="h3" variant="section-title">
            {title}
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
            {children}
        </SimpleGrid>
    </Section>
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
