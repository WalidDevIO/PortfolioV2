"use client";

import Link from "next/link";
import { Post } from "@/types/post";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const BlogAdminPage = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("/api/blog")
            .then(response => response.json())
            .then(data => setPosts(data.posts))
            .catch(error => console.error(error));
    }, [])

    const handleDelete = async (id: number) => {
        await fetch(`/api/blog/${id}`, {
            method: "DELETE"
        });
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <div className="container mx-auto mt-8 w-3/4">
            <div className="flex flex-row justify-between">
                <h1 className="text-3xl">Articles</h1>
                <Button asChild><Link href="/admin/blog/new">Nouveau post</Link></Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map(post => (
                        <TableRow key={post.id}>
                            <TableCell className="w-4/5">{post.title}</TableCell>
                            <TableCell className="flex flex-row shrink gap-2 w-1/5">
                                <Link href={`/admin/blog/edit/${post.id}`}>
                                    <Button>Editer</Button>
                                </Link>
                                <Button onClick={() => handleDelete(post.id as number)}>Supprimer</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BlogAdminPage;