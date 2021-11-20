import React, {Component} from "react";
import Page from "../../components/Page";
import DropdownSelect from "../../components/DropdownSelect";
import Header from "../../components/Header"
import Container from '@material-ui/core/Container';
import SearchBar from "material-ui-search-bar"
import Box from '@mui/material/Box'
import Orders from "../../components/Orders"


export default function Home(){
    
    return <Page headerTitle={"Home"}>
        
        <Box sx={{ display: 'inline-flex'}}>
       
          

        </Box>
        <Orders></Orders>
        
        
    </Page>
}