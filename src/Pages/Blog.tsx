import BlogHero from "../Components/BlogHero";
import BlogListing from "../Components/BlogListing";
import "../assets/Styles/blog.css";

const Blog = () => {
  return (
    <div>
      <BlogHero
        breadcrumb={{
          items: [{ text: "Home", link: "/" }, { text: "Blog" }],
        }}
      />

      {/* Blog Listings Section */}
      <BlogListing />
    </div>
  );
};

export default Blog;
