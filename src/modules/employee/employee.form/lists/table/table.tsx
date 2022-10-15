import { classNames, Column, DataTable, Dropdown, InputText, Ripple } from 'primereact'
import React, { Key, useEffect, useState } from 'react'

export const EmployeeTable = ({ data }: any) => {
    const [employees, setEmployees] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState('Press \'Enter\' key to go to this page.');
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const onCustomPage = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
        setCurrentPage(event.page + 1);
    }

    const onPageInputKeyDown = (event: any, options: any) => {
        if (event.key === "Enter") {
            const page = currentPage;
            if (page < 1 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`)
            }
            else {
                const first = currentPage ? options.row * (page - 1) : 0;

                setFirst(first);
                setPageInputTooltip('Press \'Enter\' key to go to this page.');
            }
        }
    }

    const onPageInputChange = (event: any) => {
        setCurrentPage(event.target.value);
    }

    const template: any = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        'PrevPageLink': (options: any) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            )
        },
        'NextPageLink': (options: any) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            )
        },
        'PageLinks': (options: any) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return <span className={className} style={{ userSelect: 'none' }}>...</span>;
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            )
        },
        'RowsPerPageDropdown': (options: any) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        'CurrentPageReport': (options: any) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size={2} className="ml-1" value={currentPage} tooltip={pageInputTooltip}
                        onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
                </span>
            )
        }
    };

    const columns = [
        {
            field: 'name', header: 'Name'
        },
        {
            field: 'nrc_no', header: 'NRC'
        },
        {
            field: 'father_name', header: 'Father'
        },
        {
            field: 'birth_place', header: 'BOD'
        },
        {
            field: 'age', header: 'Age'
        },
        {
            field: 'contactable_phone_no', header: 'Phone'
        },
    ]

    useEffect(() => {
        setEmployees(data)
        template
        console.log(template)
    })

    const dynamicColumn = columns.map((value: any, id: any) => {
        return <Column key={`Employeee${id}`} field={value.field} header={value.header} />
    })

    return (
        <div>
            <DataTable
                value={employees}
                paginator
                paginatorTemplate={template}
                selectionMode="multiple"
                selection={selectedEmployee}
                metaKeySelection={false}
                onSelectionChange={e => setSelectedEmployee(e.value)} dataKey="id"
                first={first}
                rows={rows}
                onPage={onCustomPage}
                responsiveLayout="scroll"
            >
                {dynamicColumn}
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}> </Column>
            </DataTable>
        </div>
    )
}
