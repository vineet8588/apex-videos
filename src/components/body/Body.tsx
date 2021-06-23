import { SimpleGrid , Box, Image, Text, useColorModeValue, useDisclosure, Heading, Input, Flex, Button } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { PopOver } from './PopOver'

const apiURL = "https://vineet8588.pythonanywhere.com/allvideos"

const convertDate = (st:string)=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = st.slice(5,7)
    const day = st.slice(-2)
    const year = st.slice(0,4)
    const final = day + " " + monthNames[parseInt(month)-1].slice(0,3)+ " " + year
    return final
}


export const Body = () => {
    
    const date = new Date()
    const today = date.getFullYear() + "-" + (date.getMonth()+1<10 ? "0"+String(date.getMonth()+1) : String(date.getMonth()+1)) + "-" + date.getDate()
    
    const [data, setdata] = useState<Array<any>>()
    const [curr, setcurr] = useState<any>()
    const [goDate, setgoDate] = useState<string>(today)
    

    useEffect(() => {
        fetch(apiURL)
        .then(
            res => res.json()
        )
        .then(dat =>{
            dat.reverse()
            let final:any = []
            dat.forEach((element:any) => {
                if(final[final.length-1] && Object.keys(final[final.length-1])[0]===element.datetime.slice(0,16)){
                    final[final.length-1][element.datetime.slice(0,16)].push(element)
                }
                else{
                    final.push({[element.datetime.slice(0,16)]:[element]})
                }
            });
            setdata(final)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    
    const bg = useColorModeValue("bg_light", "bg_dark")
    const filter = useColorModeValue("none", "brightness(0.5) invert(1)")
    const borderColor = useColorModeValue("gray", "accent")
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <Flex mt={7} mb={1} justifyContent="center">
                <Input 
                    borderWidth={2} 
                    _focus={{borderColor:borderColor}} 
                    _hover={{borderColor:borderColor}} 
                    borderColor={borderColor}
                    color="black" 
                    filter={filter} 
                    maxW="220px" 
                    value={goDate} 
                    onChange={(e)=>{setgoDate(e.target.value)}} 
                    type="date"
                    max={today}/>
                <Button 
                    onClick={()=>{
                            goDate && document.getElementById(convertDate(goDate))?.scrollIntoView({behavior:'smooth'})
                        }
                    } 
                    ml={2}
                    variant="new" 
                    _focus={{outline:"none"}}
                    >
                        Go
                    </Button>
            </Flex>
            <PopOver data={curr} isOpen={isOpen} onClose={onClose}/>
            
            {
                    data?.map((obj)=>
                        <Box id={Object.keys(obj)[0].slice(5,)} key={Object.keys(obj)[0]} py="4" px="45px">
                        <Heading mt={2} mb={3} isTruncated> {Object.keys(obj)[0]} </Heading> 
                        <SimpleGrid columns={[1,2,3,4]} spacing={10}>
                            {obj[Object.keys(obj)[0]].map((post:any) => 
                                    <Box 
                                        cursor="pointer" 
                                        _hover={{transform:'scale(1.1)', transition:'all .2s ease-in-out;'}} 
                                        onClick={()=>{onOpen(); setcurr(post);}} 
                                        key={post.id}  
                                        rounded="md" 
                                        boxShadow="md" 
                                        overflow="hidden"
                                        bg={bg}
                                        > 
                                        <Image src={process.env.PUBLIC_URL+"/thumbnail.jpg"} /> 
                                        <Box p={4}>
                                            <Text noOfLines={[1, 2]}>
                                                {post.title}
                                            </Text>
                                        </Box> 
                                    </Box>
                                    )
                            }
                        </SimpleGrid>
                        </Box>
                    )
            }
        </>
    )
}
