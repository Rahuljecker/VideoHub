  import React from 'react';
  import { useEffect, useState } from 'react';;
  import { Link, useParams } from 'react-router-dom';
  import ReactPlayer from 'react-player';
  import { Box, Stack, Typography } from '@mui/material';
  import { CheckCircle, ThumbUpOutlined, VisibilityOutlined } from '@mui/icons-material';
  import Videos from './Videos';
  import { FetchFromApi } from '../Utils/FetchFromApi';



  const VideoDetail = () => {
    const [VideoDetail, setVideoDetail] = useState([]);
    const [videos, setVideos] = useState(null);

    const { id } = useParams();

    useEffect(() => {
      FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));
      FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
    }, [id]);

    if (!VideoDetail?.snippet) return "Loading....";
    // console.log(VideoDetail);


    return (
      <Box minHeight={"95vh"} >
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={"1"}>
            <Box width={"100%"} marginTop={"56px"} >
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls position={"sticky"}/>
              <Typography sx={{ color: "white", fontSize: { lg: "20px", md: "12px" }, display: "flex", flexWrap: "wrap", paddingLeft: "10px", marginTop: "15px" }}>
                {VideoDetail?.snippet?.title}
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"} py={"1"} px="2" sx={{ color: "#fff" }}>
                <Link to={`/channel/${VideoDetail?.snippet?.channelId}`}>
                  <Typography sx={{ color: "white", fontSize: { lg: "25px", md: "20px", sm: "15px" }, fontWeight: "bolder", position: "relative", left: "10px" }} >
                    {VideoDetail?.snippet?.channelTitle}
                    <CheckCircle sx={{ alignItems: "center", textAlign: "center", ml: "5px", fontSize: "16px" }} />
                  </Typography>
                </Link>
                <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                  <Typography variant='body1' sx={{ display: "flex", justifyContent: "center ", opacity: "0.7" }} gap={"10px"} >
                    <ThumbUpOutlined />
                    {VideoDetail?.statistics?.likeCount} </Typography>
                  <Typography variant='body1' sx={{ opacity: "0.7" }} display={"flex"} gap={"10px"}>
                    <VisibilityOutlined />
                    {VideoDetail?.statistics?.viewCount} </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box/>
        <Box px={"2"} py={{md:"2",xs:"5"}} justifyContent={"center"} alignItems={"center"} display={"flex"}>
        <Box sx={{mr:{sm:"110px"}}}>
          </Box>
        <Videos video={videos} direction={"row"}/>
        </Box>  
          </Box>
        </Stack>
      </Box>
    )
  }

  export default VideoDetail