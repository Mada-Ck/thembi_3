import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';

const GetHelp: React.FC = () => {
  return (
    <Base>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="section space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Get Help</h1>
            <p className="text-lg text-gray-700">Welcome to the Get Help page of the Thembi Community Initiative. Here, you can find resources and support for HIV/AIDS-related issues in Malawi and beyond.</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">How to Get Involved</h2>
            <p className="mb-4 text-blue-800">If you’d like to contribute to our efforts, here are some ways to get involved:</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <strong className="block text-primary text-xl mb-2">Volunteer</strong>
                <p className="text-sm text-gray-600 mb-3">Join our team of volunteers to support community outreach programs.</p>
                <Link href="/volunteer" className="text-primary font-semibold hover:underline">Learn more →</Link>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <strong className="block text-primary text-xl mb-2">Donate</strong>
                <p className="text-sm text-gray-600 mb-3">Your donations help us provide essential services to those affected by HIV/AIDS.</p>
                <Link href="/donate" className="text-primary font-semibold hover:underline">Donate Now →</Link>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm">
                <strong className="block text-primary text-xl mb-2">Spread Awareness</strong>
                <p className="text-sm text-gray-600 mb-3">Share our resources and information with your network to raise awareness about HIV/AIDS.</p>
                <Link href="/about-hiv" className="text-primary font-semibold hover:underline">Share Resources →</Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6 text-gray-600">For more information, please reach out to us:</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="bg-primary/10 p-2 rounded-full text-primary">📧</span>
                  <span><strong>Email:</strong> info@thembi.org</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="bg-primary/10 p-2 rounded-full text-primary">📞</span>
                  <span><strong>Phone:</strong> +265 123 456 789</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="bg-primary/10 p-2 rounded-full text-primary">📍</span>
                  <span><strong>Address:</strong> 123 Main Street, Lilongwe, Malawi</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400 italic">
              [Map Placeholder]
            </div>
          </div>
        </div>
      </main>
    </Base>
  );
};

export default GetHelp;

