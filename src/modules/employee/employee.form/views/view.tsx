import React, { useEffect, useState } from 'react'
import { getData } from '../apiStore'
import { EmployeeTable } from '../lists/table/table';

export const Employee = () => {

  const [data , setData] = useState([]);
  const loadingData = async() => {
    const response = await getData();
    setData(response.data.data.data)
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
