"use client"
import {signOut} from "next-auth/react";
import {useTransition} from "react";
import {Loader} from "@/components/ui/loader";
import {LogOut} from "lucide-react";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";

export const DropdownMenuItemLogout = () => {
    const [isPending, startTransition] = useTransition();
    return (
        <DropdownMenuItem
            onClick={() => {
                startTransition(() => {
                    signOut();
                })
            }}
        >
            {isPending ? (
                <Loader size={20} className="mr-2 h-4 w-4"/>
            ) : (
                <LogOut className="mr-2 h-4 w-4"/>

            )}
            Logout
        </DropdownMenuItem>
    )
}