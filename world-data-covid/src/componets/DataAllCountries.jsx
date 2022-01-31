import React, {useEffect, useState} from 'react';
import {Grid, GridColumn as Column, GridColumn} from '@progress/kendo-react-grid'
import '@progress/kendo-theme-material/dist/all.css'

function DataAllCountries() {

    const [info, SetData] = useState([])
    const url = 'https://api.covid19api.com/world/total'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json =>{
                SetData(json)
                console.log(json)
            })
    }, [])
   
  return(
    
    <Grid data={info}>
           
    </Grid>
    

     
  ) 

}

export default DataAllCountries;
