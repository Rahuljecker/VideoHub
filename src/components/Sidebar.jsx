import React from 'react'
import { Button, Stack } from '@mui/material'
import { categories } from '../Utils/constants'

// const selectedCategory="New";

const Sidebar = ({selectedCategory,setselectedCategory}) => {
  return (
    <Stack direction={"row"} sx={{
      overflowY: "auto", height: { sx: "auto", md: "95%", xs: "5%" },flexDirection:{md:"column"}
    }}>
      {
        categories.map((category,id)=>(
          <button key={id} className='category-btn' style={{backgroundColor:category.name===selectedCategory && "#FC1515",color:"white" }} onClick={()=>setselectedCategory(category.name)}>
            <span style={{color:category.name===selectedCategory?"white":"red",marginRight:"15px"}}>{category.icon}</span>
            <span style={{opacity:category.name===selectedCategory?"1":"0.5"}}>{category.name}</span>
          </button>
        ))
      }
    </Stack>
  )
}

export default Sidebar