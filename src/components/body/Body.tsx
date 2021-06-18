import { SimpleGrid , Box, Image, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { PopOver } from './PopOver'

const apiURL = "https://vineet8588.pythonanywhere.com/allvideos"

interface Props {
    
}

export const Body = (props: Props) => {
    
    const [data, setdata] = useState<Array<any>>()
    const [curr, setcurr] = useState<any>()
    

    useEffect(() => {
        fetch(apiURL)
        .then(
            res => res.json()
        )
        .then(data =>{
            setdata(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const bg = useColorModeValue("bg_light", "bg_dark")
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <PopOver data={curr} isOpen={isOpen} onClose={onClose}/>
        
        <SimpleGrid p="45px" columns={[1,2,3,4]} spacing={10}>
            {
                data?.slice(0).reverse().map((post)=> (
                    <Box 
                        cursor="pointer" 
                        _hover={{transform:'scale(1.1)', transition:'all .2s ease-in-out;'}} 
                        onClick={()=>{onOpen(); setcurr(post);}} 
                        key={post.id}  
                        rounded="md" 
                        boxShadow="md" 
                        overflow="hidden"
                        > 
                        <Image src={process.env.PUBLIC_URL+"/thumbnail.jpg"} /> 
                        <Box bg={bg} p={4}>
                            <Text noOfLines={[1, 2]}>
                                {post.title}
                            </Text>
                        </Box> 
                    </Box>
                    )
                )
            }
            
        </SimpleGrid>
        </>
    )
}
