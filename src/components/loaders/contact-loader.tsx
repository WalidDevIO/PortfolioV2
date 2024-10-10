import { Skeleton } from "@/components/ui/skeleton"

export const ContactLoader = () => {
    return (
        <>
            <div className="space-y-4 mb-6">
                <Skeleton className="w-full h-24" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="w-full h-10 sm:w-1/3" />
                <Skeleton className="w-full h-10 sm:w-1/3" />
                <Skeleton className="w-full h-10 sm:w-1/3" />
            </div>
        </>
    )
}