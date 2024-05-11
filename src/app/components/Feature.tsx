'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image, Button , Link} from '@chakra-ui/react'
import ButtonComponent from './ButtonComponent'


interface FeatureProps {
  title: string
  text: string
  icon: string
  btn:string
  href:string
}

const Feature = ({ title, text, icon, btn, href }: FeatureProps) => {
  return (
    <Stack align={'center'} justify={'center'}>
    <Text color={'gray.500'} fontWeight={600} fontSize={'24px'}>{title}</Text>
      <Flex
        w={52}
        h={52}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        <Image src={icon} alt='icon' />
      </Flex>
      <Text color={'gray.600'} textAlign={'center'} fontSize={'14px'}>{text}</Text>
      <ButtonComponent title={btn} bg='orange.400' color='white' hover={{ bg: 'orange.500' }} link={href} />
    </Stack>
  )
}

export default function FeatureComponent() {
  return (
    <Box px={4} py={20} w={'full'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={'/menu-feature.png'}
          title={'MENU'}
          text={
            'As the areas premiere California Pizzeria, Café del Sol specializes in handmade gourmet pizzas, signature sandwiches, pastas, and salads'
          }
          btn={'MENU'}
          href='/menu'
        />
        <Feature
          icon={'/locations-feature.png'}
          title={'LOCATION'}
          text={
            'With five locations in Pennsylvania, Maryland, West Virginia, and Virginia, you’re just a short drive from enjoying the unique cuisine of Café del Sol.'
          }
          btn='FIND US'
          href='/location/overview'
        />
        <Feature
          icon={'order-online-feature.png'}
          title={'ONLINE ORDERING'}
          text={
            'For delivery and carryout orders, Café del Sol offers convenient online ordering from your computer, tablet, or smartphone.'
          }
          btn='ORDER NOW!'
          href='/online-order'
        />
      </SimpleGrid>
    </Box>
  )
}