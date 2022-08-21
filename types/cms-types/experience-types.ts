export interface Experience {
    data: ExperienceTags[]
}

export interface ExperienceTags {
    id: number,
    attributes: ExperienceTagAttr
}

export interface ExperienceTagAttr {
    tag_name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    experience_items: ExperienceItem
}

export interface ExperienceItem {
    data: ExperienceItemAttr[]
}

export interface ExperienceItemAttr {
    attributes: ExperienceItemData
}

export interface ExperienceItemData {
    item_text: string,
    color_from: string,
    color_to: string,
    imageUrl: string
}