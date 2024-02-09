import React, { useState } from 'react';
import { router , usePage , Link  } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia'

export default function Login({ imgUrl , errors } ) {
    // const { errors } = usePage().props
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        Inertia.post('/login',formData);
    };
    return (
        <div>
            <div className="relative min-h-screen  grid bg-black ">
                <div
                    className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
                    <div className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
                        style={{backgroundImage:`url(${imgUrl})`}}
                    >
                        <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
                        <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                            <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">

                            </div>
                        </div>
                    </div>

                    <div
                        className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
                        <div className="max-w-xl w-full space-y-12">
                            <div className="lg:text-left text-center">

                                <div className="flex items-center justify-center ">
                                    <div
                                        className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">

                                        <form onSubmit={handleSubmit}
                                              className="flex flex-col space-y-8 mt-10">
                                            {errors.message && <label className="font-semibold text-lg text-red-900 ">{errors.message}</label>}

                                            <div className="flex flex-col">
                                                <label className="font-bold text-lg text-white ">Email</label>
                                                {errors.email && <label className="font-semibold text-lg text-red-900 ">{errors.email}</label>}

                                            </div>
                                            <input type="text" name="email" placeholder="Enter the full name" value={formData.email} onChange={handleInputChange}
                                                   className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />

                                            <div className="flex flex-col">
                                                <label className="font-bold text-lg text-white">Password</label>
                                                {errors.password && <label className="font-semibold text-lg text-red-900 ">{errors.password}</label>}

                                            </div>
                                            <input type="password" name="password" formControlName="pin" placeholder="****" value={formData.password} onChange={handleInputChange}
                                                   className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                                            <button
                                                className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">Login</button>
                                            <div className="flex items-center">
                                                <input id="checked-checkbox" type="checkbox" name="remember"
                                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checked-checkbox"
                                                       className="ms-2 text-md font-semiboldbold text-white">Remember
                                                    me</label>
                                            </div>
                                            <div className="text-gray-400">
                                                <span>don't have account ?</span>
                                                <InertiaLink href="/register"  className="underline">Sign Up</InertiaLink>

                                            </div>
                                            <div className="text-gray-400 text-center">
                                                <InertiaLink href="/forget-password"  className="underline">Forget
                                                    Password</InertiaLink>

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
    )
}


