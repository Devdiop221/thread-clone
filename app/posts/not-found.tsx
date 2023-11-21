import React from 'react';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertTriangle} from "lucide-react";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div>
            <Alert className="my-8">
                <AlertTriangle/>
                <AlertTitle>Not Found</AlertTitle>
                <AlertDescription>
                    Post not found.
                </AlertDescription>
                <Link href="/" className={buttonVariants({variant: "link"})}>Go to home</Link>
            </Alert>
        </div>

    )
}