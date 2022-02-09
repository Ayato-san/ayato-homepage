import Layout from '../components/layouts/article'
import Image from 'next/image'
import { ImgGrid } from '../components/grid-item'

const decors = require('../public/rendus/décors.png')
const rx = require('../public/rendus/RX78-2.png')
const mushroom = require('../public/rendus/Mushroom.png')

const CGI = () => (
    <Layout title="3D">
        <ImgGrid title="Décors">
            <Image
                src={decors}
                alt={'mon décors 3D'}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
        </ImgGrid>
        <ImgGrid title="Personnage" delay={0.2}>
            <Image
                src={rx}
                alt={'RX 78-2'}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
        </ImgGrid>
        <ImgGrid title="Collection Bottle of world" delay={0.4}>
            <Image
                src={mushroom}
                alt={'bottle of mushroom'}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
        </ImgGrid>
    </Layout>
)

export default CGI
