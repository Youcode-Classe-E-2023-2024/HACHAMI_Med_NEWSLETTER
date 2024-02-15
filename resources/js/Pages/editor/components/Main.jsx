import React, { useState } from 'react';
import  '../../../../../public/css/app.css'
import TemplateCard from './TemplateCard.jsx'

export default function Main({templates}) {

        return(
                <div className="container absolute top-0 border-2 bg-[#fff7ed] h-[59rem] left-[17%] w-[83%]">
                    {
                        templates.map((template)=>{
                            return(
                                <TemplateCard  key={template.id} template={template} />
                            )
                        })
                    }

                </div>
)}
