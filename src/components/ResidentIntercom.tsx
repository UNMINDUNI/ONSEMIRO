import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Key, Fingerprint, Lock, Unlock, PhoneCall, Volume2, UserCheck, BellRing } from 'lucide-react';

export default function ResidentIntercom() {
  const [passcode, setPasscode] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'ERROR' | 'SUCCESS_1201' | 'SUCCESS_1202' | 'SUCCESS_RESIDENT'>('IDLE');
  const [log, setLog] = useState<string[]>(['[SYSTEM]: 온세미로 로비 통합 인터콤 활성화']);
  const [playAudioType, setPlayAudioType] = useState<string | null>(null);

  const addLog = (msg: string) => {
    setLog(prev => [msg, ...prev.slice(0, 7)]);
  };

  const handleKeyPress = (num: string) => {
    if (status !== 'IDLE' && status !== 'ERROR') return;
    setStatus('IDLE');
    // Mimic the "띡-" keypad sound
    triggerSound('띡-');
    if (passcode.length < 4) {
      setPasscode(prev => prev + num);
    }
  };

  const triggerSound = (text: string) => {
    setPlayAudioType(text);
    setTimeout(() => setPlayAudioType(null), 800);
  };

  const clearCode = () => {
    triggerSound('띡-');
    setPasscode('');
    setStatus('IDLE');
  };

  const checkPasscode = () => {
    triggerSound('띡-');
    addLog(`[PASSCODE]: ${passcode} 번호 입력 시도`);
    if (passcode === '1201') {
      setStatus('SUCCESS_1201');
      addLog('🔓 [1201호]: 번호 합치 판정. 슬라이딩 글라스 락 권한 획득');
      triggerSound('위잉-철컥- (모터 풀 해제)');
    } else if (passcode === '1202') {
      setStatus('SUCCESS_1202');
      addLog('🔓 [1202호]: 번호 합치 판정. 프렌치 앤티크 헤드 도어 락 해제');
      triggerSound('위잉-철컥- (모터 풀 해제)');
    } else if (passcode === '8811' || passcode === '1004') {
      setStatus('SUCCESS_RESIDENT');
      addLog('🔓 [U호실 입주민 구역]: 스마트 월패드 오토 버퍼링 승인');
      triggerSound('위잉-철컥- (모터 풀 해제)');
    } else {
      setStatus('ERROR');
      addLog('❌ [경고]: 불명확한 마스터 키패드 코드 입력');
      setPasscode('');
    }
  };

  const handleFingerprintScan = () => {
    setStatus('SCANNING');
    addLog('🔍 [FINGERPRINT]: 입주민 전용 생체 정보 수집 중...');
    triggerSound('띡- (정밀 스캔 중)');
    
    setTimeout(() => {
      // Pick a random success category or simulate based on last keypress or simply resident access
      setStatus('SUCCESS_RESIDENT');
      addLog('🔓 [VERIFIED]: 아드리앙 빌딩 전속 등기 지문 확인 완료');
      triggerSound('위잉-철컥- (모터 풀 해제)');
    }, 1500);
  };

  return (
    <div className="w-full glass-panel rounded-2xl p-6 relative overflow-hidden" id="intercom-widget">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-gold-500/50 to-blue-500/50" />
      
      <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono tracking-widest text-[#deb45e] uppercase mb-4">
        <Shield className="w-4 h-4 text-gold-400" />
        <span>Sense Intercom & Lock Simulator</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Column: Intercom UI */}
        <div className="flex flex-col justify-between bg-zinc-950/70 p-4 rounded-xl border border-zinc-900/60" id="intercom-panel">
          
          {/* Display screen */}
          <div className="w-full bg-zinc-900/90 border border-zinc-800 rounded-lg p-3.5 mb-4 text-center relative overflow-hidden">
            <span className="text-[9px] font-mono text-zinc-500 tracking-wider absolute top-1 left-2">
              ONSEMIRO ACCESS LOCK v3.0
            </span>
            
            {/* Pulsing indicator */}
            <span className={`w-2 h-2 rounded-full absolute top-1.5 right-2 ${
              status === 'SUCCESS_1201' || status === 'SUCCESS_1202' || status === 'SUCCESS_RESIDENT' 
                ? 'bg-emerald-500 animate-pulse' 
                : status === 'ERROR' ? 'bg-rose-500' : 'bg-gold-500 animate-pulse'
            }`} />

            <div className="my-2.5 font-mono text-2xl tracking-[0.2em] font-semibold text-zinc-100">
              {passcode.padEnd(4, '•')}
            </div>

            {/* Sub text status */}
            <div className="text-xs font-mono min-h-[1.25rem]">
              {status === 'IDLE' && <span className="text-zinc-500">지정된 4자리 코드를 입력해 주세요</span>}
              {status === 'SCANNING' && <span className="text-amber-400 animate-pulse">지문 판독 센서 작동 중...</span>}
              {status === 'ERROR' && <span className="text-rose-400 font-bold">비정상적인 접근 코드</span>}
              {status === 'SUCCESS_1201' && <span className="text-emerald-400 font-bold">1201호 (이동진 원장) 환영합니다</span>}
              {status === 'SUCCESS_1202' && <span className="text-emerald-400 font-bold">1202호 (김지호 원장) Bienvenue!</span>}
              {status === 'SUCCESS_RESIDENT' && <span className="text-emerald-400 font-bold">입주 세대 U 환영합니다 (찰박찰박)</span>}
            </div>
          </div>

          {/* Keypad Grid (3x4) */}
          <div className="grid grid-cols-3 gap-2 mx-auto max-w-[200px]" id="keypad-panel">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
              <button
                key={num}
                onClick={() => handleKeyPress(num)}
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/60 flex items-center justify-center font-mono text-base font-bold text-zinc-200 active:scale-95 transition-all focus:outline-none"
              >
                {num}
              </button>
            ))}
            <button
              onClick={clearCode}
              className="w-12 h-12 rounded-full bg-zinc-900/30 hover:bg-zinc-800/80 border border-zinc-800/30 flex items-center justify-center font-mono text-xs font-semibold text-zinc-500 active:scale-95 transition-all focus:outline-none"
            >
              C
            </button>
            <button
              onClick={() => handleKeyPress('0')}
              className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/60 flex items-center justify-center font-mono text-base font-bold text-zinc-200 active:scale-95 transition-all focus:outline-none"
            >
              0
            </button>
            <button
              onClick={checkPasscode}
              disabled={passcode.length < 4}
              className="w-12 h-12 rounded-full bg-emerald-950 hover:bg-emerald-900 border border-emerald-800/60 flex items-center justify-center font-mono text-xs font-bold text-emerald-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all focus:outline-none"
            >
              종료
            </button>
          </div>

          <div className="mt-4 flex gap-2 w-full justify-stretch">
            {/* Fingerprint scan trigger */}
            <button
              onClick={handleFingerprintScan}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 rounded-xl font-mono text-xs text-zinc-300 active:translate-y-0.5 transition-all focus:outline-none"
            >
              <Fingerprint className="w-4 h-4 text-cyan-400" />
              <span>지문 감지기</span>
            </button>
          </div>
        </div>

        {/* Right Column: Lore Logs/Sensory Outcome Card */}
        <div className="flex flex-col justify-between" id="lore-log-column">
          <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-900/80 flex-1 flex flex-col justify-between" id="response-terminal">
            <div>
              <span className="text-[10px] font-mono text-gold-400 tracking-wider block mb-2 uppercase">
                ⚙️ SENSORY FEEDBACK LOGS
              </span>
              <div className="font-mono text-[11px] text-zinc-400 space-y-1.5 h-[160px] overflow-y-auto pr-2 flex flex-col-reverse justify-end">
                {log.map((line, idx) => (
                  <div key={idx} className="line-clamp-2">
                    <span className="text-zinc-600">[{7 - idx}]</span> {line}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick tips for user */}
            <div className="mt-3 bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-850 text-[11px] text-zinc-500 leading-relaxed">
              <span className="text-gold-400 font-bold font-mono">💡 가이드 코드</span>: 1201호(이동진), 1202호(김지호), 1004호(8-11F U거주지). 번호 입력 후 <span className="text-zinc-300 font-bold">"종료"</span> 버튼 클릭 또는 <span className="text-zinc-300 font-bold">지문 감지기</span> 스캔 시 묵직한 오토 모터 벨소리와 음향이 가상으로 지원됩니다.
            </div>
          </div>

          {/* Graphical Acoustic Visualizer */}
          <AnimatePresence>
            {playAudioType && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-3 p-3 bg-gold-950/20 border border-gold-800/30 rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-gold-400 animate-bounce" />
                  <span className="text-xs font-mono text-zinc-300">Acoustic Effect:</span>
                  <span className="text-xs font-mono font-bold text-gold-400">{playAudioType}</span>
                </div>
                <div className="flex gap-0.5 items-end h-3">
                  <span className="w-0.5 bg-gold-400 animate-pulse h-1" />
                  <span className="w-0.5 bg-gold-400 animate-pulse h-3" />
                  <span className="w-0.5 bg-gold-400 animate-pulse h-2" />
                  <span className="w-0.5 bg-gold-400 animate-pulse h-3" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Access Door Lock Open States */}
      <AnimatePresence>
        {(status.startsWith('SUCCESS_')) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4.5 bg-emerald-950/20 border border-emerald-900/30 rounded-xl text-center flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-800">
                <Unlock className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-left">
                <h5 className="text-sm font-semibold text-emerald-300">
                  {status === 'SUCCESS_1201' && '1201호 전용 공간 오픈 (동진 / 블랙그레이 홈짐)'}
                  {status === 'SUCCESS_1202' && '1202호 전용 공간 오픈 (지호 / 딥우드 이탈리안 아틀리에)'}
                  {status === 'SUCCESS_RESIDENT' && '8F-11F 오피스텔 존 (지문 오토 세팅 완료)'}
                </h5>
                <p className="text-xs text-emerald-500/80 mt-0.5">
                  {status === 'SUCCESS_1201' && '홈지기가 길동이 고양이 전용 주스 캔을 들고 마중을 나옵니다.'}
                  {status === 'SUCCESS_1202' && '지호 원장이 선셋 한강을 보며 크리스탈 와인잔을 채웁니다.'}
                  {status === 'SUCCESS_RESIDENT' && '맨발로 대리석에 발 디디는 "찰박찰박" 시원한 소리가 사방에 메아리칩니다.'}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setStatus('IDLE');
                setPasscode('');
              }}
              className="px-4 py-1.5 text-xs font-mono rounded-lg border border-emerald-800 hover:bg-emerald-950/50 text-emerald-300"
            >
              닫기 (Lock)
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
