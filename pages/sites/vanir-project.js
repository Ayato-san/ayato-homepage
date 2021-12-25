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
                rencontrés sur les jeux vidéos , partagent des passions et des
                activités comme ils en diffèrent les uns des autres. Ces membres
                ont décidé de se réunir afin de créer une structure qui réunit
                des joueurs du monde entier aux valeurs qu’ils défendent ,
                notamment le fairplay, le savoir vivre sur internet ,
                l’amusement etc...
            </P>
            <P>
                Afin de faire vivre la structure ils ont décidé de concentrer
                les récompenses de leurs tournois vers une crypto-monnaie créé
                spécialement pour le projet : les vani. Cette crypto-monnaie
                servira en premier temps de récompense pour les tournois mais
                aussi à récompenser les membres de l&apos;administration ainsi
                que toutes les personnes qui travaillent activement au sein de
                la structure tel que des coachs, qui proposeront à des élèves
                gratuitement de s’améliorer sur des jeux auxquels ils sont
                spécialisés , des modérateurs , des graphistes, des rédacteurs
                ainsi que les membres de l&apos;administration.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Site Internet</Meta>
                    <Link href="#">
                        pas encore en ligne <ExternalLinkIcon mx="2px" />
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
