/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";
import "hammerjs";

function grafica() {

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

    const labelContent = (props) => {
      let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
        style: "Muertes",
        minimumFractionDigits: 2,
      });
      return `${props.dataItem.category} Departamento: ${formatedNumber}`;
    };

  return (
<Chart>
    <ChartTitle text="World Population by Broad Age Groups" />
    <ChartLegend position="bottom" />
    <ChartSeries>
      <ChartSeriesItem
        type="pie"
        data={info}
        field="Deaths"
        categoryField="Province"
        /* labels={{
          visible: true,
          content: labelContent,
        }} */
      />
    </ChartSeries>
  </Chart>
  )
}

export default grafica;

