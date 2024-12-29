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
    totalRating: number
    images: StaticImageData[]
    ratings: Rating[]
    createdAt: string
    updatedAt: string
}

export interface Rating {
    user: string
    rating: number
}
type Comment = {
    user: string;
    avatarUrl?: string; // Optional field for the user's avatar image
    comment: string;
    date: string; // ISO 8601 string
};

export type Blog = {
    id: number;
    title: string;
    author: string;
    authorImage?: string; // Optional field for the author's profile image
    content: string;
    image: StaticImageData; // Optional field for the blog's cover image
    tags: string[];
    category: string;
    publishedDate: string; // ISO 8601 string
    updatedDate: string; // ISO 8601 string
    comments: Comment[];
};


