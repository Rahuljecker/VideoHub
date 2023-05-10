import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture, demoChannelTitle, demoChannelUrl, demoVideoUrl, demoThumbnailUrl, demoVideoTitle } from '../Utils/constants'


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(videoId, snippet)
  return (
    <Card sx={{ borderRadius: "10px", width: {lg:"270px", md: "250px", xs: "100%" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} component="img"
          sx={{ height: 150, width: 358 }} />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle2' color={"#FFF"} >
            {snippet?.title.slice(0, 80) || demoVideoTitle.slice(0, 80)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        {/* <img src={""} alt="" /> */}
          <Typography variant='subtitle1' color={"gray"} >
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ textAlign: "center", fontSize: "12px", marginLeft: "10px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard