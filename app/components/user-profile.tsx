'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export default function UserProfile(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
    <DropdownMenu onOpenChange={() => setMenuOpen(!menuOpen)}>
        <DropdownMenuTrigger className="outline-none hover:text-slate-200 cursor-pointer transition duration-300">
            <div className="flex items-center gap-1 lg:gap-2">
                <FaUserCircle className="text-3xl"/>
                <div className="flex flex-col items-start text-[0.9rem]">
                    <p className="font-medium">John Doe</p>
                </div>
                {menuOpen? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem className="lg:hidden cursor-pointer"><Link className="w-full" href="">Notification</Link></DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer"><Link className="w-full" href="">Profile</Link></DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer"><Link className="w-full" href="">Settings</Link></DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer"><Link className="w-full" href="/logout">Logout</Link></DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}