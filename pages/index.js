// pages/index.js

import { useState } from "react";
import Layout from "../components/layout";
import UniversesSidebar from '../components/universes-sidebar';
import QuestionCard from '../components/question-card';
import CommentCard from '../components/comment-card';
import { posts, comments } from "../data/mockData";
import { ChevronLeftIcon,PaperAirplaneIcon,PhotoIcon,GifIcon } from '@heroicons/react/24/outline';

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
        <div className="lg:col-span-12 xl:col-span-6 overflow-y-auto px-3">
          <div className="flex items-center justify-between mb-6 pt-2">
            {/* Back Button */}
            <button className="flex items-center gap-2 text-gray-400 hover:text-white glow rounded-2xl p-1">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <span className="text-sm text-black bg-cyan-500 rounded-2xl px-3 py-1">#question</span>
            <span>&nbsp;</span>
          </div>
          


          {/* Question of the Day */}
          <QuestionCard question={posts[0]} />

          {/* Comment Input */}
          <div className="card mt-6">
            <form onSubmit={handleSubmitComment}>
              <div className="block">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Comment"
                  className="w-full rounded-lg px-4 py-3 outline-none focus:ring-2 mb-4"
                />
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <button 
                      type="submit"
                      className=""
                    >
                      <GifIcon className="w-8 h-8"/>
                    </button>
                    <button 
                      type="submit"
                      className=""
                    >
                      <PhotoIcon className="w-8 h-8"/>
                    </button>
                  </div>
                  <button 
                    type="submit"
                    className=""
                  >
                    <PaperAirplaneIcon className="w-8 h-8"/>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Sort Dropdown */}
          <div className="mt-6 mb-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className=" border-gray-700 rounded-lg px-4 py-2 outline-none"
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
          <div className="card mb-4">
            <div className="w-full h-64 bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <span className="text-gray-500">Image placeholder</span>
            </div>
            <button className="w-full mt-4 bg-cyan-500 text-black uppercase px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors">
              Activate Boo Infinity
            </button>
          </div>

          <h3 className="font-semibold mb-4">Related Posts</h3>

          <div className="card">
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
