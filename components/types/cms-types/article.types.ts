import { Media } from "./media.types"

export interface Article {
    id: number
    attributes: ArticleAttributes
}

interface ArticleAttributes {
    articleTitle: string
    articleSub: string
    articleBody: string
    author: string
    createdAt: string
    thumbnailSameAsCover: boolean
    articleCoverImage: Media
    articleThumbnail: Media
    isFeatured: boolean
}