"use client"

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

export default async function Page() {
    const data = await client.fetch(query, {next: {revalidate: 1, cache: 'no-store'}}).then(res => res);
    
    return <BlogList posts={data} />;
    
}