import React from "react";
import Page from "../../components/Page";
import DropdownSelect from "../../components/DropdownSelect";
import Header from "../../components/Header"
import Container from '@material-ui/core/Container';



export default function Home(){
    
    return <Page headerTitle={"Home"}>
        
       <div>
           
      <DropdownSelect  options={[{label: 'customers', value: 1}]} placeholder ="ok" onSelectOption ={()=>{}} value= {{label: 'Customers', value: 1}} />
      <DropdownSelect  options={[{label: 'customers', value: 1}]} placeholder ="ok" onSelectOption ={()=>{}} value= {{label: 'Orders', value: 1}} />
    
           
    </div>



        
        
    </Page>
}