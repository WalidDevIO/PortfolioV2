import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-wrap flex-row justify-center gap-4">
            {[...Array(6)].map((_, index) => <Skeleton key={index} className="w-48 h-48" />)}
        </div>
    );
}
