import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import React  from 'react';
import { exerciseOptions,fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [search,setSearch]=useState('');
    
    const [bodyParts,setBodyParts]=useState([]);
    useEffect(()=>{
        const fetchExerciseData=async()=>{
            const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setBodyParts(['all',...bodyPartsData]);
        }
        fetchExerciseData();
    },[])
    const handleSearch=async()=>{
        if(search)
        {
            const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            const searchedExercises=exercisesData.filter(
                (item)=>item.name.toLowerCase().includes(search)
                || item.target.toLowerCase().includes(search)
                || item.equipment.toLowerCase().includes(search)
                || item.bodyPart.toLowerCase().includes(search)
            )
                setSearch('');
                setExercises(searchedExercises);
            
        }
    }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" padding="20px">
        <Typography fontWeight="700" sx={{fontSize:{lg: '44px', xs:'30px'}}} mb='50px' textAlign='center'>
            Awesome Exercises You<br/> should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{input:{fontWeight:"700", border:"none", borderRadius:'4px'},
            width:{lg:'800px', sm:'350px'}, backgroundColor:'#fff', borderRadius:'40px'
            }}
            height="76px"
            value={search}
            onChange={(e)=>{
                setSearch(e.target.value.toLowerCase())
            }} 
            onClick={handleSearch}
            placeholder="Search Exercise"
            type="text"
            />
            <Button className="search-btn" sx={{bgcolor:"#ff2625",color:"#fff", textTransform:"none" ,width:{lg:'175px', xs:"80px"},
            fontSize:{lg:'20px', xs:"14px"}, height:"56px", position:"absolute",right:'0'}} onClick={handleSearch}>
                Search
            </Button>


        </Box>
        <Box sx={{position:'relative', width:'100%', p:'20px' }}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} bodyParts setBodyPart={setBodyPart} isBodyParts />
        </Box>
      
    </Stack>
  )
}

export default SearchExercises
