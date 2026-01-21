// pages/index.js

import { useState } from "react";
import Layout from "../components/layout";
import UniversesSidebar from '../components/universes-sidebar';
import QuestionCard from '../components/question-card';
import CommentCard from '../components/comment-card';
import { posts, comments } from "../data/mockData";
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [commentText, setCommentText] = useState('');
  const [sortBy, setSortBy] = useState('Best - Today');
  
  const handleSubmitComment = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', commentText);
    setCommentText('');
  };
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8">
        {/* Left Sidebar - Universes */}
        <div className="hidden xl:block xl:col-span-3 sticky top-20 self-start">
          <UniversesSidebar />
        </div>
        
        {/* Main Content - Comment */}
        <div className="lg:col-span-12 xl:col-span-6 overflow-y-auto">
          {/* Back Button */}
          <button className="flex items-center gap-2 text-gray-400 mb-4 hover:text-white">
            <ChevronLeftIcon className="w-5 h-5" />
            <span>Back</span>
          </button>
          
          {/* Question of the Day */}
          <QuestionCard question={posts[0]} />

          {/* Comment Input */}
          <div className="card mt-6">
            <form onSubmit={handleSubmitComment}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-boo-cyan"></div>
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Comment"
                  className="flex-1 bg-boo-dark rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-boo-cyan"
                />
                <button 
                  type="submit"
                  className="text-boo-cyan hover:text-boo-cyan-dark"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Sort Dropdown */}
          <div className="mt-6 mb-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-boo-dark border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-boo-cyan"
            >
              <option>Best - Today</option>
              <option>Best - This Week</option>
              <option>Best - This Month</option>
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>

          {/* Comments Feed */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Related posts */}
        <div className="hidden xl:block xl:col-span-3 sticky top-20 self-start">
          <div className="card">
            <h3 className="font-semibold mb-4">Related Posts</h3>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="pb-3 border-b border-gray-800 last:border-0">
                  <p className="text-xs text-gray-500 mb-1">Question of the Day</p>
                  <h4 className="text-sm font-medium mb-2">{post.question}</h4>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                    <span className="ml-auto">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
