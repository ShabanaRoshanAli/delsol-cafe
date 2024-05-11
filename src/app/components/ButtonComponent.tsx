import { Button, Link } from '@chakra-ui/react'


interface Props {
    title: string
    bg: string
    color: string
    hover: {
        bg: string
    }
    link?: string | undefined
}
const ButtonComponent = ({ title, bg, color, hover, link }: Props) => {
    return (
        link ?
            <Button
                bg={bg}
                color={color}
                _hover={{ hover }}
            >
                <Link href={link}>
                    {title}
                </Link>
            </Button>
            :
            <Button
                bg={bg}
                color={color}
                _hover={{ hover }}
            >
                {title}
            </Button>
    )
}

export default ButtonComponent