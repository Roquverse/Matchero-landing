import JobHero from "../Components/JobHero";
import BlogListing from "../Components/BlogListing";
import "../assets/Styles/blog.css";

const Blog = () => {
  return (
    <div>
      <JobHero
        backgroundColor="bg-green-20"
        title="Blog"
        description="Matchero insights and latest advice"
        image="/job-hero.png"
        imageAlt="Blog hero image"
        breadcrumb={{
          items: [
            { text: "Home", link: "/" },
            { text: "For jobseekers", link: "/candidate" },
            { text: "Blog" },
          ],
        }}
        showSearchBar={true}
        searchPlaceholder="Press enter to search"
      />

      {/* Blog Listings Section */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-blog"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M1440,288L1360,256C1280,224,1120,160,960,122.7C800,85,640,75,480,58.7C320,43,160,21,80,10.7L0,0L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
      <section className="py-0 bg-white blog-section">
        <div className="mx-auto">
          <BlogListing />
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bottom-vector-blog-bottom"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
        <path
          fill="#ECFDF5"
          fillOpacity="1"
          d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Blog;
