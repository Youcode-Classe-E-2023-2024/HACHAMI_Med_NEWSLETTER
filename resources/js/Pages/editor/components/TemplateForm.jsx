import {useState} from "react";
import { Inertia } from '@inertiajs/inertia';

export default function TemplateForm({status}){
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        status: 'Publish now', // Default value
        files: [],
    });
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === 'files' ? [...prevFormData.files, ...files] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        data.append('status', formData.status);

        formData.files.forEach((file, index) => {
            data.append(`files[${index}]`, file);
        });
        // data.append('files', formData.files);



         Inertia.post('/editor/save-template', data)
        setFormData({
            title: '',
            content: '',
            files: null,
        })
    };
    return(
        <div className="absolute top-0 border-2 h-[59rem] left-[17%] w-[82%] flex justify-center">
                <div className="relative top-10 mt-[10px] " style={{border:'1px solid black',borderRadius:'10px',height:'60%',color:'#OOO',width:'40%',padding:'10px 25px' ,display:'flex',justifyContent:'center',alignItems:'center',background:'#fff7ed'}}>
                    {
                        // status ?
                    }


                    <form className="w-full mx-auto" onSubmit={handleSubmit}>
                        {status && <label className="font-semibold text-lg text-green-900 ">{status}</label>}
                        <div className="mb-5">
                            <label htmlFor="email"
                                   className="block mb-2 text-md font-medium font-medium text-gray-900 dark:text-white">
                                 Title</label>
                            <input type="text" name="title"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   value={formData.title}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="large-input"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content
                                </label>
                            <input type="text" id="large-input" name="content"
                                   className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   value={formData.content} onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="countries"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publish now | Save later</label>
                            <select id="countries" name="status" value={formData.status} onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option>Publish now</option>
                                <option>Save later</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                   htmlFor="user_avatar">Upload file</label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                type="file"
                                name="files"
                                multiple
                                onChange={handleChange}
                            />
                                <div className="mt-1 text-sm  dark:text-gray-300" id="user_avatar_help">
                                    Add file with the template
                                </div>
                        </div>

                        <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                        </button>
                    </form>

                </div>
        </div>
    )
}
