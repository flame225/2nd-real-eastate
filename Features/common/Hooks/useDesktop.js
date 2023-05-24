import { useEffect, useState } from "react"

export const useIsDesktop = () =>{
    const [IsDesktop , setIsDesktop] = useState(null)

    useEffect(()=>{
        if(window.innerWidth > 1000){
            setIsDesktop(true)
        }
        else{
            setIsDesktop(false)
        }
        
        const updateMedia = () =>{
            if(window.innerWidth > 1000){
                setIsDesktop(true)
            }
            else{
                setIsDesktop(false)
            }
        }   
        
        window.addEventListener("resize" , updateMedia)
        return () => window.removeEventListener("resize" , updateMedia)

    }, []);

    return {IsDesktop}

}