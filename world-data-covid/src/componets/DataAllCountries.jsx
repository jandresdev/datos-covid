import React, {useEffect, useState} from 'react';
import {Grid, GridColumn as Column, GridColumn} from '@progress/kendo-react-grid'
import '@progress/kendo-theme-material/dist/all.css'
import datos from './data.json'
import styled from 'styled-components';


function DataAllCountries() {

    const [info, SetData] = useState([])
    const url = 'https://api.covid19api.com/world/total'
              

    useEffect(() => {
        fetch(url)
            .then((resp) => {
              return resp.json();
            }).then((data) => {
              SetData(data)
              //console.log(info)
              const valore = JSON.stringify(info); 
              const values = JSON.parse(valore)
              console.log(values)
            })
            
    }, [])
    

    return(
    <>
      <GridContainer>
        <h2>Casos Globales</h2>
        <h4>Actualizado al 26 de enero</h4>
        <Grid 
        data={datos}
        >
          <Column field='TotalConfirmed' title='Total Confirmados' width={300}/>
          <GridColumn field='TotalDeaths' title='Total Muertes' width={300}/>
          <GridColumn field='TotalRecovered' title='Total Recuperados' width={300}/>
        </Grid>
      </GridContainer>
    </>
    
  ) 

}
  export default DataAllCountries;

  const GridContainer = styled.div`
    top: 50px;
  `
