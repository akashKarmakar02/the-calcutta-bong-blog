import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => {
            return <h1 className="text-5xl font-bold py-10">
                {children}
            </h1>;
        },
        h2: ({ children }: any) => {
            return <h2 className="text-4xl font-bold py-10">
                {children}
            </h2>;
        },
        h3: ({ children }: any) => {
            return <h3 className="text-3xl font-bold py-10">
                {children}
            </h3>;
        },
        h4: ({ children }: any) => {
            return <h4 className="text-2xl font-bold py-10">
                {children}
            </h4>;
        },
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 mx-5">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;

            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-[#F7AB0A] hover:decoration-black"
                >
                    {children}
                </Link>
            );
        }
    },
}