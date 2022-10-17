import React, { useEffect, useState } from 'react'
import { getData } from '../apiStore'
import { EmployeeTable } from '../lists/table/table';

export const Employee = () => {

  const [data , setData] = useState([]);
  // const loadingData = async() => {
  //   await getData().then(
  //     (data : any) => data,
  //     error => error
  //   );
  //   setData(await getData().then(
  //     response => response,
  //     error => error
  //   ))
    // setData(response.data.data.data)
  // }

  useEffect(() => {
  //  loadingData();
  }, [])
  return (
    <div> 
      {/* <EmployeeTable data={data} /> */}
      wello
    </div>
  )
}
