import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, X, Flame } from 'lucide-react';
import { soundManager } from '../utils/sound';

export function PackOpeningOverlay({ isOpen, onClose, onFinishDeal }) {
  if (!isOpen) return null;

  const [phase, setPhase] = useState('pack'); // 'pack' -> 'tearing' -> 'revealed'

  useEffect(() => {
    // Initial pack sound
    soundManager.playHover();
  }, []);

  const handleOpenPack = () => {
    soundManager.playPackOpen();
    setPhase('tearing');

    // Confetti cannon
    try {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#CE1141', '#FFD700', '#FFFFFF', '#F59E0B']
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 1 }
        });
      }, 300);
    } catch {}

    setTimeout(() => {
      setPhase('revealed');
      if (onFinishDeal) onFinishDeal();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl select-none">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {phase === 'pack' && (
        <div className="flex flex-col items-center animate-fade-in text-center">
          <div className="text-amber-400 font-extrabold text-sm uppercase tracking-widest flex items-center gap-2 mb-2 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>2024-2025 HOUSTON ROCKETS SPECIAL PACK</span>
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
            点击拆开 · 休斯顿先发五虎神话卡包
          </h2>

          {/* Glowing Trading Card Pack */}
          <div 
            onClick={handleOpenPack}
            className="group relative w-64 h-96 sm:w-72 sm:h-[420px] rounded-3xl cursor-pointer p-1.5 transition-all duration-500 hover:scale-105"
          >
            {/* Ambient Energy Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 blur-xl opacity-75 group-hover:opacity-100 animate-pulse" />

            {/* Foil Pack Shell */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-amber-400/80 bg-gradient-to-br from-red-950 via-neutral-900 to-black p-5 flex flex-col justify-between items-center text-center shadow-2xl">
              {/* Foil Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

              {/* Pack Top */}
              <div className="w-full flex items-center justify-between border-b border-amber-500/30 pb-3">
                <span className="text-[10px] font-black tracking-widest text-amber-300">LIMITED EDITION</span>
                <span className="text-[10px] font-black tracking-widest text-red-400">5 CARDS INCLUDED</span>
              </div>

              {/* Pack Center Graphics */}
              <div className="my-auto flex flex-col items-center">
                <img 
                  src="/rockets-logo.svg" 
                  alt="Houston Rockets" 
                  className="w-24 h-24 object-contain filter drop-shadow-[0_0_15px_rgba(206,17,65,0.8)] mb-3" 
                />
                <div className="text-2xl font-black text-white tracking-wider">
                  先发五虎
                </div>
                <div className="text-xs text-amber-400 font-bold uppercase tracking-widest mt-0.5">
                  STARTING FIVE
                </div>
                <div className="mt-4 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold animate-bounce">
                  点击拆封卡包 ⚡
                </div>
              </div>

              {/* Pack Bottom */}
              <div className="text-[10px] text-gray-400 border-t border-white/10 pt-2 w-full">
                申京 · 格林 · 范弗利特 · 史密斯 · 狄龙
              </div>
            </div>
          </div>
        </div>
      )}

      {phase === 'tearing' && (
        <div className="flex flex-col items-center text-center animate-pulse">
          <div className="w-36 h-36 rounded-full bg-amber-500/30 blur-2xl animate-ping" />
          <h3 className="text-3xl font-black text-white tracking-widest mt-4">
            正在解封休斯顿神话卡牌...
          </h3>
          <p className="text-sm text-amber-400 font-bold mt-2">
            金光绽放，先发五虎归位！
          </p>
        </div>
      )}

      {phase === 'revealed' && (
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="p-4 rounded-full bg-amber-500/20 text-amber-400 mb-3 border border-amber-500/40 animate-bounce">
            <Flame className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-white">
            恭喜！先发五虎全员集结完毕！
          </h2>
          <p className="text-sm text-gray-300 mt-2 max-w-md">
            申京（89）、格林（86）、范乔丹（84）、小史密斯（82）、狄龙（81）已就位丰田中心！
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-white font-black text-base shadow-[0_0_25px_rgba(206,17,65,0.6)] hover:scale-105 transition-all"
          >
            进入休城展台探索卡牌 ➔
          </button>
        </div>
      )}
    </div>
  );
}
