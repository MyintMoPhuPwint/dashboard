import { Button, Column, InputText } from 'primereact';
import React from 'react';
import { Link } from 'react-router-dom';
import { Destroy } from '../../entries/delete/delete';
import '../../style.css';

/**
 * header
 */
export const Header = ({TableFilter} : any) => {
  return (
    <div className="header">
      <h4>Employee Lists</h4>
      <div className='export-buttons'>
        <React.Fragment>
          <Button type="button" icon="pi pi-file" className="export-button" data-pr-tooltip="CSV" />
          <Button type="button" icon="pi pi-file-excel" className="p-button-success export-button" data-pr-tooltip="XLS" />
          <Button type="button" icon="pi pi-file-pdf" className="p-button-warning export-button" data-pr-tooltip="PDF" />
        </React.Fragment>
        <span className='p-input-icon-left'>
          <i className="pi pi-search" />
          <InputText type="search" onInput={(e: any) => TableFilter(e.target.value)} placeholder="Search"></InputText>
        </span>
      </div>
    </div>
  )
}

const actionBodyTemplate = (rowData: any) => {
  return (
      <React.Fragment>
        <Link to={`/employee-form-edit/${rowData.id}`}>
          <Button icon="pi pi-pencil" className="p-button-rounded p-button-success" style={{marginRight : "10px"}} />
          </Link>
          <Destroy deleteData={rowData}/>
      </React.Fragment>
  );
}

/**
 * dynamic columns
 */
const cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'nrc_no', header: 'NRC' },
    { field: 'age', header: 'Age' },
    { field: 'birth_place', header: 'BOD' },
    { field: 'blood_type', header: 'Blood' },
    { field: 'father_name', header: 'Father Name' },
    { field: 'contactable_phone_no', header: 'Phone' },
    { field: 'permenant_address', header: 'Address'},
    { field: ($event: any) => {
      return actionBodyTemplate($event)
    }, header: 'Action' }

];

export const dynamicCols = cols.map((col: any, id: number) => {
    return <Column key={`employee${id}`} field={col.field} header={col.header} />
})