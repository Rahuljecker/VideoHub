import React from 'react'
import {Stack} from "@mui/material"
import { Link } from 'react-router-dom'
import logo from "../Utils/videohub-logo.png"

import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} p={"2"}  sx={{background:"#000",position:"sticky",top:"0",justifyContent:"space-between"}}>
    <Link to={"/"} style={{display:"flex", alignItems:'center'}}>
      <img src= {logo} alt="logo.png" height={"45"}/>
    </Link>

    <SearchBar/>

    </Stack>
  )
}

export default Navbar