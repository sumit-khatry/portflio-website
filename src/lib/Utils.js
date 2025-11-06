import { clsx } from "clsx"
import { TwitterIcon } from "lucide-react"
import { twMerge } from "tailwind-merge"
export const cn=(...inputs)=>{
    return twMerge(clsx(inputs));
}