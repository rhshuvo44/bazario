import camera from "@/assets/images/camera.jpg";
import headphone from "@/assets/images/headphone.jpg";
import service1 from "@/assets/images/service-02.png";
import service2 from "@/assets/images/service-03.png";
import service3 from "@/assets/images/service-04.png";
import service4 from "@/assets/images/service-05.png";
import service from "@/assets/images/service.png";
export const services = [
    {
        title: "Free Shipping",
        tagline: "From all orders over $100",
        image: service,
    },
    {
        title: "Daily Surprise Offers",
        tagline: "Save up to 25% off",
        image: service1,
    },
    {
        title: "Support 24/7",
        tagline: "Shop with an expert",
        image: service2,
    },
    {
        title: "Affordable Prices",
        tagline: "Get Factory direct price",
        image: service3,
    },
    {
        title: "Secure Payments",
        tagline: "100% Protected Payments",
        image: service4,
    },
];
export const categories = [
    {
        title: "cameras",
        tagline: "10 Items",
        image: camera,
    },
    {
        title: "cameras",
        tagline: "10 Items",
        image: camera,
    },
    {
        title: "cameras",
        tagline: "10 Items",
        image: camera,
    },
    {
        title: "cameras",
        tagline: "10 Items",
        image: camera,
    },
    {
        title: "cameras",
        tagline: "10 Items",
        image: camera,
    },
    {
        title: "cameras",
        tagline: "10 Items",
        image: camera,
    },
    {
        title: "cameras",
        tagline: "10 Items",
        image: camera,
    },
    {
        title: "cameras",
        tagline: "10 Items",
        image: camera,
    },

];

