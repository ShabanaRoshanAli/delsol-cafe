'use client';
import { Box, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { MouseEventHandler, useState, useRef } from 'react';
import { menuArr } from '@/data';

interface ExtraProps {
  title?: string;
  subHead?: string;
  list: string[];
}

interface ItemProps {
  src?: string;
  title: string;
  para?: string;
  extra?: ExtraProps[];
}

interface Props {
  id: number;
  title: string;
  para?: string;
  items: ItemProps[];
}

export default function Card_one() {
  const [active, setActive] = useState<number>(-1);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const bgColor = useColorModeValue('white', 'gray.800');

  const toggleHandler = (id: number): MouseEventHandler<HTMLDivElement> => () => {
    setActive((prevActive) => (prevActive === id ? -1 : id));
    const itemId = id.toString();
    const element = document.getElementById(itemId);
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
  };

  return (
    <Box as='div'>
      {menuArr.map((item, index) => (
        <Box key={index} onClick={toggleHandler(item.id)} id={item.id.toString()} >
          <Image src={item.img} alt={item.title} />
          {active === item.id && (
            <Box as='div'>
              <Text>{item.para}</Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} py={12}>
                {item.items.map((card, i) => (
                  <Box
                    key={i}
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={bgColor}
                    pos={'relative'}
                    zIndex={1}>
                    {card.src && (
                      <Box
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                          transition: 'all .3s ease',
                          content: '""',
                          w: 'full',
                          h: 'full',
                          pos: 'absolute',
                          top: 5,
                          left: 0,
                          backgroundImage: `url(${card.src})`,
                          filter: 'blur(15px)',
                          zIndex: -1,
                        }}
                        _groupHover={{
                          _after: {
                            filter: 'blur(20px)',
                          },
                        }}>
                        <Image height={230} width={282} objectFit={'cover'} src={card.src} alt={card.title} />
                      </Box>
                    )}
                    <Stack pt={10} align={'center'}>
                      <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {card.title}
                      </Heading>
                      <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {card.para}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
