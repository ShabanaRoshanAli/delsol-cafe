'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import ButtonComponent from './ButtonComponent'

export default function HeroComponent() {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            WE KNEAD IT. YOU LOVE IT.
          </Text>
          <Stack direction={'row'}>
            <ButtonComponent title="NEW MENU" link='/menu' bg={'orange.400'} color={'white'} hover={{ bg: 'orange.500' }}  />
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}