import React from "react";
import { useAppSelector } from "../Redux/Hooks";

const Comp: React.FC =()=>{
    const count =useAppSelector((s)=>s.counter);
    return(
    <div>
    <h1>My Count: {count}</h1>
    </div>)
}
export default Comp;