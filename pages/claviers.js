import { ImgGrid } from '../components/grid-item'
import Image from '../components/image'
import Layout from '../components/layouts/article'

const Clavier = () => (
    <Layout title="Claviers">
        <ImgGrid title="Mes claviers">
            <Image
                src={require('../public/images/keyboards/twohe-rentree-des-classes.jpg')}
                alt={'Clavier Wooting Two HE avec keycaps Rentrée des classes'}
                description={
                    'Clavier Hall Effect au format 100% avec la capsule Rentrée des classes de chez Keycapsule.'
                }
            />
            <Image
                src={require('../public/images/keyboards/gmmk2-video-color.jpg')}
                alt={'Clavier GMMK2 avec keycaps Vidéo Color'}
                description={
                    'Clavier mécanique au format 96% avec la capsule Vidéo Color de chez Keycapsule.'
                }
            />
        </ImgGrid>
    </Layout>
)

export default Clavier
