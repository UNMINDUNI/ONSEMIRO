import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Character, InstagramPost } from '../types';
import { Heart, MessageCircle, Bookmark, ChevronLeft, Grid, Plus, Send, Check } from 'lucide-react';
import { DONGJIN_INSTAGRAM_POSTS, JIHO_INSTAGRAM_POSTS } from '../data';

interface InstagramMockupProps {
  character: Character;
  onClose: () => void;
}

export default function InstagramMockup({ character, onClose }: InstagramMockupProps) {
  const isDongjin = character.id === 'dongjin';
  const initialPosts = isDongjin ? DONGJIN_INSTAGRAM_POSTS : JIHO_INSTAGRAM_POSTS;
  const [posts, setPosts] = useState<InstagramPost[]>(initialPosts);
  const [activeTab, setActiveTab] = useState<'GRID' | 'TAGGED'>('GRID');
  const [activePostDetail, setActivePostDetail] = useState<InstagramPost | null>(null);
  const [newCommentText, setNewCommentText] = useState('');
  const [isFollowing, setIsFollowing] = useState(false);

  const handleLike = (postId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
    // If we have an active post detail, keep it in sync
    if (activePostDetail && activePostDetail.id === postId) {
      setActivePostDetail(prev => {
        if (!prev) return null;
        return {
          ...prev,
          isLiked: !prev.isLiked,
          likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1
        };
      });
    }
  };

  const handleAddComment = (postId: string) => {
    if (!newCommentText.trim()) return;
    const newComment = { user: 'guest_onsemiro', text: newCommentText.trim() };
    
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));

    if (activePostDetail && activePostDetail.id === postId) {
      setActivePostDetail(prev => {
        if (!prev) return null;
        return {
          ...prev,
          comments: [...prev.comments, newComment]
        };
      });
    }
    setNewCommentText('');
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md" id="instagram-app-modal">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="w-full max-w-sm h-[740.5px] bg-[#000000] rounded-[50px] border-[12px] border-[#1f2022] overflow-hidden flex flex-col relative shadow-2xl shadow-gold-500/5 justify-between"
        id="phone-frame"
      >
        {/* Phone Notch/Status bar */}
        <div className="h-10 bg-[#000] flex justify-between items-center px-8 text-neutral-400 font-mono text-xs select-none relative z-30 shrink-0">
          <span>7:00 PM</span>
          {/* Notch pill */}
          <div className="w-24 h-4.5 bg-[#1f2022] rounded-full absolute left-1/2 -translate-x-1/2 top-1.5 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-950 block" />
          </div>
          <div className="flex gap-1">
            <span>5G</span>
            <span className="w-5 h-2.5 bg-neutral-600 rounded-sm relative flex items-center p-0.5"><span className="w-3.5 h-full bg-neutral-200 block rounded-[1px]" /></span>
          </div>
        </div>

        {/* Smartphone Viewport screen */}
        <div className="flex-1 overflow-y-auto flex flex-col justify-start relative text-white hide-scrollbar scroll-smooth" id="phone-screen">
          
          <AnimatePresence mode="wait">
            {!activePostDetail ? (
              // PROFILE INDEX VIEW
              <motion.div
                key="profile-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col"
              >
                {/* Header navbar */}
                <div className="h-14 border-b border-neutral-900 flex justify-between items-center px-4 sticky top-0 bg-[#000]/90 backdrop-blur-md z-10 shrink-0">
                  <button onClick={onClose} className="p-1 hover:bg-neutral-900 rounded-full focus:outline-none flex items-center">
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <span className="font-bold text-sm tracking-tight font-mono">{character.instagramHandle}</span>
                  <div className="w-8 h-8" /> {/* spacer */}
                </div>

                {/* Profile Meta Stats */}
                <div className="p-4" id="profile-meta-top">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {/* User Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600">
                        <div className="w-full h-full rounded-full bg-[#000] flex items-center justify-center overflow-hidden font-display font-black text-xl text-gold-400 border border-black uppercase text-center">
                          {isDongjin ? '🏋️‍♂️' : '💇‍♂️'}
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1 w-5 h-5 bg-blue-500 border-2 border-black rounded-full flex items-center justify-center font-bold text-[8px] text-white">
                        ✓
                      </div>
                    </div>

                    {/* Stats columns */}
                    <div className="flex-1 flex justify-around text-center" id="stat-counters">
                      <div>
                        <div className="font-bold text-sm">{posts.length}</div>
                        <div className="text-[10px] text-neutral-400">게시물</div>
                      </div>
                      <div>
                        <div className="font-bold text-sm">{isDongjin ? '2.4K' : '3.8K'}</div>
                        <div className="text-[10px] text-neutral-400">팔로워</div>
                      </div>
                      <div>
                        <div className="font-bold text-sm">{isDongjin ? '120' : '412'}</div>
                        <div className="text-[10px] text-neutral-400">팔로잉</div>
                      </div>
                    </div>
                  </div>

                  {/* Bio descriptions */}
                  <div className="space-y-1.5 text-xs text-left" id="bio-texts">
                    <h1 className="font-bold">{character.name}</h1>
                    <span className="text-neutral-400 block text-[11px] leading-tight">{character.role}</span>
                    <p className="leading-relaxed text-neutral-300">{character.textBio.substring(0, 85)}...</p>
                    
                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {character.hashtags.map((tag) => (
                        <span key={tag} className="text-sky-400 hover:underline">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4" id="bio-action-buttons">
                    <button
                      onClick={() => setIsFollowing(!isFollowing)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-colors focus:outline-none flex items-center justify-center gap-1.5 ${
                        isFollowing 
                          ? 'bg-neutral-800 text-neutral-200' 
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      {isFollowing ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>팔로잉</span>
                        </>
                      ) : (
                        <span>팔로우</span>
                      )}
                    </button>
                    <button
  onClick={() => {
    window.open("https://share.crack.wrtn.ai/6btlsw", "_blank");
  }}
  className="flex-1 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg text-xs font-semibold tracking-tight transition-colors focus:outline-none"
>
  메시지
</button>
                  </div>
                </div>

                {/* Profile Tabs (Grid vs Tagged) */}
                <div className="flex border-t border-neutral-900 mt-2 text-center" id="profile-tabs">
                  <button
                    onClick={() => setActiveTab('GRID')}
                    className={`flex-1 py-2.5 flex justify-center border-t transition-colors ${
                      activeTab === 'GRID' ? 'border-white text-white' : 'border-transparent text-neutral-500'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveTab('TAGGED')}
                    className={`flex-1 py-2.5 flex justify-center border-t transition-colors ${
                      activeTab === 'TAGGED' ? 'border-white text-white' : 'border-transparent text-neutral-500'
                    }`}
                  >
                    <span className="font-mono text-sm">🔖</span>
                  </button>
                </div>

                {/* Grid Post Display */}
                {activeTab === 'GRID' ? (
                  <div className="grid grid-cols-3 gap-[1px] bg-neutral-900" id="photo-grid">
                    {posts.map((post) => (
                      <motion.div
                        key={post.id}
                        onClick={() => setActivePostDetail(post)}
                        className="aspect-square relative group cursor-pointer bg-neutral-800 overflow-hidden"
                        whileHover={{ scale: 0.98 }}
                      >
                        <img
                          src={post.imageUrl}
                          alt="Instagram feed"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-xs font-semibold text-white pointer-events-none">
                          <span className="flex items-center gap-1"><Heart className="w-4 h-4 fill-white text-white" /> {post.likes}</span>
                          <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4 fill-white text-white" /> {post.comments.length}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-xs text-neutral-500" id="tagged-posts">
                    태그된 사진이 없습니다
                  </div>
                )}
              </motion.div>
            ) : (
              // POST ELEMENT DETAILED VIEW
              <motion.div
                key="detail-view"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="flex flex-col h-full justify-between"
              >
                {/* Header navbar */}
                <div className="h-14 border-b border-neutral-900 flex justify-between items-center px-4 sticky top-0 bg-[#000]/95 z-10 shrink-0">
                  <button onClick={() => setActivePostDetail(null)} className="p-1 hover:bg-neutral-900 rounded-full focus:outline-none flex items-center gap-1">
                    <ChevronLeft className="w-5 h-5 text-white" />
                    <span className="text-xs">피드</span>
                  </button>
                  <span className="font-bold text-sm tracking-tight">게시물</span>
                  <div className="w-8 h-8" />
                </div>

                <div className="flex-1 overflow-y-auto pb-4" id="scrollable-detail-card">
                  {/* Poster Meta info */}
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-gold-400 font-bold uppercase border border-neutral-700">
                        {isDongjin ? '🏋️‍♂️' : '💇‍♂️'}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold font-mono">{character.instagramHandle}</span>
                        <span className="text-[9px] text-neutral-400">온세미로 빌딩</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Large Image */}
                  <div className="w-full bg-neutral-900 aspect-square overflow-hidden relative">
                    <img
                      src={activePostDetail.imageUrl}
                      alt="Detailed view"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Actions bar (Like, comment, share, save) */}
                  <div className="p-3 flex justify-between items-center text-white">
                    <div className="flex items-center gap-4">
                      <button onClick={(e) => handleLike(activePostDetail.id, e)} className="focus:outline-none active:scale-90 transition-transform">
                        <Heart className={`w-6 h-6 ${activePostDetail.isLiked ? 'fill-red-500 text-red-500 animate-pulse' : 'text-zinc-100'}`} />
                      </button>
                      <MessageCircle className="w-6 h-6 text-zinc-100" />
                    </div>
                    <Bookmark className="w-6 h-6 text-zinc-100" />
                  </div>

                  <div className="px-3" id="caption-body">
                    {/* Likes count */}
                    <span className="text-xs font-bold block mb-1">좋아요 {activePostDetail.likes}개</span>
                    
                    {/* Caption content */}
                    <p className="text-xs text-neutral-300 leading-relaxed text-left">
                      <span className="font-bold mr-1.5 font-mono text-zinc-100">{character.instagramHandle}</span>
                      {activePostDetail.caption}
                    </p>

                    <div className="text-[10px] text-neutral-500 mt-1 uppercase mb-4">
                      {activePostDetail.date}
                    </div>

                    {/* Comments section */}
                    <div className="border-t border-neutral-900 pt-3" id="comments-list">
                      <h4 className="text-[10px] font-mono text-neutral-400 mb-2 uppercase select-none">댓글 {activePostDetail.comments.length}개</h4>
                      <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                        {activePostDetail.comments.map((comment, index) => (
                          <div key={index} className="text-xs text-left leading-snug">
                            <span className="font-bold mr-2 text-white font-mono">{comment.user}</span>
                            <span className="text-neutral-300">{comment.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment input footer sticky bottom */}
                <div className="p-3 border-t border-neutral-900 bg-black flex gap-2 items-center">
                  <input
                    type="text"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="댓글 달기..."
                    className="flex-1 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-neutral-700 font-mono"
                    onKeyDown={(e) => e.key === 'Enter' && handleAddComment(activePostDetail.id)}
                  />
                  <button
                    onClick={() => handleAddComment(activePostDetail.id)}
                    className="p-1.5 bg-neutral-800 hover:bg-neutral-700/80 rounded-full text-white focus:outline-none"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Virtual OS home indicator bar */}
          <div className="h-6 bg-[#000] flex items-center justify-center relative shrink-0">
            <div className="w-32 h-1 bg-white/40 rounded-full absolute bottom-1.5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
