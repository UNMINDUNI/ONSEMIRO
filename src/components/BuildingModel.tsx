import React from 'react';
import { motion } from 'motion/react';
import { FloorData } from '../types';
import { ChevronRight, Shield, Award, Users, Utensils, Scissors, Sparkles, Building2 } from 'lucide-react';

interface BuildingModelProps {
  floors: FloorData[];
  selectedFloor: FloorData;
  onSelectFloor: (floor: FloorData) => void;
}

export default function BuildingModel({ floors, selectedFloor, onSelectFloor }: BuildingModelProps) {
  // Map floor codes to icons for visual representation
  const getFloorIcon = (floorCode: string) => {
    switch (floorCode) {
      case '12F': return <Award className="w-4 h-4 text-amber-400" />;
      case '8F-11F': return <Building2 className="w-4 h-4 text-sky-400" />;
      case '7F': return <Sparkles className="w-4 h-4 text-emerald-400" />;
      case '3F-6F': return <Users className="w-4 h-4 text-purple-400" />;
      case '2F': return <Utensils className="w-4 h-4 text-orange-400" />;
      case '1F': return <Scissors className="w-4 h-4 text-yellow-400" />;
      default: return <Shield className="w-4 h-4 text-gray-400" />;
    }
  };

  const getFloorBadgeColor = (floorCode: string, isSelected: boolean) => {
    if (isSelected) {
      switch (floorCode) {
        case '12F': return 'bg-[#1a1a1a] text-[#c5a059] border-[#c5a059]/40';
        case '8F-11F': return 'bg-sky-50 text-sky-700 border-sky-300';
        case '7F': return 'bg-[#c5a059]/15 text-[#c5a059] border-[#c5a059]/35';
        case '3F-6F': return 'bg-purple-50 text-purple-700 border-purple-300';
        case '2F': return 'bg-orange-50 text-orange-700 border-orange-300';
        case '1F': return 'bg-yellow-50 text-amber-700 border-amber-300';
        default: return 'bg-gray-100 text-gray-700 border-gray-300';
      }
    }
    return 'bg-[#efebdf]/60 text-zinc-500 border-[#1a1a1a]/5';
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 items-stretch" id="building-model-container">
      {/* Visual Building Diagram/Slices */}
      <div className="flex-1 min-h-[500px] bg-white rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden border border-[#1a1a1a]/5 shadow-sm" id="diagram-inner">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-tr from-[#c5a059]/10 to-transparent pointer-events-none" />
        
        {/* Header inside Diagram */}
        <div className="mb-4 z-10 text-left">
          <div className="flex items-center gap-2 text-[#c5a059] text-[10px] font-mono tracking-[0.2em] uppercase font-bold">
            <span>Corporate Tower Outline</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
          </div>
          <h3 className="text-xl font-display font-light text-[#1a1a1a] tracking-tight mt-1">
            온세미로 타워 실시간 엘리베이터 뷰
          </h3>
        </div>

        {/* Building 3D-like Schematic Stack */}
        <div className="flex flex-col gap-2.5 my-4 pr-2 select-none relative z-10" id="floor-slices-stack">
          {floors.map((item) => {
            const isSelected = selectedFloor.floor === item.floor;
            return (
              <motion.div
                key={item.floor}
                onClick={() => onSelectFloor(item)}
                id={`slice-${item.floor}`}
                className={`group relative cursor-pointer rounded-2xl border p-3.5 transition-all duration-300 flex items-center justify-between ${
                  isSelected
                    ? 'border-[#c5a059] bg-[#c5a059]/10 shadow-sm translate-x-2'
                    : 'border-[#1a1a1a]/5 bg-[#fdfaf5] hover:border-[#1a1a1a]/15 hover:bg-[#efebdf]/20 hover:translate-x-1'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Left Colored Accent Bar */}
                <div
                  className={`absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full transition-all duration-300 ${
                    isSelected ? 'bg-[#c5a059] h-full !top-0 !bottom-0' : 'bg-transparent group-hover:bg-zinc-400'
                  }`}
                />

                <div className="flex items-center gap-3.5 pl-2">
                  {/* Floor indicator badge */}
                  <span className={`w-18 px-2.5 py-1 text-center font-mono text-xs font-bold rounded-lg border uppercase transition-colors duration-300 ${getFloorBadgeColor(item.floor, isSelected)}`}>
                    {item.floor}
                  </span>

                  {/* Floor titles */}
                  <div className="flex flex-col text-left">
                    <span className={`font-mono text-sm tracking-wider font-bold transition-colors ${isSelected ? 'text-[#c5a059]' : 'text-zinc-800'}`}>
                      {item.title}
                    </span>
                    <span className="text-xs text-zinc-500 line-clamp-1 group-hover:text-zinc-650 transition-colors">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#efebdf]/50 text-zinc-700">
                    {getFloorIcon(item.floor)}
                    {item.floor === '7F' || item.floor === '1F' ? '상세도 정보' : '정보'}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'text-[#c5a059] translate-x-0.5' : 'text-zinc-400'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Building Base Footer bar */}
        <div className="mt-2 pt-3 border-t border-[#1a1a1a]/10 flex justify-between items-center text-zinc-500 text-[11px] font-mono">
          <span>📍 서울 마포구 온세미로길 1</span>
          <span className="text-[#c5a059] font-bold">ONSEMIRO BUILDING Corp.</span>
        </div>
      </div>

      {/* Building Stats Mini Panel / Info Grid */}
      <div className="w-full md:w-80 flex flex-col gap-4" id="stats-panel-layout">
        {/* Real Estate Premium Pitch Card */}
        <div className="bg-white rounded-3xl p-6 border border-[#1a1a1a]/5 relative overflow-hidden flex-1 flex flex-col justify-between shadow-sm" id="pitch-card">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#c5a059]/5 rounded-full pointer-events-none" />
          
          <div className="text-left">
            <span className="px-2.5 py-1 rounded inline-block text-[10px] font-semibold font-mono tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/20 mb-3 uppercase">
              ONSEMIRO Core Value
            </span>
            <h4 className="text-lg font-display text-zinc-900 font-light mb-2 leading-snug">
              성수동 프리미엄<br />
              <span className="italic text-[#c5a059]">오션 브리징 라이프</span>
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-650 leading-relaxed">
              <p>성수동 한강공원과 직접 연결되는 마포의 심장에 우뚝 선 단 한 채의 예술적 건물.</p>
              <div className="w-full h-px bg-[#1a1a1a]/15 my-2" />
              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500 font-mono">대지 면적</span>
                <span className="text-zinc-800 font-bold">984.45 ㎡</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500 font-mono">용적률/건폐율</span>
                <span className="text-zinc-800 font-bold">799.4% / 54.2%</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500 font-mono">주차 대수</span>
                <span className="text-zinc-800 font-bold">각 세대 기본 2대</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-[#fdfaf5] rounded-xl border border-[#1a1a1a]/5 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <div className="text-[11px] font-mono text-zinc-600 leading-none text-left">
              <span className="text-zinc-850 font-bold">입주율 100%</span> • 공실 없음
            </div>
          </div>
        </div>

        {/* Resident Sound Sensories / Highlight Info */}
        <div className="bg-white rounded-3xl p-6 border border-[#1a1a1a]/5 border-l-2 border-l-[#c5a059] shadow-sm">
          <h5 className="text-xs font-mono text-[#c5a059] uppercase tracking-widest mb-3 font-bold text-left">입주민 감각 디테일</h5>
          <div className="text-xs text-zinc-650 space-y-2 leading-relaxed text-left">
            <div className="flex items-start gap-2 bg-[#fdfaf5] p-3 rounded-xl border border-[#1a1a1a]/5">
              <span className="text-[#c5a059] font-bold shrink-0 font-mono text-xs">12F</span>
              <p>지문 스캐너 <strong className="text-zinc-900">"띡-"</strong> 소리 후 묵직한 오토 모터음 <strong className="text-zinc-900">"위잉-철컥"</strong>이 지키는 완벽 보안 구역.</p>
            </div>
            <div className="flex items-start gap-2 bg-[#fdfaf5] p-3 rounded-xl border border-[#1a1a1a]/5">
              <span className="text-[#c5a059] font-bold shrink-0 font-mono text-xs">811F</span>
              <p>맨발로 거닐면 <strong className="text-zinc-900">"찰박찰박"</strong> 소리가 울리는 이태리산 고급 무광 대리석 바닥.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