export const products = [
    {
        "title": "Smartphone X100",
        "_id": "64b1f9c5d34e2b0012345678",
        "slug": "smartphone-x100",
        "description": "A powerful smartphone with advanced features and sleek design.",
        "price": 799.99,
        "category": "Electronics",
        "brand": "TechCorp",
        "quantity": 50,
        "sold": 30,
        "color": "Black",
        "tags": "featured",
        "totalrating": 4.5,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "JohnDoe", "rating": 5 },
            { "user": "JaneSmith", "rating": 4 }
        ],
        "createdAt": "2024-01-01T10:00:00Z",
        "updatedAt": "2024-02-01T12:00:00Z"
    },
    {
        "title": "Wireless Headphones Pro",
        "_id": "64b1f9c5d34e2b0012345679",
        "slug": "wireless-headphones-pro",
        "description": "Noise-cancelling wireless headphones with premium sound.",
        "price": 299.99,
        "category": "Audio",
        "brand": "SoundMaster",
        "quantity": 100,
        "sold": 75,
        "color": "White",
        "tags": "featured",
        "totalrating": 4.8,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "Alice", "rating": 5 },
            { "user": "Bob", "rating": 4 }
        ],
        "createdAt": "2024-01-10T08:00:00Z",
        "updatedAt": "2024-02-05T14:00:00Z"
    },
    {
        "title": "4K Ultra HD TV",
        "_id": "64b1f9c5d34e2b0012345680",
        "slug": "4k-ultra-hd-tv",
        "description": "Experience cinema-like visuals with this 4K Ultra HD smart TV.",
        "price": 1299.99,
        "category": "Home Appliances",
        "brand": "VisionPlus",
        "quantity": 30,
        "sold": 20,
        "color": "Silver",
        "tags": "featured",
        "totalrating": 4.7,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "Chris", "rating": 5 },
            { "user": "Sam", "rating": 4 }
        ],
        "createdAt": "2024-01-15T09:00:00Z",
        "updatedAt": "2024-02-10T11:00:00Z"
    },
    {
        "title": "Gaming Laptop G500",
        "_id": "64b1f9c5d34e2b0012345681",
        "slug": "gaming-laptop-g500",
        "description": "A high-performance gaming laptop for enthusiasts.",
        "price": 1999.99,
        "category": "Computers",
        "brand": "GameTech",
        "quantity": 25,
        "sold": 10,
        "color": "Red",
        "tags": "featured",
        "totalrating": 4.6,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "Gamer123", "rating": 5 },
            { "user": "ProPlayer", "rating": 4 }
        ],
        "createdAt": "2024-01-20T13:00:00Z",
        "updatedAt": "2024-02-15T16:00:00Z"
    },
    {
        "title": "Smartwatch S2",
        "_id": "64b1f9c5d34e2b0012345682",
        "slug": "smartwatch-s2",
        "description": "A stylish smartwatch with fitness tracking capabilities.",
        "price": 199.99,
        "category": "Wearables",
        "brand": "TechCorp",
        "quantity": 150,
        "sold": 120,
        "color": "Blue",
        "tags": "featured",
        "totalrating": 4.9,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "FitLife", "rating": 5 },
            { "user": "HealthGuru", "rating": 5 }
        ],
        "createdAt": "2024-01-25T15:00:00Z",
        "updatedAt": "2024-02-20T18:00:00Z"
    },
    {
        "title": "Bluetooth Speaker B100",
        "_id": "64b1f9c5d34e2b0012345683",
        "slug": "bluetooth-speaker-b100",
        "description": "Compact Bluetooth speaker with powerful sound.",
        "price": 99.99,
        "category": "Audio",
        "brand": "SoundMaster",
        "quantity": 200,
        "sold": 180,
        "color": "Green",
        "tags": "featured",
        "totalrating": 4.3,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "MusicFan", "rating": 4 },
            { "user": "PartyLover", "rating": 5 }
        ],
        "createdAt": "2024-01-30T17:00:00Z",
        "updatedAt": "2024-02-25T20:00:00Z"
    },
    {
        "title": "Fitness Tracker F10",
        "_id": "64b1f9c5d34e2b0012345684",
        "slug": "fitness-tracker-f10",
        "description": "Track your fitness goals with this advanced fitness tracker.",
        "price": 149.99,
        "category": "Wearables",
        "brand": "FitLife",
        "quantity": 120,
        "sold": 100,
        "color": "Pink",
        "tags": "featured",
        "totalrating": 4.4,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "HealthyYou", "rating": 4 },
            { "user": "GymRat", "rating": 5 }
        ],
        "createdAt": "2024-02-01T10:00:00Z",
        "updatedAt": "2024-03-01T12:00:00Z"
    },
    {
        "title": "Digital Camera D200",
        "_id": "64b1f9c5d34e2b0012345685",
        "slug": "digital-camera-d200",
        "description": "Capture stunning photos with this high-resolution camera.",
        "price": 599.99,
        "category": "Photography",
        "brand": "PhotoPro",
        "quantity": 40,
        "sold": 25,
        "color": "Gray",
        "tags": "featured",
        "totalrating": 4.2,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "ShutterBug", "rating": 4 },
            { "user": "PhotoFan", "rating": 4 }
        ],
        "createdAt": "2024-02-05T14:00:00Z",
        "updatedAt": "2024-03-05T16:00:00Z"
    },
    {
        "title": "Home Security Camera HSC100",
        "_id": "64b1f9c5d34e2b0012345686",
        "slug": "home-security-camera-hsc100",
        "description": "Keep your home secure with this smart security camera.",
        "price": 249.99,
        "category": "Security",
        "brand": "SecureTech",
        "quantity": 80,
        "sold": 60,
        "color": "White",
        "tags": "featured",
        "totalrating": 4.7,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "SafeHome", "rating": 5 },
            { "user": "SecureLife", "rating": 4 }
        ],
        "createdAt": "2024-02-10T16:00:00Z",
        "updatedAt": "2024-03-10T18:00:00Z"
    },
    {
        "title": "Smart Refrigerator SR300",
        "_id": "64b1f9c5d34e2b0012345687",
        "slug": "smart-refrigerator-sr300",
        "description": "A smart refrigerator with advanced cooling technology.",
        "price": 2199.99,
        "category": "Appliances",
        "brand": "CoolTech",
        "quantity": 15,
        "sold": 5,
        "color": "Stainless Steel",
        "tags": "featured",
        "totalrating": 4.6,
        "images": [
            camera,
            headphone
        ],
        "ratings": [
            { "user": "KitchenGuru", "rating": 5 },
            { "user": "ChefLife", "rating": 4 }
        ],
        "createdAt": "2024-02-15T18:00:00Z",
        "updatedAt": "2024-03-15T20:00:00Z"
    }


]

