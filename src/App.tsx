import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Instagram, 
  Users, 
  Sparkles, 
  Utensils, 
  ShieldAlert, 
  Bell, 
  ExternalLink, 
  Key, 
  Heart,
  Calendar,
  Cat
} from 'lucide-react';
import { FLOOR_DETAILS, CHARACTERS } from './data';
import { FloorData, ZoneDetail, Character } from './types';
import BuildingModel from './components/BuildingModel';
import InteractiveFloorMap from './components/InteractiveFloorMap';
import ResidentIntercom from './components/ResidentIntercom';
import InstagramMockup from './components/InstagramMockup';

export default function App() {
  // Start with 7F selected by default to display the high-quality PT gym details
  const [selectedFloor, setSelectedFloor] = useState<FloorData>(
    FLOOR_DETAILS.find(f => f.floor === '7F') || FLOOR_DETAILS[0]
  );
  
  // Selected sub-zone of 1F or 7F
  const [selectedZone, setSelectedZone] = useState<ZoneDetail | null>(
    FLOOR_DETAILS.find(f => f.floor === '7F')?.zones[0] || null
  );

  // Active character view selection
  const [selectedChar, setSelectedChar] = useState<Character>(CHARACTERS[0]);

  // Simulated Instagram popups
  const [instaCharacter, setInstaCharacter] = useState<Character | null>(null);

  // Live dynamic clock
  const [time, setTime] = useState<string>('19:06:09');
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('ko-KR', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectFloor = (floor: FloorData) => {
    setSelectedFloor(floor);
    // Auto-select the first zone of the new floor if available
    if (floor.zones && floor.zones.length > 0) {
      setSelectedZone(floor.zones[0]);
    } else {
      setSelectedZone(null);
    }
  };

  const getNPCBadgeColor = (mbti?: string) => {
    if (!mbti) return 'bg-zinc-800 text-zinc-400';
    if (mbti.startsWith('E')) return 'bg-rose-500/10 text-rose-400 border border-rose-500/20';
    return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
  };

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] flex flex-col font-sans" id="app-root-view">
      
      {/* 1. Global Announcement Ticker */}
      <div className="bg-[#efebdf] border-b border-[#1a1a1a]/10 py-2.5 px-4 text-center text-xs text-[#c5a059] font-mono tracking-[0.05em] font-medium" id="global-news-ticker">
        📢 <span className="font-bold text-[#c5a059]">온세미로 뉴스</span>: "묘르신" 길동이 1F 살롱 정각 점검 순찰 중 • 1201호 전 구역 출입 통제 안내 • 7F 주스 바 단백질 쉐이크 개시 완료
      </div>

      {/* 2. Primary Navigation Header */}
      <header className="border-b border-[#1a1a1a]/10 bg-[#f5f2ed]/90 backdrop-blur-md sticky top-0 z-40 px-4 py-4 sm:px-8 inline-flex flex-col sm:flex-row items-center justify-between gap-4" id="main-header">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#c5a059] shadow-md">
            <Building2 className="w-5 h-5 font-bold" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold tracking-[0.25em] text-[#1a1a1a] uppercase font-sans">
                ONSEMIRO BUILDING
              </h1>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20">
                OFFICIAL
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-semibold text-left">
              마포/성수 최고 프리미엄 라이프스타일 센터
            </p>
          </div>
        </div>

        {/* Dynamic header info */}
        <div className="flex items-center gap-4 text-xs font-mono" id="header-interactive-data">
          {/* Dynamic clock */}
          <div className="bg-[#efebdf]/85 px-3 py-1.5 rounded-full border border-[#1a1a1a]/10 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="text-zinc-800 font-bold tabular-nums">{time}</span>
            <span className="text-zinc-400">KST</span>
          </div>
          
          <button 
            onClick={() => {
              const resFloor = FLOOR_DETAILS.find(f => f.floor === '8F-11F');
              if (resFloor) handleSelectFloor(resFloor);
            }}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1a1a1a] hover:bg-[#c5a059] text-white font-bold text-[11px] tracking-wider transition-colors focus:outline-none uppercase"
          >
            <span>My Suite (8F-11F)</span>
          </button>
        </div>
      </header>

      {/* 3. Hero Visual Section */}
      <section className="relative overflow-hidden border-b border-[#1a1a1a]/10 bg-gradient-to-b from-[#efebdf]/45 to-[#f5f2ed] py-12 px-4 sm:px-8" id="welcome-hero-billboard">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-left">
            <span className="text-[#c5a059] text-[10px] font-mono font-bold uppercase tracking-[0.3em] block mb-2">
              🏆 Han River Breath Premium Lifestyle
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-display font-light text-[#1a1a1a] tracking-tight leading-tight">
              한강의 숨결을 곁에 둔<br />
              <span className="font-light italic text-[#c5a059]">
                프리미엄 인터랙티브 층별 안내
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-650 mt-4 leading-relaxed font-sans">
              성수동 한강공원과 직접 연결되는 상징적 빌딩. 도면의 각 층을 클릭하여 프라이빗 짐, 살롱 드 아드리앙의 럭셔리 공간 및 전속 원장들의 일상 테마를 깊이 있게 관람해 보세요.
            </p>
          </div>

          {/* Quick numbers/highlights */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto" id="hero-mini-grid">
            <div className="p-4.5 rounded-2xl bg-white border border-[#1a1a1a]/5 shadow-sm text-left">
              <span className="text-[9px] text-[#c5a059] font-mono tracking-widest font-bold block">7F PRIVATE GYM</span>
              <span className="text-base font-display font-normal italic text-[#1a1a1a] mt-1.5 block">이동진 원장</span>
              <span className="text-[10px] text-zinc-400 font-mono italic block mt-0.5">#한강뷰 #제육은단백질</span>
            </div>
            <div className="p-4.5 rounded-2xl bg-white border border-[#1a1a1a]/5 shadow-sm text-left">
              <span className="text-[9px] text-[#c5a059] font-mono tracking-widest font-bold block">1F DE ADRIEN</span>
              <span className="text-base font-display font-normal italic text-[#1a1a1a] mt-1.5 block">김지호 원장</span>
              <span className="text-[10px] text-zinc-400 font-mono italic block mt-0.5">#C_est_magnifique #앤티크</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN INTERACTIVE LAYOUT REGION */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8" id="interactive-framework">
        <div className="space-y-12">
          
          {/* STEP 1: Building Explorer Grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20 font-bold uppercase tracking-wider">Level 01</span>
              <h3 className="text-xl font-display font-light text-[#1a1a1a] tracking-tight">온세미로 빌딩 입체 층 스캐너</h3>
            </div>
            <BuildingModel 
              floors={FLOOR_DETAILS} 
              selectedFloor={selectedFloor} 
              onSelectFloor={handleSelectFloor} 
            />
          </div>

          {/* STEP 2: Selected Floor Showcase (Interactive Mapping Room) */}
          <section className="space-y-6 bg-white p-4 sm:p-8 rounded-3xl border border-[#1a1a1a]/5 shadow-sm" id="floor-visualizer-room">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#1a1a1a]/10 pb-6">
              <div className="flex gap-4 items-center">
                <span className="w-10 h-10 rounded-full bg-[#1a1a1a] text-[#c5a059] flex items-center justify-center text-sm font-bold font-mono">
                  {selectedFloor.floor}
                </span>
                <div className="text-left">
                  <h3 className="text-xl font-display font-light text-[#1a1a1a] flex items-center gap-2">
                    {selectedFloor.title}
                  </h3>
                  <p className="text-xs text-[#c5a059] font-mono tracking-widest uppercase mt-0.5">{selectedFloor.subtitle}</p>
                </div>
              </div>

              {/* Floor Owner Promotion Tag */}
              {selectedFloor.managerId && (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const mId = selectedFloor.managerId;
                      const char = CHARACTERS.find(c => c.id === mId);
                      if (char) setInstaCharacter(char);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20 text-xs rounded-xl font-semibold font-mono transition-all focus:outline-none"
                    id={`promo-insta-btn-${selectedFloor.floor}`}
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>원장 인스타그램 ({selectedFloor.instagramHandle})</span>
                  </button>
                </div>
              )}
            </div>

            {/* Floor description banner */}
            <div className="p-4 bg-[#efebdf]/40 rounded-2xl border border-[#1a1a1a]/5 text-xs text-zinc-700 leading-relaxed text-left">
              💡 {selectedFloor.description}
            </div>

            {/* Special info banner / hours */}
            {(selectedFloor.businessHours || selectedFloor.specialNote) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-[#fdfaf5] rounded-2xl border border-[#1a1a1a]/5" id="floor-hours-banner">
                {selectedFloor.businessHours && (
                  <div className="text-left text-xs text-zinc-650">
                    <span className="font-bold text-[#c5a059] font-mono block mb-1">🕙 이용 및 이용안내 시간</span>
                    {selectedFloor.businessHours}
                  </div>
                )}
                {selectedFloor.specialNote && (
                  <div className="text-left text-xs text-zinc-650">
                    <span className="font-bold text-[#c5a059] font-mono block mb-1">🐱 관리자 특이사항</span>
                    {selectedFloor.specialNote}
                  </div>
                )}
              </div>
            )}

            {/* Floor Interactive CAD Map render */}
            <InteractiveFloorMap 
              floorData={selectedFloor} 
              selectedZone={selectedZone}
              onZoneSelect={(zone) => setSelectedZone(zone)}
            />
          </section>

          {/* STEP 3: Resident Lock / Intercom Section */}
          <div className="grid grid-cols-1 gap-6" id="resident-keypads-row">
            <ResidentIntercom />
          </div>

          {/* STEP 4: Resident Dossier / Character Profile Hub */}
          <section className="space-y-4" id="residents-showcase">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20 font-bold uppercase tracking-wider">Level 02</span>
              <h3 className="text-xl font-display font-light text-[#1a1a1a] tracking-tight">온세미로 전속 입주민 인물 도감</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="dossier-grid">
              
              {/* Left Column: Character Switcher Buttons */}
              <div className="space-y-2 flex flex-col justify-start" id="char-buttons">
                {CHARACTERS.map((char) => {
                  const isActive = selectedChar.id === char.id;
                  return (
                    <button
                      key={char.id}
                      onClick={() => setSelectedChar(char)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 relative focus:outline-none ${
                        isActive 
                          ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059]' 
                          : 'border-[#1a1a1a]/5 bg-white text-zinc-500 hover:border-[#1a1a1a]/15 hover:bg-[#efebdf]/30 shadow-sm'
                      }`}
                      id={`btn-char-${char.id}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#fdfaf5] border border-[#1a1a1a]/10 flex items-center justify-center font-bold font-display text-sm shadow-sm">
                        {char.id === 'gildong' ? '🐱' : char.id === 'dongjin' ? '🏋️‍♂️' : char.id === 'jiho' ? '💇‍♂️' : '👥'}
                      </div>
                      <div className="flex-1 flex flex-col text-left">
                        <span className="font-bold text-sm text-zinc-900">{char.name}</span>
                        <span className="text-[10px] text-zinc-500 line-clamp-1">{char.role}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Center & Right Column: Interactive Character Bio display panel */}
              <div className="md:col-span-2 bg-white rounded-3xl border border-[#1a1a1a]/5 p-6 sm:p-8 flex flex-col justify-between min-h-[380px] relative overflow-hidden shadow-sm" id="char-dossier-panel">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#c5a059]/5 rounded-full pointer-events-none" />
                
                <div className="space-y-4" id="dossier-contents">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#1a1a1a]/10">
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-xl font-display font-light text-[#1a1a1a]">{selectedChar.name}</span>
                      {selectedChar.mbti && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${getNPCBadgeColor(selectedChar.mbti)}`}>
                          {selectedChar.mbti} • {selectedChar.enneagram}
                        </span>
                      )}
                    </div>
                    {selectedChar.instagramHandle !== '@Onsemiro_People' && (
                      <button
                        onClick={() => setInstaCharacter(selectedChar)}
                        className="self-start sm:self-center flex items-center gap-1.5 text-xs text-[#c5a059] hover:text-[#a78546] font-mono transition-colors focus:outline-none"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>{selectedChar.instagramHandle}_</span>
                      </button>
                    )}
                  </div>

                  {/* Character Meta specs */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono" id="char-meta-specs-box">
                    <div className="bg-[#fdfaf5] p-3 rounded-xl border border-[#1a1a1a]/5 text-left">
                      <span className="text-zinc-500 font-bold block mb-0.5 uppercase">🏢 주소 및 서열</span>
                      <span className="text-zinc-800">{selectedChar.residency}</span>
                    </div>
                    {selectedChar.height && (
                      <div className="bg-[#fdfaf5] p-3 rounded-xl border border-[#1a1a1a]/5 text-left">
                        <span className="text-zinc-500 font-bold block mb-0.5 uppercase">📏 신체 스펙</span>
                        <span className="text-zinc-800">{selectedChar.height} • {selectedChar.age > 0 ? `${selectedChar.age}세` : '미공개'}</span>
                      </div>
                    )}
                  </div>

                  {/* Visual detail */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">🎨 이미지 분위기 묘사</span>
                    <p className="text-xs text-zinc-700 leading-relaxed bg-[#fdfaf5] p-3.5 rounded-xl border border-[#1a1a1a]/5 italic">
                      " {selectedChar.visualBio} "
                    </p>
                  </div>

                  {/* Complete Bio */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">📝 상세 신상 설명</span>
                    <p className="text-xs text-zinc-700 leading-relaxed pl-1.5">
                      {selectedChar.textBio}
                    </p>
                  </div>

                  {/* Daily Routine Schedule with cute timers */}
                  {selectedChar.routine.length > 0 && (
                    <div className="space-y-2 text-left" id="routine-schedule-container">
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">🕒 일일 활동 시간표</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {selectedChar.routine.map((act, index) => (
                          <div key={index} className="flex gap-2 items-center bg-[#fdfaf5] p-2 rounded-lg border border-[#1a1a1a]/5">
                            <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full shrink-0" />
                            <span className="text-zinc-700 line-clamp-1">{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sub NPCs collection specific layout */}
                  {selectedChar.id === 'sub_npcs' && (
                    <div className="p-4 bg-[#fdfaf5] rounded-xl border border-[#1a1a1a]/5 space-y-3" id="sub-npcs-detailed-grid">
                      <h5 className="text-xs font-bold text-zinc-800">🏢 주요 입점 크루 및 이웃들</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-left">
                        <div>
                          <p className="font-bold text-zinc-900">✂️ 윤아름 (29, 디자이너)</p>
                          <p className="text-zinc-650">지호 살롱의 특수 빗 기술 수석 어시스턴트.</p>
                        </div>
                        <div>
                          <p className="font-bold text-zinc-900">🐕 박우진 (23, 막내)</p>
                          <p className="text-zinc-650">헤어 숍 보조원. 동진 원장님 덤벨에 극도 동경 품음.</p>
                        </div>
                        <div>
                          <p className="font-bold text-zinc-900">🍖 정현수 (28, 체육관 우수견)</p>
                          <p className="text-zinc-650">동진 원장의 헬스장 단골. 과잉 교정 욕망의 고스펙.</p>
                        </div>
                        <div>
                          <p className="font-bold text-zinc-900">👵 백반집 이모 (50대)</p>
                          <p className="text-zinc-650">2F 식당 대장 서열 1위. 동진에게 특곱빼기 고기 선물.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Simulated conversations */}
                {selectedChar.dialogueLines.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[#1a1a1a]/10" id="dialogue-block">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-2 text-left">🗣️ 대화의 톤앤매너 예시</span>
                    <div className="bg-[#fdfaf5] p-3 rounded-xl border border-[#1a1a1a]/5 text-xs italic text-zinc-800 leading-relaxed text-left flex gap-1.5 items-start">
                      <span className="text-[#c5a059] font-bold text-lg leading-none">“</span>
                      <p className="flex-1 text-zinc-750">
                        {selectedChar.dialogueLines[0]}
                      </p>
                      <span className="text-[#c5a059] font-bold text-lg leading-none">”</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 5. GORGEOUS FOOTER */}
      <footer className="mt-16 border-t border-[#1a1a1a]/10 bg-[#efebdf] pt-12 pb-10 px-4 sm:px-8 text-zinc-500 text-xs" id="main-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6" id="footer-inner-content">
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-bold tracking-[0.1em] text-zinc-800 text-sm uppercase">Onsemiro Building Floor Guide</h4>
            <p className="text-zinc-500">서울특별시 마포구 온세미로길 1 (성수동 한강공원 가벽 연결로 배후)</p>
          </div>
          <div className="flex gap-4 font-mono text-[11px]" id="footer-links">
            <span className="hover:text-zinc-800 transition-colors cursor-pointer">이용약관</span>
            <span className="text-zinc-300">|</span>
            <span className="hover:text-zinc-800 transition-colors cursor-pointer">개인정보처리방침</span>
            <span className="text-zinc-300">|</span>
            <span className="hover:text-zinc-800 transition-colors cursor-pointer">입주문의: 02-300-3000</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#1a1a1a]/5 mt-6 pt-6 text-center text-[10px] text-zinc-500 font-mono">
          &copy; {new Date().getFullYear()} ONSEMIRO BUILDING. All rights reserved. Created in Premium AI-Styled Luxury Workspace.
        </div>
      </footer>

      {/* INTERACTIVE INSTAGRAM PHONE APP POPUP */}
      <AnimatePresence>
        {instaCharacter && (
          <InstagramMockup 
            character={instaCharacter} 
            onClose={() => setInstaCharacter(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
