import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloorData, ZoneDetail, Character } from '../types';
import { Sparkles, MapPin, Info, Coffee, ShoppingBag, Waves, Heart, User, Dumbbell, Flower } from 'lucide-react';
import { CHARACTERS } from '../data';

interface InteractiveFloorMapProps {
  floorData: FloorData;
  onZoneSelect?: (zone: ZoneDetail) => void;
  selectedZone: ZoneDetail | null;
}

export default function InteractiveFloorMap({ floorData, onZoneSelect, selectedZone }: InteractiveFloorMapProps) {
  const [hoveredZone, setHoveredZone] = useState<ZoneDetail | null>(null);

  // Filter out any character related to the selected floor or zone to offer cute interaction dialogues
  const findCharacter = (role: string): Character | undefined => {
    return CHARACTERS.find(c => c.id === role);
  };

  const getZoneIcon = (zoneId: string, isSelected: boolean = false) => {
    const iconColor = isSelected ? 'text-[#c5a059]' : '';
    switch (zoneId) {
      case 'cardio': return <Heart className={`w-5 h-5 ${iconColor || 'text-rose-600'}`} />;
      case 'weight': return <Dumbbell className={`w-5 h-5 ${iconColor || 'text-emerald-700'}`} />;
      case 'yoga': return <Flower className={`w-5 h-5 ${iconColor || 'text-teal-700'}`} />;
      case 'juice_bar': return <Coffee className={`w-5 h-5 ${iconColor || 'text-amber-700'}`} />;
      case 'amenities': return <Waves className={`w-5 h-5 ${iconColor || 'text-sky-600'}`} />;
      case 'reception': return <User className={`w-5 h-5 ${iconColor || 'text-zinc-700'}`} />;
      case 'main_styling': return <Sparkles className={`w-5 h-5 ${iconColor || 'text-[#c5a059]'}`} />;
      case 'vip_room': return <Sparkles className={`w-5 h-5 ${iconColor || 'text-indigo-700'}`} />;
      case 'coffee_stand': return <Coffee className={`w-5 h-5 ${iconColor || 'text-orange-700'}`} />;
      case 'retail_curation': return <ShoppingBag className={`w-5 h-5 ${iconColor || 'text-purple-700'}`} />;
      default: return <Info className={`w-5 h-5 ${iconColor || 'text-zinc-500'}`} />;
    }
  };

  const isF1orF7 = floorData.floor === '1F' || floorData.floor === '7F';

  if (!isF1orF7) {
    // If it's another floor, just show a simpler layout with lists of its components
    return (
      <div className="w-full flex flex-col gap-4 text-left" id="simple-floor-map">
        <h4 className="text-xs font-mono text-[#c5a059] uppercase tracking-[0.2em] px-1 font-bold">
          📊 주요 시설 요약 및 안내도 ({floorData.floor})
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {floorData.zones.map((zone) => (
            <div
              key={zone.id}
              className="p-6 rounded-3xl border border-[#1a1a1a]/5 bg-white hover:bg-[#fdfaf5]/50 transition-colors flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-[10px] font-mono text-[#c5a059] tracking-widest block mb-1 uppercase font-bold">
                  {zone.englishName}
                </span>
                <h5 className="text-sm font-semibold text-zinc-900 mb-2">{zone.name}</h5>
                <p className="text-xs text-[#1a1a1a]/80 leading-relaxed">{zone.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1a1a1a]/5 text-xs text-zinc-400 italic">
                {zone.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Draw simulated graphic CAD blueprint with grids and hotspots
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch" id="interactive-blueprint-view">
      
      {/* 2D Blueprint Graphic Canvas */}
      <div className="flex-1 bg-white rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[420px] border border-[#1a1a1a]/5 shadow-sm" id="blueprint-canvas">
        {/* Architectural grid overlay - delicate gold-tinted pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6 z-10 text-left">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#c5a059] font-mono tracking-widest uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-ping" />
              <span>Architectural Blueprint CAD</span>
            </div>
            <h4 className="text-xl font-display font-light text-zinc-900 mt-1">
              {floorData.floor} {floorData.detailMapTitle}
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#efebdf]/50 border border-[#1a1a1a]/5 text-zinc-700 rounded font-semibold">
            SCALE: 1/150 • N
          </span>
        </div>

        {/* Blueprint Interactive Arena */}
        <div className="relative flex-1 w-full bg-[#faf6eb] rounded-2xl border border-[#c5a059]/20 overflow-hidden flex items-center justify-center min-h-[280px] shadow-inner" id="blueprint-floor-shapes">
          
          {/* Compass Rose decoration */}
          <div className="absolute bottom-4 right-4 w-12 h-12 border border-[#c5a059]/20 rounded-full flex items-center justify-center text-[10px] font-mono text-[#c5a059]/40 select-none pointer-events-none">
            <span className="absolute top-0 text-[8px] font-bold">N</span>
            <div className="w-0.5 h-6 bg-[#c5a059]/25" />
            <div className="w-6 h-0.5 bg-[#c5a059]/25 absolute" />
          </div>

          <div className="w-full h-full relative" id="blueprint-grid-wrapper">
            {/* Draw Floor Compartments depending on F1 vs F7 */}
            {floorData.floor === '7F' ? (
              // 7F WELLNESS & GYM LAYOUT
              <div className="absolute inset-4 border border-[#c5a059]/10 rounded-lg flex flex-col justify-between p-2">
                {/* Visual Walls for Cardio, Weight, Yoga */}
                <div className="grid grid-cols-3 h-3/5 gap-2">
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'cardio' ? 'bg-[#c5a059]/5 border-[#c5a059]/40 shadow-inner' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">CARDIO ZONE</span>
                    <Heart className="w-4 h-4 text-[#c5a059]/10 mt-1" />
                  </div>
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'weight' ? 'bg-[#c5a059]/5 border-[#c5a059]/40 shadow-inner' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">WEIGHT FREE</span>
                    <Dumbbell className="w-4 h-4 text-[#c5a059]/10 mt-1" />
                  </div>
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'yoga' ? 'bg-[#c5a059]/5 border-[#c5a059]/40 shadow-inner' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">YOGA BALCONY</span>
                    <Flower className="w-4 h-4 text-[#c5a059]/10 mt-1" />
                  </div>
                </div>

                {/* Bottom line: Amenities / Juice Bar / Hall */}
                <div className="grid grid-cols-3 h-1/3 gap-2 mt-2">
                  <div className="border border-dashed border-[#c5a059]/10 bg-white/40 rounded flex items-center justify-center">
                    <span className="text-[8px] font-mono text-zinc-450 font-sans">RECEPTION LOBBY</span>
                  </div>
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'juice_bar' ? 'bg-[#c5a059]/5 border-[#c5a059]/40' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">JUICE BAR</span>
                  </div>
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'amenities' ? 'bg-[#c5a059]/5 border-[#c5a059]/40' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">LORE AMENITIES</span>
                  </div>
                </div>
              </div>
            ) : (
              // 1F SALON DE ADRIEN LAYOUT
              <div className="absolute inset-4 border border-[#c5a059]/10 rounded-lg flex flex-col justify-between p-2">
                {/* Main Styling line */}
                <div className="grid grid-cols-3 h-3/5 gap-2">
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'main_styling' ? 'bg-[#c5a059]/5 border-[#c5a059]/40' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">STYLING BOOTH</span>
                  </div>
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'coffee_stand' ? 'bg-[#c5a059]/5 border-[#c5a059]/40' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">COFFEE BAR</span>
                  </div>
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'retail_curation' ? 'bg-[#c5a059]/5 border-[#c5a059]/40' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">RETAIL DISPLAY</span>
                  </div>
                </div>

                {/* Reception & VIP */}
                <div className="grid grid-cols-2 h-1/3 gap-2 mt-2">
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'reception' ? 'bg-[#c5a059]/5 border-[#c5a059]/40' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">MAIN ATRIUM RECEP</span>
                  </div>
                  <div className={`border border-dashed transition-all duration-300 rounded flex flex-col justify-center items-center ${selectedZone?.id === 'vip_room' ? 'bg-[#c5a059]/5 border-[#c5a059]/40' : 'border-[#c5a059]/10 bg-white/40'}`}>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold font-sans">LOUNGE SALON VIP</span>
                  </div>
                </div>
              </div>
            )}

            {/* Interactive Pins Floating Above */}
            {floorData.zones.map((zone) => {
              const rect = zone.coordinateMark || { x: 50, y: 50 };
              const isSelected = selectedZone?.id === zone.id;
              const isHovered = hoveredZone?.id === zone.id;

              return (
                <div
                  key={zone.id}
                  className="absolute pointer-events-auto"
                  style={{ left: `${rect.x}%`, top: `${rect.y}%`, transform: 'translate(-50%, -50%)' }}
                  onMouseEnter={() => setHoveredZone(zone)}
                  onMouseLeave={() => setHoveredZone(null)}
                >
                  <button
                    onClick={() => onZoneSelect && onZoneSelect(zone)}
                    className="relative focus:outline-none"
                    id={`btn-pin-${zone.id}`}
                  >
                    {/* Ring highlight animation */}
                    {isSelected && (
                      <span className="absolute -inset-4 bg-[#c5a059]/20 border border-[#c5a059] rounded-full animate-ping pointer-events-none" />
                    )}

                    {/* Pin button */}
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer border ${
                        isSelected
                          ? 'bg-[#1a1a1a] border-[#c5a059] text-[#c5a059] scale-110 shadow-[#c5a059]/20'
                          : isHovered
                          ? 'bg-[#c5a059] border-[#c5a059] text-white scale-105 shadow-sm'
                          : 'bg-white border-[#1a1a1a]/10 text-zinc-700'
                      }`}
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      {getZoneIcon(zone.id, isSelected)}
                    </motion.div>

                    {/* Popover label on hover */}
                    <AnimatePresence>
                      {(isHovered || isSelected) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 bg-[#1a1a1a] border border-[#c5a059]/30 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md text-center pointer-events-none z-20"
                        >
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-t-[6px] border-t-[#1a1a1a] border-x-[6px] border-x-transparent" />
                          <span className="text-[9px] font-mono text-[#c5a059] uppercase tracking-widest block font-bold leading-none mb-1">
                            {zone.englishName}
                          </span>
                          <span className="text-xs font-medium leading-tight block text-zinc-100 font-sans">
                            {zone.name}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* CAD Legend info */}
        <div className="mt-4 pt-3 border-t border-[#1a1a1a]/10 flex justify-between items-center text-[10px] font-mono text-zinc-500">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#c5a059]" /> 선택됨</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-white border border-[#1a1a1a]/10" /> 일반 구역</span>
          </div>
          <span>ONSEMIRO CAD MAP v1.02</span>
        </div>
      </div>

      {/* Zone Details / Character Conversation Panel */}
      <div className="w-full lg:w-96 flex flex-col gap-4 text-left" id="zone-interaction-sidebar">
        
        {/* Selected Zone Detail */}
        {selectedZone ? (
          <motion.div
            key={selectedZone.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-[#1a1a1a]/5 shadow-sm"
            id="zone-info-card"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059]">
                  {selectedZone.englishName}
                </span>
                <span className="text-xs font-mono text-zinc-400">온세미로 {floorData.floor}</span>
              </div>
              
              <h3 className="text-lg font-display font-light text-zinc-900 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#fdfaf5] border border-[#1a1a1a]/5 flex items-center justify-center">
                  {getZoneIcon(selectedZone.id, false)}
                </span>
                {selectedZone.name}
              </h3>
              
              <p className="text-xs text-zinc-650 leading-relaxed bg-[#fdfaf5] p-4 rounded-2xl border border-[#1a1a1a]/5 mb-5">
                {selectedZone.description}
              </p>

              <div className="space-y-3">
                <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">📋 세부 운영 및 공간 특징</h5>
                <p className="text-xs text-zinc-650 leading-relaxed whitespace-pre-line pl-3 border-l-2 border-[#c5a059]">
                  {selectedZone.details}
                </p>
              </div>
            </div>

            {/* If there's an active character dialogue for this zone */}
            {floorData.managerId && findCharacter(floorData.managerId) && (
              <div className="mt-6 pt-4 border-t border-[#1a1a1a]/10">
                <div className="flex gap-3 items-start p-4 bg-[#c5a059]/5 border border-[#c5a059]/15 rounded-2xl" id="character-comment-bubble">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#c5a059]/40 flex items-center justify-center font-bold text-xs text-[#c5a059] shrink-0 font-display">
                    {findCharacter(floorData.managerId)?.name.substring(0, 1)}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-[#c5a059] font-mono tracking-wider font-bold block leading-none mb-1.5 uppercase">
                      {findCharacter(floorData.managerId)?.name} 원장의 한마디
                    </span>
                    <p className="text-xs text-zinc-800 italic leading-relaxed">
                      "{(findCharacter(floorData.managerId)?.dialogueLines[
                        selectedZone.id === 'cardio' || selectedZone.id === 'reception' ? 1 : 0
                      ]) || "반갑습니다! 온세미로 건물 오신 것을 축하해요."}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="flex-1 bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center text-zinc-400 border border-[#1a1a1a]/5 shadow-sm min-h-[300px]" id="no-zone-selected">
            <div className="w-12 h-12 rounded-full bg-[#fdfaf5] border border-[#1a1a1a]/5 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#c5a059] animate-bounce" />
            </div>
            <h5 className="text-sm font-semibold mb-1 text-zinc-900">상세 안내도 로드 클릭</h5>
            <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
              설계도 도면의 각 등대 모양 핀을 누르시면 온세미로 전용 존의 세부 사진 및 전속 캐릭터들의 대화와 꿀팁을 즐길 수 있습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
