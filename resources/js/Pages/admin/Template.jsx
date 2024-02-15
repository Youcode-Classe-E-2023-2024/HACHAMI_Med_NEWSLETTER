import React, { useState } from 'react';
import { router , usePage , Link  } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia'

import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "./components/widget/Widget.jsx";
import Layout from "./Layout.jsx";
import DataTable ,{ createTheme } from 'react-data-table-component';


export default function About({templates}) {



    const columns = [
        {
            name:'id',
            selector:row=>row.id,
            sortable: true,

        },
        {
            name: 'title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'creator',
            selector: row => row.creator,
            sortable: true,
        }


    ];

    return (
        <>
            <div className=" table-container" style={{ marginTop:'70px'}} >


                <DataTable
                    columns={columns}
                    data={templates}
                    theme="solarized"
                    highlightOnHover
                    selectableRows
                    pagination


                />
            </div>
        </>

    )
}


