/* eslint-disable @next/next/no-img-element */
interface MenuImageProps {
    imagePath: string[]
    imageName: string
    imageExtension?: string
    className?: string
}

const MenuImage: React.FC<MenuImageProps> = ({className = "", imageExtension = "jpg", imageName, imagePath}) => {

    const searchPath= imagePath.map(e=>`/${e}`).join("")

    const getFullImagePath = [[searchPath, "/", imageName].join(""), imageExtension ].join(".")

    return (
        <a className={className} target="_blank" href={getFullImagePath} rel="noreferrer">

        <img src={getFullImagePath} alt={imageName} />
      </a>
    )
}

export default MenuImage