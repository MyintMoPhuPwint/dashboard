import { Button, Dialog } from 'primereact'
import React, { useEffect, useState } from 'react'
import { delData } from '../../apiStore';

export const Destroy = ({ deleteData }: any) => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [data, setData] = useState(0);

    useEffect(() => {
        if (deleteData) {
            setData(deleteData.id)
        }
    }, [deleteData])

    const confirm = async (value: any) => {
        // console.log('confirm', value)
        await delData(value).then(
            response => setData(response),
            error => error
        );
    }

    const footer = () => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => setDisplayBasic(false)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => confirm(data)} autoFocus />
            </div>
        );
    }

    return (
        <>
            <Button icon='pi pi-trash' className="p-button-rounded p-button-warning" onClick={() => setDisplayBasic(true)}>
            </Button>
            <Dialog header={`ID ${data} Are you sure to Delete`} visible={displayBasic} style={{ width: '50vw' }} footer={footer()} onHide={() => setDisplayBasic(false)}>
            </Dialog>
        </>

    )
}
