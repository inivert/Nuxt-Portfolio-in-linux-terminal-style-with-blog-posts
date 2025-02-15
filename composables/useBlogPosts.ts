// Composable for managing blog posts
import { useAsyncData } from '#app'

export interface BlogPost {
  title: string
  description: string
  date: string
  readTime?: number
  category: string
  _path: string
}

export const useBlogPosts = () => {
  // Fetch all blog posts
  const { data: posts, status } = useAsyncData('blog-posts', () => {
    return queryContent<BlogPost>('blog')
      .sort({ date: -1 })
      .find()
  })

  // Get recent posts (latest 3)
  const recentPosts = computed(() => {
    return posts.value?.slice(0, 3) ?? []
  })

  return {
    posts,
    recentPosts,
    isLoading: computed(() => status.value === 'pending')
  }
} 