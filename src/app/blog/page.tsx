import { getPosts } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,  } from "@/components/ui/card";

export default async function Blog({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
    const slug = searchParams?.slug as string | undefined
    const { posts } = await getPosts(slug ? parseInt(slug) : 0)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <div className="grid grid-cols-1 gap-4">
            {posts.map((post) => (
                <Card key={post.id} className="p-4 rounded-lg shadow border-2 border-dark dark:border-white bg-transparent hover:scale-[1.05] cursor-pointer duration-500">
                    <a href={`/blog/${post.slug}`}>
                        <CardHeader>
                            <CardTitle className="text-4xl font-bold mb-4 text-dark dark:text-white">{post.title}</CardTitle>
                            <CardDescription className="text-dark dark:text-white mb-4">Publié le {post.created_at ? new Date(post.created_at).toLocaleDateString("fr-FR") : ""}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-dark dark:text-white mb-4">{post.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline">Lire la suite...</Button>
                        </CardFooter>
                    </a>
                </Card>
            ))}
            </div>
        </div>
    );
}