import { useRef } from "react";
import { useEffect } from "react";
import correctCupon from "../../../../../assets/accept.png";
import badCupon from "../../../../../assets/cross.png";
import "./informativeMessage.scss";
const InformativeMessage = ({state,message,show}) => {
    const containerRef=useRef(null);
    useEffect(()=>{
        if(show){
            containerRef.current.style.transition="2s";
            containerRef.current.style.display="flex";
        }else{
            containerRef.current.style.display="none";
        }
    },[show])
    return ( 
        <div id="message-container" className="message-container" ref={containerRef}>
            <img src={state? correctCupon: badCupon} alt="foto del cupon"/>
            <p>{message}</p>
        </div>

     );
}
 
export default InformativeMessage;