import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
    return (
        <div className="flex m-auto  justify-center pt-20">
            <SignIn />
        </div>
    );
}
