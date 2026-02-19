import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';

// Mock data based on the original template fields
const mockPosts = [
    {
        id: 1,
        title: "Supporting Teen Health",
        excerpt: "Learn how TCI is helping teenagers in our community thrive through health education and support.",
        image: "/assets/images/blog-1.jpg",
        slug: "supporting-teen-health"
    },
    {
        id: 2,
        title: "Community Outreach Success",
        excerpt: "Our latest outreach program reached over 500 families with essential HIV services.",
        image: null,
        slug: "community-outreach-success"
    }
];

const BlogList: React.FC = () => {
    return (
        <Base>
            <main className="container mx-auto px-4 py-8">
                <section id="blog" className="fade-in">
                    <h2 className="text-3xl font-bold mb-8">All Blog Posts</h2>
                    <div className="blog-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockPosts.length > 0 ? (
                            mockPosts.map((post) => (
                                <div key={post.id} className="blog-card border rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="blog-image w-full h-48 object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <img
                                            src="/assets/images/default-blog.jpg"
                                            alt="Default blog image"
                                            className="blog-image w-full h-48 object-cover"
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                                        <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                                        <Link href={`/blog/${post.slug}`} className="inline-block bg-primary text-white px-6 py-2 rounded text-center font-bold hover:bg-primary/90 transition">
                                            Read Full Story
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500">No blog posts yet.</p>
                        )}
                    </div>
                </section>
            </main>
        </Base>
    );
};

export default BlogList;

