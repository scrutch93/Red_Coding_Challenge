import React from "react";
import Page from "../../components/Page";
import DropdownSelect from "../../components/DropdownSelect";
import Header from "../../components/Header"
import Container from '@material-ui/core/Container';



export default function Home(){
    
    return <Page headerTitle={"Home"}>
        
       <div>
           
      <DropdownSelect  options={[{label: 'Bobs Burgers', value: 1}, {label: 'Wendys', value: 1},{label: 'Amazon', value: 1}, {label: 'Coca-Cola', value: 1},{label: 'Dunder Mifflin', value: 1}]} placeholder ="ok" onSelectOption ={()=>{}} value= {{label: 'Customers', value: 1}} />
      <DropdownSelect  options={[{label: 'Standard', value: 1}, {label: 'SaleOrder', value: 1},{label: 'PurchaseOrder', value: 1}, {label: 'TransferOrder', value: 1},{label: 'ReturnOrder', value: 1}]} placeholder ="ok" onSelectOption ={()=>{}} value= {{label: 'Order Type', value: 1}} />
    
           
    </div>



        
        
    </Page>
}