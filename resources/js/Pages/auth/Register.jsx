import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { router , usePage } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';


export default function Register({imgUrl , errors}) {
    // const { errors } = usePage().props

    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        password_confirmation:'',
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
        console.log(formData);
        Inertia.post('/register', formData);
        console.log(errors)

    };




    return (
        <div>
            <div>
                <div className="relative min-h-screen  grid bg-black ">
                    <div
                        className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
                        <div
                            className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
                            style={{backgroundImage:`url(${imgUrl})`}}>
                            <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
                            <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">

                            </div>
                        </div>

                        <div
                            className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
                            <div className="max-w-xl w-full space-y-12">
                                <div className="lg:text-left text-center">

                                    <div className="flex items-center justify-center ">
                                        <div
                                            className="bg-black flex flex-col w-96 border border-gray-900 rounded-lg px-8 py-10">

                                            <form onSubmit={handleSubmit}
                                                className="flex flex-col space-y-8 mt-10">

                                                <div className="flex flex-col">
                                                    <label className="font-bold text-lg text-white ">Full Name</label>
                                                    {errors.name && <label className="font-semibold text-lg text-red-900 ">{errors.name}</label>}

                                                </div>
                                                <input type="text" name="name" placeholder="Enter the full name" value={formData.name} onChange={handleInputChange}
                                                       className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"/>

                                                    <div className="flex flex-col">
                                                        <label className="font-bold text-lg text-white ">Email</label>
                                                        {errors.email && <label className="font-semibold text-lg text-red-900 ">{errors.email}</label>}
                                                    </div>
                                                    <input type="text" name="email" placeholder="Enter the full email" value={formData.email} onChange={handleInputChange}
                                                           className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"/>

                                                        <div className="flex flex-col">
                                                            <label
                                                                className="font-bold text-lg text-white">Password</label>
                                                            {errors.password && <label className="font-semibold text-lg text-red-900 ">{errors.password}</label>}
                                                        </div>
                                                        <input type="password" name="password" formControlName="pin" value={formData.password} onChange={handleInputChange}
                                                               placeholder="****"
                                                               className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"/>
                                                            <div className="flex flex-col">
                                                                <label className="font-bold text-lg text-white">Confirm
                                                                    Password</label>
                                                                {errors.password_confirmation && <label className="font-semibold text-lg text-red-900 ">{errors.password_confirmation}</label>}
                                                            </div>
                                                            <input type="password" placeholder="****" value={formData.password_confirmation} onChange={handleInputChange}
                                                                   name="password_confirmation"
                                                                   className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"/>
                                                                <button
                                                                    className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold"
                                                                    routerLink="/dashboard">Subscribe
                                                                </button>
                                                                <div className="flex justify-between text-gray-400">
                                                                    <span>I already Have An account</span>
                                                                    <InertiaLink href="/login" className="underline">Sign In</InertiaLink>
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


