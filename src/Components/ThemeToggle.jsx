import {Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/Utils";
export const ThemeToggle=()=>{
    const[isDarkMode,setIsDarkMode]=useState(false);
useEffect(() => {

    const storedTheme=localStorage.getItem("theme");
if(storedTheme=="light"){
    setIsDarkMode(false)
}
else{
    setIsDarkMode(true);
document.documentElement.classList.add("dark")
    
}
 }, [])

    const toggleTheme=()=>{
        if (isDarkMode){
            
            document.documentElement.classList.remove("dark")
            setIsDarkMode(false);
localStorage.setItem("theme","light");

        } else{
document.documentElement.classList.add("dark")
localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    }
    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden p-2 top-5 right-5 z-50 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
{isDarkMode? (
    <Sun className="h-6 w-6 text-yellow-300"/> 
):(
<Moon className=" h-6 w-6 text-blue-900"/>
)
};
    </button>
}