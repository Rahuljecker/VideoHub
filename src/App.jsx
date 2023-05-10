import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchDetail } from './components'

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/search/:searchItem' element={<SearchDetail/>}/>
        </Routes>
      </Box>
    </Router>
  )
}

export default App