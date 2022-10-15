export interface AboutMe {
    data: AboutMeData
}

export interface AboutMeData {
    id: number
    attributes: AboutMeAttr
}

export interface AboutMeAttr {
    myPast: string
    shortIntro: string
    motivation: string
    mission: string
    vision: string
    experience: string
}