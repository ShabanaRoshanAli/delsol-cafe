'use client'

import { Stack, Flex, Button, Text, HStack, useBreakpointValue, Image } from '@chakra-ui/react'
import Link from 'next/link'

export default function TheAppComponent() {
    return (
        <Flex
            w={'100vw'}
            h={'50vh'}            
            bg={'blackAlpha.800'}
            justify={'center'}
            >
            <HStack>
                <Image src='cds-logo.png' alt='' w={72} h={72} />
            </HStack>
            <HStack
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}>
                <Stack maxW={'2xl'} align={'center'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        DOWNLOAD THE APP
                    </Text>
                    <Stack direction={'row'}>
                        <Link href='https://play.google.com/store/apps/details?id=com.app.p4369IE&hl=en' target='-blank'>
                        <Image src='google-play.png' alt='icon' w={36} h={12} />
                        </Link>
                        <Link href='https://apps.apple.com/us/app/cafe-del-sol/id1466894881' target='-blank'>
                        <Image src='apple-store.png' alt='icon' w={36} h={12} />
                        </Link>
                    </Stack>
                </Stack>
            </HStack>
        </Flex>
    )
}