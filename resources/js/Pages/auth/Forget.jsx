import React, {useEffect, useState} from 'react';
import { router , usePage , Link  } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia'

export default function Forget( {errors , success}) {

    const [formData, setFormData] = useState({
        email: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/forget-password',formData);

    };

    return (
        <div>
            <div>
                <div className="relative min-h-screen  grid bg-black ">
                    <div
                        className="flex flex-col sm:flex-row items-center md:items-center sm:justify-center md:justify-center flex-auto min-w-0 ">


                        <div
                            className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">

                            <div className="max-w-xl w-full space-y-12">
                                <h1 className="text-3xl text-white text-center">Newsletter-Forget </h1>

                                <div className="lg:text-left text-center">
                                    <div className="flex items-center justify-center ">
                                        <div
                                            className="bg-black flex flex-col w-96 border border-gray-900 rounded-lg px-8 py-10">

                                            <form onSubmit={handleSubmit}
                                                  className="flex flex-col space-y-8 mt-10">

                                                <div className="flex flex-col">
                                                    <label className="font-bold text-lg text-white ">Email</label>

                                                    {success &&<label  className="font-semibold text-lg text-black-900 bg-green-300 p-4 border-blue-500 rounded-md">{success}</label>}
                                                    {errors.message && <label className="font-semibold text-lg text-red-900 ">{errors.message}</label>}
                                                    {errors.email && <label className="font-semibold text-lg text-red-900 ">{errors.email}</label>}

                                                </div>

                                                <input type="email" name="email"  value={formData.email} onChange={handleInputChange}
                                                       placeholder="Enter email"
                                                       className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"/>
                                                    <button
                                                        className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">Forget
                                                    </button>
                                                <div className="text-gray-400 text-center">
                                                    <InertiaLink href="/login"  className="underline">Login</InertiaLink>

                                                </div>


                                            </form>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


