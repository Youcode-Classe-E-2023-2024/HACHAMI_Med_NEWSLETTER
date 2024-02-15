import React , {useState , useEffect} from 'react';
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Footer from './components/footer/Footer.jsx'
import Dashboard from "./Dashboard.jsx";
import Templates from "./Template.jsx";


const Layout = ({ children , Route , pageName , members  , memberCount,templateCount , templates} , props) => {
    const { ...rest } = props;
    const [open, setOpen] = React.useState(true);
    // const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
    // const [Route, setRoute] = React.useState("dashboard");

    React.useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    }, []);

    const routeComponents = {
        dashboard: <Dashboard members={members} memberCount={memberCount} templateCount={templateCount} />,
        templates: <Templates templates={templates} />,
        // Add more routes as needed
    };

    const Child = routeComponents[Route] || null;



    return (
        <div className="flex h-full w-full">
            <Sidebar open={open} onClose={() => setOpen(false)} route={Route} />
            {/* Navbar & Main Content */}
            <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
                {/* Main Content */}
                <main
                    className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
                >
                    {/* Routes */}
                    <div className="h-full">
                        <Navbar
                            onOpenSidenav={() => setOpen(true)}
                            logoText={"Horizon UI Tailwind React"}
                            brandText={pageName}

                            {...rest}
                        />
                        <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                            {Child}
                        </div>
                        <div className="p-3">
                            <Footer />
                        </div>
                    </div>
                </main>
            </div>
        </div>


    );
};

export default Layout;
