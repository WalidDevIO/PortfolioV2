import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    const placeholders = [1, 2, 3];

    return (
        <div className="container mx-auto p-4">
            <div className="mb-6">
                <Skeleton className="h-12 w-1/3 rounded" />
            </div>

            <div className="grid grid-cols-1 gap-4">
                {placeholders.map((key) => (
                    <Card
                        key={key}
                        className="p-4 rounded-lg shadow border-2 border-dark dark:border-white bg-transparent"
                        aria-hidden
                    >
                        <CardHeader>
                            <CardTitle>
                                <Skeleton className="h-8 w-3/4 rounded mb-3" />
                            </CardTitle>
                            <CardDescription>
                                <Skeleton className="h-4 w-1/4 rounded" />
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Skeleton className="h-4 w-full rounded mb-2" />
                            <Skeleton className="h-4 w-5/6 rounded mb-2" />
                            <Skeleton className="h-4 w-2/3 rounded" />
                        </CardContent>

                        <CardFooter>
                            <Skeleton className="h-9 w-32 rounded" />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}