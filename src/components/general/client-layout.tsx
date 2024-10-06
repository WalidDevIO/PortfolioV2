import React, { PropsWithChildren } from "react";
import { StarrySky } from "./starry-sky";

export function ClientLayout({ children }: PropsWithChildren) {
    return (
        <>
            <StarrySky />
            {children}
        </>
    )
}