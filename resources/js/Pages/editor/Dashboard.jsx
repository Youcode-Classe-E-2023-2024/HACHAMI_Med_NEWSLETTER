import React, { useState } from 'react';
import { router , usePage , Link  } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia'

export default function Dashboard( ) {
    // const { errors } = usePage().props

    return (
        <div>
            Editor
            <InertiaLink href="/logout"  className="underline">Logout</InertiaLink>

        </div>
    )
}


