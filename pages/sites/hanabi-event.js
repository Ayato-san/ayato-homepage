import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, SiteImage, Meta } from '../../components/site'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Site = () => (
    <Layout title="Hanabi Event">
        <Container>
            <Title>
                Hanabi Event <Badge>2021-2022</Badge>
            </Title>
            <P>
                HANABI EVENT est une association loi 1901 créée en 2021 dont le
                but est de promouvoir, en France, les cultures asiatiques
                (Chine, Corée, Japon, Thaïlande, Vietnam, etc.…) en France sous
                des formats cinématographiques (interviews, films, etc.…) et
                artistiques (illustrations, danses, composition musicale,
                etc.…). Le site internet vise à faciliter la communication et
                l&apos;interactivité avec les personnes qui ne sont pas membres
                de l&apos;association afin de partager les projets de
                l&apos;association en permettant la communication
                d&apos;information, d&apos;articles, d&apos;évènements, de
                formations, de photos en galerie.
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
                    <span>PHP, yasmf (framework php éducatif)</span>
                </ListItem>
            </List>

            <SiteImage
                src="/images/sites/hanabi-event.jpg"
                alt="Hanabi Event"
            />
            {/* <SiteImage src="/images/Sites/inkdrop_02.png" alt="Hanabi Event" /> */}
        </Container>
    </Layout>
)

export default Site
