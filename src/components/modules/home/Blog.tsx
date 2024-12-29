import Container from "@/components/UI/Container";
import { blogs } from "@/utils/data";
import BlogCard from "../blog/BlogCard";

const Blog = () => {
  return (
    <Container class1="blog-wrapper home-wrapper-2 p-5">
      <h2 className="section-heading">Our Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {blogs?.slice(0, 4)?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;
