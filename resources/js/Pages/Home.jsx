import React, { useState } from 'react';
import { router , usePage , Link  } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import DesktopIllustration from '../../../public/images/newsletter/illustration-sign-up-desktop.svg';
import MobileIllustration from "../../../public/images/newsletter/illustration-sign-up-mobile.svg";

import '../../../public/css/variables.css'
import '../../../public/css/utils.css'

const Button = ({ label, handleTest }) => {
    return (
        <button
            type="submit"
            className="w-[32.7rem] h-[5.6rem] bg-[color:var(--secondary-color)] text-[color:var(--white-color)] text-[length:var(--paragraph-font-size)] font-bold rounded-lg mb-[4rem] md:w-[37.6rem] transition-transform transform-gpu hover:scale-105 hover:bg-gradient-to-br from-[#FF6A3A] to-[#FF527B] hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-custom hover:shadow-md transition duration-300"
            onClick={handleTest}
        >
            {label}
        </button>
    );
};

export default function Home({errors} ) {

    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsValidEmail(true);
    };

    const handleTest = (event) => {
        if (!emailRegex.test(email)) {
            setIsValidEmail(false);
            event.preventDefault();
        }
    };

    const handleSubmit = (ev)=>{
        ev.preventDefault();
        if(isValidEmail){
            Inertia.post('/subscribe',{
                email:email
            });
        }
        console.log(errors)
    }

    return (
        <section className="flex flex-col justify-center items-center text-[color:var(--secondary-color)] md:bg-[color:var(--tertiary-color)] md:h-screen">
            <div className="md:flex md:justify-center md:items-center md:flex-row-reverse md:bg-[color:var(--white-color)] md:w-[92.8rem] md:h-[54.1rem] md:rounded-[3.6rem]">
                <div className="w-full pb-10 md:pb-0 md:pr-6 select-none">
                    <picture>
                        <source srcSet={DesktopIllustration} media="(min-width:708px)" />
                        <img
                            srcSet={MobileIllustration}
                            alt="placeholder"
                            className="w-90"
                        />
                    </picture>
                </div>

                <div className="p-6 md:p-0 flex flex-col items-left md:mb-[9.8rem] md:mt-[9.7rem] md:px-[6.4rem]">
                    <h1 className="text-[4rem] font-bold mb-[2.4rem] md:text-[5.6rem] select-none">
                        Stay updated!
                    </h1>
                    <p className="text-[length:var(--paragraph-font-size)] font-normal mb-[2.4rem] select-none">
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>

                    <ul className="text-[length:var(--paragraph-font-size)] custom-list-marker pr-6 md:p-0 select-none">
                        <li className="mb-[1rem]">
                            Product discovery and building what{" "}
                            <span className="pl-[3.7rem] md:pl-0">matters</span>
                        </li>
                        <li className="mb-[1rem]">
                            Measuring to ensure updates are a{" "}
                            <span className="pl-[3.7rem] md:pl-0">success</span>
                        </li>
                        <li className="mb-[4rem]">lorem</li>
                    </ul>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label
                            htmlFor="email"
                            className="text-[12px] font-bold pb-[0.8rem] flex justify-between"
                        >
                            Email address
                            <span className="text-[color:var(--vermellion2)] font-bold mr-[4.4rem] md:mr-0">
                {isValidEmail ? "" : "Valid email required"}
              </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email@company.com"
                            className={`pl-[2.4rem] text-[length:var(--paragraph-font-size)] placeholder:py-[1.6rem] border border-[color:var(--border-color)] rounded-lg w-[32.7rem] h-[5.6rem] md:w-[37.6rem] cursor-pointer mb-[2.4rem] outline-none ${
                                !isValidEmail
                                    ? "bg-[color:var(--vermellion)] text-[color:var(--vermellion2)] border-[color:var(--vermellion2)] placeholder:text-[color:var(--vermellion2)]"
                                    : ""
                            } `}
                            value={email}
                            onChange={handleEmailChange}
                        />

                            <Button
                                label="Subscribe to monthly newsletter"
                                handleTest={handleTest}
                            />
                    </form>
                </div>
            </div>
        </section>
    );
}


