export interface Media {
    data: Media_
}

interface Media_ {
    id: number,
    attributes: MediaAttributes
}

interface MediaAttributes {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: MediaFormats
}

interface MediaFormats {
    small: MediaFormatsAttributes
    medium: MediaFormatsAttributes
    large: MediaFormatsAttributes
    thumbnail: MediaFormatsAttributes
}

interface MediaFormatsAttributes {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: string
    size: number
    width: number
    height: number
}