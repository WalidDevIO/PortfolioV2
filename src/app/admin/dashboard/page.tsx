import { Loader } from "@/components/general/loader";
import { Suspense } from "react";
import { DashboardView } from "@/components/admin/dashboard/dashboard-view";

export default function Dashboard() {

    return (
        <div className="container mx-auto mt-8">
            <Suspense fallback={<Loader />}>
                <DashboardView />  
            </Suspense>
        </div>
    );
}