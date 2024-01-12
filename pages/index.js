import React from "react";
import 'tailwindcss/tailwind.css'
import Navbar from "../app/components/navbar";

export default function Home(){
    return(
        <>
        <Navbar></Navbar>
        <p className="text-2xl" >The quick brown fox jumps over the lazy dog</p>
        </>
    )
}