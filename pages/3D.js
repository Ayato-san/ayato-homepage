import Layout from '../components/layouts/article'
import Image from 'next/image'
import { ImgGrid } from '../components/grid-item'

const CGI = () => (
    <Layout title="3D">
        <ImgGrid title="Décors">
            <Image
                src={require('../public/rendus/decors.jpg')}
                alt={'mon décors 3D'}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
        </ImgGrid>
        <ImgGrid title="Personnage" delay={0.2}>
            <Image
                src={require('../public/rendus/RX78-2.jpg')}
                alt={'RX 78-2'}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
        </ImgGrid>
        <ImgGrid title="Collection Bottle of world" delay={0.4}>
            <Image
                src={require('../public/rendus/Mushroom.jpg')}
                alt={'bottle of mushroom'}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
        </ImgGrid>
    </Layout>
)

export default CGI
