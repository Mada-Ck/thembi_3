import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BlogList: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="blog" className="fade-in">
    <h2>All Blog Posts</h2>
    <div className="blog-row">
        {% for post in posts %}
            <div className="blog-card">
                <h2>{{ post.title }}</h2>
                <p>{{ post.excerpt|default:post.content|truncatechars:150 }}</p>
                {% if post.image %}
                    <img src="{{ post.image.url }}" alt="{{ post.title }}" className="blog-image" loading="lazy">
                {% else %}
                    <img src="/assets/images/default-blog.jpg" alt="Default blog image" className="blog-image" loading="lazy">
                {% endif %}
                <a href="{% url 'main:blog_post' slug=post.slug %}" className="button update-button">
                    Read Full Story
                </a>
            </div>
        {% empty %}
            <p>No blog posts yet.</p>
        {% endfor %}
    </div>
</section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
