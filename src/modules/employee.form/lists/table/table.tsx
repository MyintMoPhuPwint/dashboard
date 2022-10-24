import { DataTable, Tooltip } from 'primereact'
import { dynamicCols, Header } from './useTable'
import React, { useEffect, useState } from 'react'


export const EmployeeTable = ({ data }: any) => {

  const [filter, setFilter] = useState('');
  const [ employee , setEmployee ] = useState([]);
  
  const TableFilter = (filter: string) => {
    setFilter(filter);
  }

  useEffect(() => {
    if(data) {
      setEmployee(data)
    }
  }, [data])

  return (
    <div className='card'>
      <Tooltip target=".export-buttons>button" position="bottom" />
      <DataTable
        header={<Header TableFilter={TableFilter} />}
        value={employee}
        dataKey="id"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        globalFilter={filter}
        emptyMessage="No employees data found."
        responsiveLayout="scroll"
      >
        {dynamicCols}
      </DataTable>
    </div>
  )
}
