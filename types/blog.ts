export interface BlogPost {
  _path: string
  title: string
  description: string
  date: string
  readTime?: {
    text: string
    minutes: number
    time: number
    words: number
  }
  category: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
  author: string
} 