// components/CommentCard.js
import Image from 'next/image';
import { 
  HeartIcon, 
  ChatBubbleLeftIcon, 
  ArrowUturnRightIcon,
  ShareIcon,
  StarIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function CommentCard({ comment }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);
  
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
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 shrink-0 overflow-hidden">
          <img src={comment.user.avatar} alt={comment.user.name} className="w-full h-full object-cover" />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold">{comment.user.name}</h3>
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-gray-500">{comment.timeAgo}</span>
            <button className="ml-auto text-gray-400 hover:text-white">
              <EllipsisVerticalIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">
              🔵 {comment.user.personality}
            </span>
            <span className="inline-flex items-center bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded">
              ♒ {comment.user.zodiac}
            </span>
            <span className="text-xs text-gray-500">{comment.user.match}</span>
          </div>
          
          {/* Award */}
          {comment.hasAward && (
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-yellow-500/20 flex items-center justify-center">
                🏆
              </div>
              <span className="text-xs text-yellow-500">1 Award</span>
            </div>
          )}
          
          {/* Comment Text */}
          <p className="mb-3 text-gray-200">{comment.content}</p>
          
          {/* Comment Image */}
          {comment.image && (
            <div className="mb-3 rounded-lg overflow-hidden bg-gray-800">
              <div className="w-full h-64 bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Image placeholder</span>
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex items-center gap-4 text-gray-400">
            <button 
              onClick={handleLike}
              className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
            >
              {liked ? (
                <HeartSolidIcon className="w-5 h-5 text-red-500" />
              ) : (
                <HeartIcon className="w-5 h-5" />
              )}
              <span className="text-sm">{likeCount}</span>
            </button>
            
            <button className="flex items-center gap-1.5 transition-colors">
              <ChatBubbleLeftIcon className="w-5 h-5" />
              <span className="text-sm">{comment.replies}</span>
            </button>
            
            <button className="flex items-center gap-1.5 transition-colors">
              <ArrowUturnRightIcon className="w-5 h-5" />
            </button>
            
            <button className="flex items-center gap-1.5 transition-colors">
              <ShareIcon className="w-5 h-5" />
            </button>
            
            <button className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
              <StarIcon className="w-5 h-5" />
            </button>
            
            <button className="ml-auto text-sm hover:text-white transition-colors">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}