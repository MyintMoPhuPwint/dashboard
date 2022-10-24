import { Button, InputText } from 'primereact'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDataDetail, putData } from '../../apiStore'

export const Update = () => {

    const [detailData, setDatailData] = useState([])

    const history = useNavigate();
    const id = useParams();

    const loadingData = async () => {
        await getDataDetail(id.id).then(
            response => setDatailData(response.data.data),
            error => error
        )
    }

    const updateData = async () => {

        const requestBody = {

        }

        // await putData(id.id , requestBody).then(
        //     response => console.log(response.data.data),
        //     error => error
        // )

        history('/employee-form')

    }
    console.log(detailData)

    useEffect(() => {
        loadingData()

    }, [])


    return (

        <div className='flex flex-wrap'>

            {/* 1 */}
            <div className='flex flex-column'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 2 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 3 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 4 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 5 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 6 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 7 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 8 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 9 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 10 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 11 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 12 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 13 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 14 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 15 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 16 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 17 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 18 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 19 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 20 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 21 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 22 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            {/* 23 */}
            <div className='col-md-4'>
                <div className="p-inputgroup">
                    <InputText placeholder="name" />
                </div>
            </div>

            <div className='col-md-12' style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                <Button onClick={() => updateData()}>Update</Button>
            </div>

        </div>
    )
}
