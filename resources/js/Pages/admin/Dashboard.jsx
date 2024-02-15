import React, {useEffect, useState} from 'react';
import { router , usePage , Link  } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia'
import '../../../../public/css/app.css'

import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "./components/widget/Widget.jsx";
import DataTable ,{ createTheme } from 'react-data-table-component';




export default function Dashboard({members, memberCount , templateCount}) {

    console.log(memberCount)
    const [usersSel,setUsersSel] = useState([])
    const seletedUsers = ({ selectedRows })=>{
        setUsersSel(selectedRows)
    }
    // useEffect(()=>{
    //     console.log(usersSel)
    // },[usersSel])

    const deleteUser = ()=>{
        Inertia.delete('/deleteUser' , {
            data:usersSel
        });
        setUsersSel([])
    }

    const columns = [
        {
          name:'id',
          selector:row=>row.id,
            sortable: true,

        },
        {
            name: 'email',
            selector: row => row.email,
            sortable: true,
        },

    ];




    return (
            <>
                <div>
                    {/* Card widget */}

                    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                        <Widget
                            icon={<MdBarChart className="h-7 w-7" />}
                            title={"Members"}
                            subtitle={memberCount}
                        />
                        <Widget
                            icon={<IoDocuments className="h-6 w-6" />}
                            title={"Templates"}
                            subtitle={templateCount}
                        />

                        {/*<Widget*/}
                        {/*    icon={<MdDashboard className="h-6 w-6" />}*/}
                        {/*    title={"Your Balance"}*/}
                        {/*    subtitle={"$1,000"}*/}
                        {/*/>*/}

                    </div>
                    <div className=" table-container" style={{ marginTop:'70px'}} >
                        {
                            usersSel.length >0
                            ?
                                <div className="flex justify-between align-middle p-6 h-16 border rounded bg-gray-200 dark:text-white dark:bg-[#0b14374d]">
                                    <p >{usersSel.length} items selected</p>
                                    <span onClick={deleteUser} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </span>

                                </div>

                            : ''
                        }

                        <DataTable
                            columns={columns}
                            data={members}
                            theme="solarized"
                            highlightOnHover
                            selectableRows
                            onSelectedRowsChange={seletedUsers}


                        />
                    </div>
                </div>
            </>

    )
}


