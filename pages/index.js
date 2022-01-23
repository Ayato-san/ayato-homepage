import {
    Heading,
    Container,
    Box,
    Image,
    useColorModeValue
} from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
    <Layout title={'Homepage'}>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Développeur full-stack basé en France!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rayann Karon
                    </Heading>
                    <p>Artisan numérique ( Développeur / Artiste 3D )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/rayann.png"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Biographie
                </Heading>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Obtention du Bac S avec option science du numérique, France.
                </BioSection>
                <BioSection>
                    <BioYear>2020-2022</BioYear>
                    DUT informatique à Rodez, France.
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Passions
                </Heading>
                <Paragraph>
                    Arts Matiaux, Modélisation 3D, Montage vidéos/photos, Effets
                    spéciaux, Musique et Culture Asiatique (manga, animation,
                    ...)
                </Paragraph>
            </Section>
        </Container>
    </Layout>
)

export default Home
