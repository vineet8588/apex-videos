import React from 'react'
import ReactPlayer from 'react-player/lazy'
import {FaPlay} from 'react-icons/fa'
import { Box } from '@chakra-ui/layout'

interface Props {
    url : string,
}

export const VideoPlayer = (props: Props) => {
    return(
        <ReactPlayer 
            width="100%" 
            height="100%" 
            url={props.url+"/DASHPlaylist.mpd"} 
            playIcon={<FaPlay size="2em" color="#fd4d4d"/>} 
            playing={true} 
            light={true} 
            controls={true}/>
    )
}
