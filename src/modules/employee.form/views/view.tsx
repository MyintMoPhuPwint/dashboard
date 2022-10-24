import React, { useEffect, useState } from 'react'
import { getData } from '../apiStore'
import { EmployeeTable } from '../lists/table/table';

export const Employee = () => {

  const [data , setData] = useState([]);
  
  const loadingData = async() => {
    await getData().then(
      response => setData(response.data.data.data),
      error => error
    );
  }

  useEffect(() => {
   loadingData();
  }, [])
  return (
    <div> 
      <EmployeeTable data={data} />
    </div>
  )
}
