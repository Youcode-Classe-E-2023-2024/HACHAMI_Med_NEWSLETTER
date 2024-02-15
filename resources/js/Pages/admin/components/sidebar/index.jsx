/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

// import SidebarCard from "./components/sidebar/componentsrtl/SidebarCard";
import SidebarCard from "../sidebar/componentsrtl/SidebarCard.jsx";
import { InertiaLink } from '@inertiajs/inertia-react';
import DashIcon from "../icons/DashIcon.jsx";
import { IoDocuments } from "react-icons/io5";


import {MdBarChart} from "react-icons/md";
import React from "react";



const Sidebar = ({ open, onClose , route }) => {

    const activeRoute = (r)=>{
        return r === route

    }

    // console.log(activeRoute('about'));
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[38px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[16px] text-xl font-bold uppercase text-navy-700 dark:text-white">
          NewsLetterHachami <span class="font-medium"></span>
        </div>
      </div>
      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
          <InertiaLink  href="/admin/dashboard">
              <div className="relative mb-3 flex hover:cursor-pointer">
                  <li
                      className="my-[3px] flex cursor-pointer items-center px-8"
                  >
                <span
                    className={`${
                        activeRoute('dashboard') === true
                            ? "font-bold text-brand-500 dark:text-white"
                            : "font-medium text-gray-600"
                    }`}
                >
                  <DashIcon />{" "}
                </span>
                      <p
                          className={`leading-1 ml-4 flex ${
                              activeRoute('dashboard') === true
                                  ? "font-bold text-navy-700 dark:text-white"
                                  : "font-medium text-gray-600"
                          }`}
                      >
                          Home
                      </p>
                  </li>
                  {activeRoute('dashboard') ? (
                      <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                  ) : null}


              </div>
          </InertiaLink>
          <InertiaLink href="/admin/templates">
              <div className="relative mb-3 flex hover:cursor-pointer">
                  <li
                      className="my-[3px] flex cursor-pointer items-center px-8"
                  >
                <span
                    className={`${
                        activeRoute('about') === true
                            ? "font-bold text-brand-500 dark:text-white"
                            : "font-medium text-gray-600"
                    }`}
                >
                  <IoDocuments className="h-7 w-7" />{" "}
                </span>
                      <p
                          className={`leading-1 ml-4 flex ${
                              activeRoute('templates') === true
                                  ? "font-bold text-navy-700 dark:text-white"
                                  : "font-medium text-gray-600"
                          }`}
                      >
                          Templates
                      </p>
                  </li>
                  {activeRoute('templates') ? (
                      <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                  ) : null}


              </div>
          </InertiaLink>
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
        <SidebarCard />
      </div>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
