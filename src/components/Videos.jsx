import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './channelCard';

const Videos = ({ video ,direction}) => {
    // console.log(video);
    if(!video?.length) return "Loading..."
    return (
        <Stack gap={2} direction={direction || "row"} flexWrap={"wrap"} justifyContent={"start"}>
            {
                video.map((item, idx) => (
                    <Box  key={idx}>
                       { item.id.videoId && <VideoCard video={item}/>}
                       { item.id.channelId && <ChannelCard channeldetails={item}/>}
                    </Box>
                ))
            }
        </Stack>
    )
}

export default Videos