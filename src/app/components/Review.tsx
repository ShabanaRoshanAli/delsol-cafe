import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    SimpleGrid,
    Avatar,
} from '@chakra-ui/react';
import ButtonComponent from './ButtonComponent';



const reviewArr = [
    {
        title: "OUR GO TO SPOT!",
        date: "May 24, 2021"
    },
    {
        title: "AWESOME FOOD",
        date: "May 22, 2021"
    },
    {
        title: "PICK THREE LUNCH DEAL IS A TRUE VALUE",
        date: "May 12, 2021"
    },
]

export default function ReviewComponent() {
    const size = '52px'
    const color = 'teal'
    return (
        <Container maxW={'100vw'} backgroundImage={'url(/orange-bacground.jpg)'} backgroundSize={'cover'} backgroundPosition={'center center'}>
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }} align={'center'}>
                    <Box as='div'>
                        <Heading>Review</Heading>
                        {
                            reviewArr.map((item, index) => (
                                <Flex h="auto" w="full" p={2} overflow="hidden" key={index}>
                                    <Box as="div" position="relative" w={size} h={size} mr={2}>
                                        <Avatar src="/review-avatar_34.png" size="full" position="absolute" top={0} />
                                    </Box>
                                    <Box as="div" position="relative">
                                        <Text textDecoration="underline" fontWeight={'bold'} fontSize="small">{item.title}</Text>
                                        <Text as="p" fontSize="small">{item.title}</Text>
                                    </Box>
                                </Flex>
                            ))
                        }
                    </Box>
                </Stack>
                <Stack flex={1} justify={'center'} align={'center'} position={'relative'} w={'full'}>
                    <Box as='div'>
                        <Heading my={2}>Gallery</Heading>
                        <PhotoAlbum />
                        <ButtonComponent title="VIEW GALLERY" bg={'gray.900'} color={'white'} hover={{ bg: 'orange.500' }} link="/gallery" />
                    </Box>
                </Stack>
            </Stack>
        </Container>
    );
}

const PhotoAlbum = () => {
    const photos = [{
        src: '/California-Salad.jpg',
    },
    {
        src: '/Prosciutto-Pizza.jpg',
    },
    {
        src: '/We-Knead-It.jpg',
    },
    {
        src: '/Strawberry-Spinach-Salad_gallery.jpg',
    },
    {
        src: '/avocado-club (1).jpg',
    },
    {
        src: '/lasagna.jpg',
    },
    ];
    return (
        <SimpleGrid columns={2} my={5}>
            {
                photos.map((item, index) => (
                    <Box key={index}>
                        <Image src={item.src} alt='photo' />
                    </Box>
                ))
            }
        </SimpleGrid>
    )
}