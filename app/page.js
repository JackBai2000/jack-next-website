"use client";

import React from "react";
import 'tailwindcss/tailwind.css'
import { useNavigate, Route , Router, BrowserRouter} from "react-router-dom";
import Projects from "./Projects/page.js";
import WorkExperience from "./WorkExperience/page.js";
import Hobbies from "./Hobbies/page.js";
import App from "./App/page.js";


export default function Page(){
    return(       
        <React.StrictMode>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </React.StrictMode>
        )   
}