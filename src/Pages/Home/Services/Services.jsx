import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services,setServices] =useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center space-y-5 ">
                <h3 className="text-[#FF3811] text-3xl font-bold ">Service</h3>
                <h2 className="font-bold text-5xl ">Our Service Area</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which donot look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    services.map(service=><ServicesCard
                    key={service._id}
                    service={service}></ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;