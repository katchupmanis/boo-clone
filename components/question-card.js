// components/QuestionCard.js
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function QuestionCard({ question }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(question.likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  return (
    <div className="card">
      <h2 className="text-sm font-semibold mb-6 mt-0">
        Question of the Day
      </h2>
      <div className='flex'>
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          {question.question}
        </h1>
        <span className="text-sm text-gray-500">{question.date}</span>
      </div>
      <div className="flex items-center gap-6 text-gray-400">
        <button 
          onClick={handleLike}
          className="flex items-center gap-2 hover:text-cyan-500 transition-colors cursor-pointer"
        >
          {liked ? (
            <HeartSolidIcon className="w-6 h-6 text-cyan-500" />
          ) : (
            <HeartIcon className="w-6 h-6" />
          )}
          <span>{likeCount}</span>
        </button>
        
        <button className="flex items-center gap-2 transition-colors hover:text-cyan-500 cursor-pointer">
          <ChatBubbleLeftIcon className="w-6 h-6" />
          <span>{question.comments}</span>
        </button>
        
        <button className="flex items-center gap-2 transition-colors hover:text-cyan-500 cursor-pointer">
          <ShareIcon className="w-6 h-6" />
        </button>
        
        <button className="ml-auto text-sm transition-colors hover:text-cyan-500 cursor-pointer">
          Comment
        </button>
      </div>
    </div>
  );
}