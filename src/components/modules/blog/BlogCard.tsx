import { Blog } from "@/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ blog }: { blog: Blog }) => {
  const { author, publishedDate, content, image, title, id } = blog;
  //   id: number;
  //   title: string;
  //   author: string;
  //   authorImage?: string; // Optional field for the author's profile image
  //   content: string;
  //   image?: string; // Optional field for the blog's cover image
  //   tags: string[];
  //   category: string;
  //   publishedDate: string; // ISO 8601 string
  //   updatedDate: string; // ISO 8601 string
  //   comments: Comment[];
  return (
    
      <div className="blog-card mb-3">
        <div className="card-image">
          <Image src={image} className="img-fluid" width={200} height={200} alt={title} />
        </div>
        <div className="blog-content pb-4">
          <p className="date">
            {moment(publishedDate).format("MMMM Do YYYY, h:mm a")}
          </p>
          <h5 className="title">{title}</h5>
          <p
            className="desc"
            dangerouslySetInnerHTML={{
                __html: content.substr(0, 200) + "...",
            }}
          ></p>
            <p className="">{author}</p>
         <div className="mt-5">
         <Link href={`/blog/${id}`} className="button">
            Read More
          </Link>
         </div>
        </div>
      </div>
    
  );
};

export default BlogCard;
