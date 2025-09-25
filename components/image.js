import NextImage from 'next/image'
import { useState } from 'react'

const Image = ({ src, alt, description }) => {
    const [fullScreen, setFullScreen] = useState(false)

    const handleClick = () => {
        setFullScreen(!fullScreen)
    }

    return (
        <div
            className={`grid-item-thumbnail${fullScreen ? ' full-screen' : ''}`}
            onClick={handleClick}
        >
            <NextImage src={src} alt={alt} placeholder="blur" />
            {description && <p className="image-description">{description}</p>}
        </div>
    )
}

export default Image
