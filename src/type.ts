import { IconType } from "react-icons"

export interface iService {
  title: string
  about: string
  Icon: IconType
}

export interface iSkill {
  name: string
  level: string
  Icon: IconType 
}

export interface iProject {
  id: number
  name: string
  description: string
  image_path: string
  deployed_url: string
  github_url: string
  categoty: Category[]
  key_tech: string[]
}

export type Category = "react" | "express" | "mongo" | "next" | "typescript"
