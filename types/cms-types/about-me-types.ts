export interface AboutMe {
    data: AboutMeData
}

export interface AboutMeData {
    id: number
    attributes: AboutMeAttr
}

export interface AboutMeAttr {
    mypast: string
    intro: string
    motivation: string
    experienceDesc: string
}