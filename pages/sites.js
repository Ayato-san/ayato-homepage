import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SitesGridItem } from '../components/grid-item'

import thumbMinebase from '../public/images/sites/minebase.jpg'
import thumbHanabi from '../public/images/sites/hanabi-event.jpg'
import thumbVanir from '../public/images/sites/vanir-project.jpg'

const Site = () => (
    <Layout title="Sites">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Sites
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <SitesGridItem
                        id="minebase"
                        title="Minebase"
                        thumbnail={thumbMinebase}
                    >
                        Un site pour l'association Hanabi Event, qui a pour but
                        de promouvoir la culture Asiatique
                    </SitesGridItem>
                    <SitesGridItem
                        id="hanabi-event"
                        title="Hanabi Event"
                        thumbnail={thumbHanabi}
                    >
                        Un site pour l'association Hanabi Event, qui a pour but
                        de promouvoir la culture Asiatique
                    </SitesGridItem>
                </Section>
                <Section>
                    <SitesGridItem
                        id="vanir-project"
                        title="Vanir Project"
                        thumbnail={thumbVanir}
                    >
                        Un site pour l'organisme Vanir Project,
                    </SitesGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Site
