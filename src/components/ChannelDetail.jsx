import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from "./"
import { Box, Typography, Stack } from '@mui/material'
import { FetchFromApi } from '../Utils/FetchFromApi'
import { CheckCircle } from '@mui/icons-material'

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [video, setVideo] = useState([])
  const { id } = useParams();
  console.log(channelDetail) 
  // console.log(video)
  useEffect(() => {
    FetchFromApi(`channels?part=snippet&id=${id}`).then((data) => setchannelDetail(data?.items[0]));
    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideo(data?.items));
  }, [id])
  return (
    <Stack minHeight={"95vh"} direction={"column"}>
      <Box>
        <div style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(21,113,185,1) 23%, rgba(30,163,250,0.6587009803921569) 48%, rgba(0,212,255,1) 100%)", zIndex: "10", height: "300px", display: "flex", justifyContent: "center" }}>
          {/* <Videos VideoDetail={VideoDetail} /> */}
        </div>
        <Stack sx={{ display: "flex", marginTop: "-80px", alignItems: "center" }} >
          <ChannelCard channeldetails={channelDetail} />
          <Typography variant='h5' sx={{ color: "white", fontWeight: "bolder" }}>{channelDetail?.snippet?.title}</Typography>
          {
            channelDetail?.statistics?.subscriberCount && (
              <Typography sx={{ color: "white", fontWeight: "bolder", alignItems: "center" }}>
                {
                  parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()
                } subscribers <CheckCircle />
              </Typography>
            )
          }
        </Stack>
        <Box display={"flex"} p="4" mt={"20px"}>
          <Box sx={{mr:{sm:"110px"}}}>
          </Box>
          <Videos video={video} />  
        </Box>
      </Box>

    </Stack>
  )
}

export default ChannelDetail