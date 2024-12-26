import { StaticImageData } from "next/image"

export type TProducts = {
    title: string
    _id: string
    slug: string
    description: string
    price: number
    category: string
    brand: string
    quantity: number
    sold: number
    color: string
    tags: string
    totalrating: number
    images: StaticImageData[]
    ratings: Rating[]
    createdAt: string
    updatedAt: string
}

export interface Rating {
    user: string
    rating: number
}