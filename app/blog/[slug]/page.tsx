import { notFound } from 'next/navigation'
import { posts } from '@/lib/posts'
import BlogPostBody from './BlogPostBody'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()
  return <BlogPostBody post={post} />
}
