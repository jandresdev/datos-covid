import React, {useEffect, useState} from 'react';
import {Grid, GridColumn as Column, GridColumn} from '@progress/kendo-react-grid'
import { process } from "@progress/kendo-data-query";
import '@progress/kendo-theme-material/dist/all.css'
import datos from './data.json'
import styled from 'styled-components';

function ListadoPaises() {
    const [info, SetData] = useState([])
    const url = 'https://api.covid19api.com/live/country/colombia/status/confirmed/date/2020-03-21T13:13:30Z'
              

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
            
    }, [info])
    

    return(
    <>
      
        <h2>Lista Total Colombia por Deparamento</h2>
        <h4>Actualizado al 21 de Marzo 2020</h4>
        <Grid 
        style={{
            height: "400px",
          }}
        sortable={true}
        filterable={true}
        data={info}
        pageable={true}
        navigatable={true}
        >
          <Column field='Province' title='Departamento' width={300}/>
          <GridColumn field='Confirmed' title='Casos Confirmados' width={300}/>
          <GridColumn field='Deaths' title='Total Fallecimientos' width={300}/>
          <GridColumn field='Recovered' title='Total Recuperados' width={300}/>
          <GridColumn field='Date' title='Fecha' width={300}/>
        </Grid>
    </>
    
  ) 

}

export default ListadoPaises;
