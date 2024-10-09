import { Skeleton } from "@/components/ui/skeleton"

export const LandingLoader = () => {
    return (
        <div className="w-full">
            <div>
                <Skeleton className="h-24 w-full" />
            </div>
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <Skeleton className="h-1/3 w-full" />
                        <Skeleton className="h-1/3 w-full" />
                        <Skeleton className="h-1/3 w-full" />
                    </div>
                    <Skeleton className="h-96 w-full" />
                </div>
            </div>
        </div>
    )
}