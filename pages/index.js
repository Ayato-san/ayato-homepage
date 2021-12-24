import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon,
    useColorModeValue
} from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
    <Layout title={'Homepage'}>
        <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
            Bonjour, je suis développeur full-stack basé en France!
        </Box>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Biographie
            </Heading>
            <BioSection>
                <BioYear>2002</BioYear>
                Naissance à Cahors, France.
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Passions
            </Heading>
            <Paragraph>
                Arts Matiaux, Modélisation 3D, Montage vidéo et photo, Effets
                spéciaux, Musique
            </Paragraph>
        </Section>
    </Layout>
)

export default Home
