import React from 'react';
import { Link, useRoute } from 'wouter';
import Base from '../../components/layout/Base';

// Mock data for demonstration - in a real app this would come from an API
const mockPost = {
  title: "Supporting Teen Health",
  date: "October 24, 2023",
  author: "TCI Team",
  image: "/assets/images/blog-1.jpg",
  content: `
    <p>At Thembi Community Initiative, we believe that empowering teenagers with health education is key to a brighter future. Our latest programs focus on providing safe spaces for conversation and learning.</p>
    <p>Through our Teen Club, we've seen incredible growth in leadership and community involvement. We are committed to continuing this vital work and expanding our reach to more schools and community centers.</p>
  `
};

const BlogPostDetail: React.FC = () => {
  // In a real app, we'd use the slug from the URL to fetch the post
  // const [match, params] = useRoute("/blog/:slug");

  return (
    <Base>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="blog-post-full fade-in">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">{mockPost.title}</h1>
            <p className="post-meta text-gray-500 mb-6 font-medium">
              <span className="post-date">{mockPost.date}</span>
              {mockPost.author && (
                <>
                  <span className="mx-2">|</span>
                  <span className="post-author">{mockPost.author}</span>
                </>
              )}
            </p>

            {mockPost.image && (
              <img
                src={mockPost.image}
                alt={mockPost.title}
                className="blog-image-full-width w-full h-[400px] object-cover rounded-xl mb-8 shadow-md"
                loading="lazy"
              />
            )}

            <div
              className="post-content prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12"
              dangerouslySetInnerHTML={{ __html: mockPost.content }}
            />

            <hr className="my-8 border-gray-200" />

            <div className="post-navigation flex justify-center">
              <Link href="/blog" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                « Back to All Blog Posts
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Base>
  );
};

export default BlogPostDetail;

