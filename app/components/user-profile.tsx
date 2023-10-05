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

export default function UserProfile(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
    <DropdownMenu onOpenChange={() => setMenuOpen(!menuOpen)}>
        <DropdownMenuTrigger>
            <div className="flex items-center gap-1">
                <FaUserCircle className="text-3xl"/>
                <div className="flex flex-col items-start text-[0.9rem]">
                    <p className="font-medium">Tesfaye</p>
                    <p>Adminsitrator</p>
                </div>
                {menuOpen? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Messages</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}