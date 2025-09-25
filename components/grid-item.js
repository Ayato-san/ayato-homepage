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
        <GridItemStyle />
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
        .grid-item-thumbnail, .grid-item-thumbnail img{
          border-radius: 8px;
        }
        img.grid-item-thumbnail, .grid-item-thumbnail img{
          cursor: zoom-in;
        }
        .grid-item-thumbnail.full-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1000;
          cursor: zoom-out;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .grid-item-thumbnail.full-screen img{
          width: max(732px, 60%) !important;
          min-width: 0 !important;
          cursor: zoom-out;
        }
        .grid-item-thumbnail.full-screen p{
          color: var(--chakra-colors-whiteAlpha-900);
          font-weight: 700;
          font-size: 1.2em;
        }
      `}
    />
)
