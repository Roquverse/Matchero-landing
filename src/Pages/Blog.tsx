import PageHero from "../Components/PageHero";
import BlogListing from "../Components/BlogListing";
import "../assets/Styles/blog.css";

const Blog = () => {
  return (
    <div>
      <PageHero />

      {/* Blog Listings Section */}
      <BlogListing />
    </div>
  );
};

export default Blog;
