import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not found</Heading>
            <Text>La page que vous regardez n&apos;pas était trouvé.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="blue">
                        Retourner à l&apos;accueil
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
