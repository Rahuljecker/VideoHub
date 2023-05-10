import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchItem, setsearchItem] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem) {
      navigate(`/search/${searchItem}`);
      setsearchItem("");
    }
  }
  return (
    <Paper component={"form"} onSubmit={handleSubmit} sx={{
      paddingLeft: "14px", borderRadius: "30px",
      mr: { sm: 5 }, boxShadow: "none", border: "1px solid #e3e3e3"
    }}>
      <input type="text" className='search-bar' value={searchItem} placeholder='Search...' onChange={(e) => { setsearchItem(e.target.value) }} />
      <IconButton sx={{ padding: "5px", color: 'red' }} type='submit'>
        <SearchOutlinedIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar