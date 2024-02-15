import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";
import TemplateForm from "./components/TemplateForm.jsx";
import React from "react";
import Dashboard from "../admin/Dashboard.jsx";


export default function Layout({Route,pageName , templates ,success , errors ,file  }){

    const routeComponents = {
        dashboard: <Main templates={templates} />,
        create: <TemplateForm status={success} />,
        // Add more routes as needed
    };

    const Child = routeComponents[Route] || null;

    return(
        <div className="bg-[#fdba74]">

            <SideBar />
            {Child}

        </div>
    )
}
