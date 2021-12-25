import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, SiteImage, Meta } from '../../components/site'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Site = () => (
    <Layout title="Minebase">
        <Container>
            <Title>
                Minebase <Badge>2020</Badge>
            </Title>
            <P>
                Minebase à était réaliser dans le cadre d'un projet afin de
                valider le cours de programmation web avec comme seul outils à
                notre disposition HTML, CSS et Javascript natif
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Site Internet</Meta>
                    <Link href="https://projet-html--htmlrodez.repl.co/">
                        minebase <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Plate-Forme</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Technologie</Meta>
                    <span>html et javascript natif</span>
                </ListItem>
            </List>

            <SiteImage src="/images/sites/minebase.jpg" alt="Minebase" />
            {/* <SiteImage src="/images/Sites/inkdrop_02.png" alt="Minebase" /> */}
        </Container>
    </Layout>
)

export default Site
