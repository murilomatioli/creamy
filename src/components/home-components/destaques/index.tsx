import React from "react";

export default function HomeDestaques() {
    return(
        <>
        <h2 className="text-gray-700 text-3xl font-[1000] italic my-12">DESTAQUES</h2>

        <section className="flex border-1 border-gray-800 h-96">
            <div className="flex-1 border-r-1 h-full">
                <h3 className="font-[900] text-lg text-gray-800 w-[90%] p-4">DUO RETINAL + CALMING CREAM</h3>
            </div>
            <div className="flex-1 border-r-1 h-full">
                <h3 className="font-[900] text-lg text-gray-800 w-[90%] p-4">DUO PEPTIDE EYE CREAM</h3>
            </div>
            <div className="flex-1 border-r-1 h-full">
                <h3 className="font-[900] text-lg text-gray-800 w-[90%] p-4">KIT LIP BALM THE COFFE COLLECTION</h3>
            </div>
            <div className="flex-1 h-full">
                <h3 className="font-[900] text-lg text-gray-800 w-[90%] p-4">ÁCIDO MANDÉLICO</h3> 
            </div>
        </section>
        </>
    )
}