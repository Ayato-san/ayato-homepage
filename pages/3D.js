import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { CGIItem } from '../components/grid-item'
import Model from '../components/model'

const CGI = () => (
    <Layout title="3D">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Modèles créés
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <CGIItem title="Inkdrop">
                        <Model
                            modPath={'Bootle-of-Mushroom'}
                            modelName={'Bootle of Mushroom'}
                        ></Model>
                    </CGIItem>
                </Section>
                <Section>
                    <CGIItem title="walknote">
                        <Model
                            modPath={'Bootle-of-Mushroom'}
                            modelName={'Bootle of Mushroom'}
                        ></Model>
                    </CGIItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default CGI
