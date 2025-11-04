import PageHero from "../Components/PageHero";
import BlogListing from "../Components/BlogListing";
import "../assets/Styles/blog.css";

const Blog = () => {
  return (
    <div>
      <PageHero
        backgroundColor="bg-green-20"
        title="Blog"
        description="Stay informed and inspired with Matchero's blog."
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
