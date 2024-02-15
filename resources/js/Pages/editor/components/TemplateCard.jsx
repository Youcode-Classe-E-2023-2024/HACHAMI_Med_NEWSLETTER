import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";
import Dropdown from "../../admin/components/dropdown/index.jsx";
import Menu from "../../../../../public/images/avatars/burger-bar.png";
import { Inertia } from '@inertiajs/inertia';

// if (dataType === 'jpeg' || dataType === 'png' | dataType === 'jpg') {
//     // return <img src={src} alt="Image" className="w-3/12"/>;
//
// }
// } else if (dataType === 'pdf') {
//     return (
//         <a href={src}
//             className="pdf-view-link "
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             Download PDF
//         </a>
//     );
//
// } else if (dataType === 'mp4') {
//     return (
//         <video className="video" height="600" controls>
//             <source src={src} type="video/mp4" />
//             Your browser does not support the video tag.
//         </video>
//     );
//
// } else {
//     console.log('er')
// }

// const MediaTemplate = ({src})=>{
//     console.log(src)
//     return(
//         <>
//
//         </>
//     )
// }
const TemplateFile = ({template}) => {

    let srcs = [];
    let  mimeType;
    let dataType;
//Multi files display
    if(template.media.length>0) {

        console.log(template.title)
        for (var i = 0; i < template.media.length; i++) {

            mimeType = template.media[i].mime_type;
            dataType = mimeType.split("/")[1]
            let src = template.media[i].original_url;
            srcs[i] = src;



        }
        if (dataType === 'jpeg' || dataType === 'png' | dataType === 'jpg') {
            return <img src={srcs[0]} alt="Image" className="w-3/12"/>;

        }
        else if (dataType === 'pdf') {
            return (
            <a href={srcs[0]}
                className="pdf-view-link "
                target="_blank"
                rel="noopener noreferrer"
            >
                Download PDF
            </a>
            );

        } else if (dataType === 'mp4') {
            return (
            <video className="video" height="600" controls>
                <source src={srcs[0]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            );

        } else {
            console.log('er')
        }
    }




};




export default function TemplateCard({template}){



    const sendArchivedTemplate = (event)=>{
        event.preventDefault()
        const url = '/editor/send-archived/'+template.id
        Inertia.post(url);
    }

    const softDeleteTemplate = (event)=>{
        event.preventDefault()
        const url = '/editor/template/'+template.id
        Inertia.delete(url);
    }



    return(
        <div className="card">
            <div className="head">

                {
                    template.status === 'Publish now' ?<button className="status"> Published</button>:<button className="status"> Archived</button>

                }
                <Dropdown
                    button={
                        <img
                            className="h-10 w-10 rounded-full"
                            src={Menu}
                            alt="Elon Musk"
                        />
                    }
                    children={
                        <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">

                            <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

                            <div className="flex flex-col p-4">
                                {
                                    template.status === 'Publish now' ?
                                        <a
                                            href=" "
                                            className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out hover:ease-in"
                                            onClick={softDeleteTemplate}
                                        >
                                            Delete
                                        </a>
                                    :
                                        <a
                                            onClick={sendArchivedTemplate}
                                            href=" "
                                            className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out hover:ease-in"
                                        >
                                            Send now
                                        </a>
                                }

                            </div>
                        </div>
                    }
                    classNames={"py-2 top-8 -left-[180px] w-max"}
                />
            </div>

            <div className="card-header">

                <TemplateFile template={template}  />

            </div>
            <div className="card-body">
                <div className="flex justify-between">
                    <span className="tag tag-pink">type</span>
                    <h4>
                        {/*{dataType}*/}
                    </h4>
                </div>

                <div className="">

                    <p className="type">
                        {/*{`${(template.media[0].size / 1024 / 1024).toFixed(2)} MB`}*/}
                    </p>
                </div>
                <div className="">
                    <p className="font-bold "style={{'fontSize':'20px'}}>{template.title}</p>
                </div>
                <div className="user">
                    <div className="user-info">
                        <small>{new Date(template.created_at).toDateString()}</small>
                        <div className="creator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <p>{template.creator}</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
