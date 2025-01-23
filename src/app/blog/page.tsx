import { getPosts } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Blog({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
    const slug = searchParams?.slug as string | undefined
    const { posts } = await getPosts(slug ? parseInt(slug) : 0)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
                <Card key={post.id} className="p-4 rounded-lg shadow border-2 border-gray-200 dark:border-gray-800 bg-transparent">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</CardTitle>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">Posté le {post.created_at ? new Date(post.created_at).toLocaleDateString("fr-FR") : ""}</p>
                        <a href={`/blog/${post.slug}`}>
                            <Button variant="outline">Lire la suite</Button>
                        </a>
                    </CardHeader>
                </Card>
            ))}
            </div>
        </div>
    );
}