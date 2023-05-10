
import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import { FetchFromApi } from '../Utils/FetchFromApi'


const SearchDetail = () => {

  const [video, setvideo] = useState([])
  const {searchItem}=useParams();


  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchItem}`).then((data) => { setvideo(data.items) })
  }, [searchItem])
  return (
    <Box p={4} sx={{ flex: 2, height: "90vh", overflowY: "auto" }}>
      <Typography  fontWeight={"bold"} mb="2"  mt="20px" sx={{ color: "white", fontSize:{lg:"30px",sm:"10px",md:"20px"},display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        Search Results for : <span style={{ color: "#FC3150", paddingLeft: "10px",marginBottom:"20px" }}>{searchItem}</span>Videos
      </Typography>
      <Box/>
      <Box display={"flex"} p="4" mt={"20px"}>
          <Box sx={{mr:{sm:"110px"}}}>
          </Box>
          <Videos video={video} />  
        </Box>
    </Box>
  )
}

export default SearchDetail