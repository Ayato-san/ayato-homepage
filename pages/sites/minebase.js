import { Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, SiteImage, Meta } from '../../components/site'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Site = () => (
    <Layout title="Minebase">
        <Title>
            Minebase <Badge>2020</Badge>
        </Title>
        <P>
            Minebase a été réalisé dans le cadre d&apos;un projet universitaire
            dans le but de valider le cours de programmation web avec comme
            seule directive l&apos;utilisation des outils HTML, CSS et
            Javascript natif.
        </P>
        <P>Ce site a pour vocation de documenter sur le jeu Minecraft.</P>
        <List ml={4} my={4}>
            <ListItem>
                <Meta>Site Internet</Meta>
                <Link href="https://projet-html--htmlrodez.repl.co/" isExternal>
                    minebase <ExternalLinkIcon mx="2px" />
                </Link>
            </ListItem>
            <ListItem>
                <Meta>Plate-Forme</Meta>
                <span>Windows/macOS/Linux</span>
            </ListItem>
            <ListItem>
                <Meta>Technologie</Meta>
                <span>HTML et javascript natif</span>
            </ListItem>
        </List>

        <SiteImage src="/images/sites/minebase.jpg" alt="Minebase" />
        {/* <SiteImage src="/images/Sites/inkdrop_02.png" alt="Minebase" /> */}
    </Layout>
)

export default Site
