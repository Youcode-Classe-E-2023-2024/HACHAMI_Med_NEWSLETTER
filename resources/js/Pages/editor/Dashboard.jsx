import React, { useState } from 'react';
import { router , usePage , Link  } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia'
import SideBar from './components/SideBar.jsx'
import Main from './components/Main.jsx'


export default function Dashboard( ) {
    // const { errors } = usePage().props

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/logout');

    };

    return (
        <div className="">
            <SideBar />
            <Main />

        </div>
    )
}


