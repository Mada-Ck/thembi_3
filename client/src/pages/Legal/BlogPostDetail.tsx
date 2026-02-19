import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BlogPostDetail: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="blog-post-full fade-in">
    <div className="container">
        <h1>{{ post.title }}</h1>
        <p className="post-meta">
            <span className="post-date">{{ post.date }}</span>
            {% if post.author %} | <span className="post-author">{{ post.author }}</span>{% endif %}
        </p>
        {% if post.image %}
        <img src="{{ post.image.url }}" alt="{{ post.title }}" className="blog-image-full-width">
        {% endif %}
        <div className="post-content">
            {{ post.content|safe }}
        </div>
        <hr>
        <div className="post-navigation">
            <a href="/main:index" className="button">« Back to Home</a>
        </div>
    </div>
</section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;
