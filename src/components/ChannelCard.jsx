import { Box, CardContent, CardMedia, Typography, Card } from '@mui/material'
import React from 'react'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../Utils/constants'

const ChannelCard = ({ channeldetails}) => {
  return (
    <Box sx={{
      borderRadius: "10px",
      width: { lg: "240px", md: "260px", xs: "100%" },
     
      textAlign:"center"
    }}>
      <Link to={`/channel/${channeldetails?.id?.channelId}`}>
        <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <CardMedia
            image={channeldetails?.snippet?.thumbnails?.high.url || demoProfilePicture} 
            component={"img"}
            alt={channeldetails?.snippet?.channelTitle}
            sx={{ borderRadius: "50%", height: "180px", width: "180px", background: "white" }}
          />
          {/* <Typography variant='h5' sx={{ color: "white" }}>{channeldetails?.snippet?.channelTitle}</Typography> */}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard