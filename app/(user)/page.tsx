import {groq} from 'next-sanity'
import { client } from "@/lib/sanity.client";
import BlogList from "@/components/BlogList";

const query = groq`
    *[_type == 'post'] {
        ...,
        author->,
        categories[]->,
    } | order(_createdAt desc)
`

export const revalidate = 1800;

export default async function Page() {
    const data = await client.fetch(query).then(res => res);
    
    return <BlogList posts={data} />;
    
}