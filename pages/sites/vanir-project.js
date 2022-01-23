import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, SiteImage, Meta } from '../../components/site'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Site = () => (
    <Layout title="Vanir Project">
        <Container>
            <Title>
                Vanir Project <Badge>2021-....</Badge>
            </Title>
            <P>
                Vanir project est un groupe de plusieurs amis qui se sont
                rencontrés par le biais des jeux vidéos. Ayant des passions et
                des activités différentes mais, comme point commun
                l&apos;intérêt du jeu. Ces membres ont décidé de s&apos;unir
                afin de créer une structure qui réunit des joueurs du monde
                entier avec comme valeurs: notamment le fairplay, le savoir
                vivre sur internet, l&apos;amusement etc...
            </P>
            <P>
                Afin de développer la structure et de distribuer les gains des
                tournois, ils ont décidé de créer une crypto-monnaie
                spécialement conçue pour Vanir : les &quot;vani&quot; . Cette
                crypto-monnaie a pour but de récompenser les joueurs lors des
                tournois, mais aussi les membres de l&apos;administration ainsi
                que toutes les personnes qui travaillent activement au sein de
                la structure, tels que les coachs, qui proposeront aux élèves de
                s’améliorer sur des jeux, les modérateurs, les graphistes et les
                rédacteurs.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Site Internet</Meta>
                    <Link href="#">
                        Pas encore en ligne <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Plate-Forme</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Technologie</Meta>
                    <span>PHP, Synphoni</span>
                </ListItem>
            </List>

            <SiteImage
                src="/images/sites/vanir-project.jpg"
                alt="Vanir Project"
            />
            {/* <SiteImage src="/images/Sites/inkdrop_02.png" alt="Vanir Project" /> */}
        </Container>
    </Layout>
)

export default Site
