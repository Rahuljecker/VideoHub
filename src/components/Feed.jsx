import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Typography,Stack } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { FetchFromApi } from '../Utils/FetchFromApi'


const Feed = () => {

const [selectedCategory, setselectedCategory] = useState("New");
const [video, setvideo] = useState([])

useEffect(() => {
FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=> {setvideo(data.items)})
}, [selectedCategory])






  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:"auto",md:"92vh",xs:"98vh"},borderRight:"1px solid white",px:{sx:0,md:"2"}}}>
    <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
      <Typography sx={{fontSize:"0.5rem",color:"#fff"}} mt={"2"} variant='body2' className="copyright">
        Copyright @2022 By RAHUL CHATTERJEE
      </Typography>
      </Box>

      <Box p={4} sx={{flex:2,height:"90vh",overflowY:"auto"}}>
        <Typography variant='h4' fontWeight={"bold"} mb="2" sx={{color:"white"}}>
         {selectedCategory}<span style={{color:"#FC3150",paddingLeft:"10px"}}>Videos</span>
        </Typography>
        <Videos video={video}/>
      </Box>
    </Stack> 
  )
}

export default Feed