import { Post } from "@/typings"

type Props = {
    posts: Post[]
}

function BlogList({posts}: Props) {
  console.log(posts.length)
  return (
    <div>BlogList</div>
  )
}

export default BlogList