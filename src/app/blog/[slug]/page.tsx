import { redirect } from 'next/navigation';
import { getPost } from '@/actions/blog';

export default async function PostPage({ params }: { params: { slug: string } }) {
    const { post } = await getPost(params.slug as string);

    if(!post) {
        redirect("/");
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-4">Publié le {post.created_at ? new Date(post.created_at).toLocaleDateString("fr-FR") : ""}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} className='prose dark:prose-dark inline w-80'/>
        </div>
    );
};