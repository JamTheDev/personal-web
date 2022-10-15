export interface Experience {
    data: ExperienceTags[]
}

export interface ExperienceTags {
    id: number,
    attributes: ExperienceTagAttr
}

export interface ExperienceTagAttr {
    tagName: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    experience_section_items: ExperienceItem
}

export interface ExperienceItem {
    data: ExperienceItemAttr[]
}

export interface ExperienceItemAttr {
    attributes: ExperienceItemData
}

export interface ExperienceItemData {
    itemName: string,
    colorFrom: string,
    colorTo: string,
    imageUrl: string
}