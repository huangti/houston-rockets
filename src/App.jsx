import React, { useState, useMemo } from 'react';
import { 
  ROCKETS_STARTING_FIVE, 
  TEAM_SYNOPSIS 
} from './data/playersData';
import { HoloCard } from './components/HoloCard';
import { CourtBoard } from './components/CourtBoard';
import { CompareModal } from './components/CompareModal';
import { PackOpeningOverlay } from './components/PackOpeningOverlay';
import { soundManager } from './utils/sound';
import { 
  RotateCw, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Layers, 
  Maximize2, 
  ArrowRightLeft, 
  Trophy, 
  Flame, 
  ShieldCheck, 
  Zap, 
  ChevronDown,
  Info
} from 'lucide-react';

function App() {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'court'
  const [flippedCards, setFlippedCards] = useState({});
  const [positionFilter, setPositionFilter] = useState('all'); // 'all' | 'guards' | 'forwards' | 'center'
  const [sortBy, setSortBy] = useState('ovr'); // 'ovr' | 'ppg' | 'def' | 'sht'
  const [isMuted, setIsMuted] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [comparePlayer, setComparePlayer] = useState(null);
  const [isPackOpen, setIsPackOpen] = useState(false);

  // Toggle individual card flip
  const handleToggleFlip = (playerId) => {
    setFlippedCards(prev => ({
      ...prev,
      [playerId]: !prev[playerId]
    }));
  };

  // Flip all cards at once
  const handleFlipAll = () => {
    soundManager.playFlip();
    const allFlipped = ROCKETS_STARTING_FIVE.every(p => flippedCards[p.id]);
    const newState = {};
    ROCKETS_STARTING_FIVE.forEach(p => {
      newState[p.id] = !allFlipped;
    });
    setFlippedCards(newState);
  };

  // Toggle sound mute
  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  // Select player from tactical court board
  const handleSelectFromCourt = (playerId) => {
    setViewMode('cards');
    const player = ROCKETS_STARTING_FIVE.find(p => p.id === playerId);
    if (player) {
      // scroll to that card
      setTimeout(() => {
        const el = document.getElementById(`card-${playerId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  // Open compare modal with specific player
  const handleOpenCompare = (player) => {
    soundManager.playClick();
    setComparePlayer(player);
    setIsCompareOpen(true);
  };

  // Filter and sort players
  const filteredPlayers = useMemo(() => {
    let list = [...ROCKETS_STARTING_FIVE];

    // Filter by position
    if (positionFilter === 'guards') {
      list = list.filter(p => p.position === 'PG' || p.position === 'SG');
    } else if (positionFilter === 'forwards') {
      list = list.filter(p => p.position === 'SF' || p.position === 'PF');
    } else if (positionFilter === 'center') {
      list = list.filter(p => p.position === 'C');
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'ovr') return b.ovr - a.ovr;
      if (sortBy === 'ppg') return parseFloat(b.seasonStats.ppg) - parseFloat(a.seasonStats.ppg);
      if (sortBy === 'def') {
        const defA = a.faceStats.find(s => s.label === 'DEF')?.value || 0;
        const defB = b.faceStats.find(s => s.label === 'DEF')?.value || 0;
        return defB - defA;
      }
      if (sortBy === 'sht') {
        const shtA = a.faceStats.find(s => s.label === 'SHT')?.value || 0;
        const shtB = b.faceStats.find(s => s.label === 'SHT')?.value || 0;
        return shtB - shtA;
      }
      return 0;
    });

    return list;
  }, [positionFilter, sortBy]);

  return (
    <div className="min-h-screen bg-[#07080b] text-gray-100 flex flex-col relative selection:bg-red-600 selection:text-white">
      {/* Background Ambient Rockets Nebula Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      {/* ============================================================== */}
      {/* TOP NAVIGATION HEADER */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-xl border-b border-red-900/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          
          {/* Rockets Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-red-600 via-neutral-900 to-black p-1.5 border border-red-500/50 shadow-[0_0_15px_rgba(206,17,65,0.5)] flex items-center justify-center flex-shrink-0">
              <img src="/rockets-logo.svg" alt="Rockets Logo" className="w-full h-full object-contain filter drop-shadow-md" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                  <span>HOUSTON ROCKETS</span>
                  <span className="text-red-500 font-extrabold text-xs px-2 py-0.5 rounded bg-red-500/10 border border-red-500/30">
                    2024-2025
                  </span>
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium">
                休斯顿火箭队 · 最有可能的先发五虎集卡系统
              </p>
            </div>
          </div>

          {/* Top Quick Actions Bar */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-black/60 border border-white/10 text-xs font-bold">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setViewMode('cards');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${viewMode === 'cards' ? 'bg-red-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>集卡展台</span>
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setViewMode('court');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${viewMode === 'court' ? 'bg-red-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>半场战术板</span>
              </button>
            </div>

            {/* Flip All Button */}
            <button
              onClick={handleFlipAll}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-gray-200 hover:text-white transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <RotateCw className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">全部翻转</span>
              <span className="sm:hidden">翻转</span>
            </button>

            {/* Compare Players Button */}
            <button
              onClick={() => handleOpenCompare(ROCKETS_STARTING_FIVE[0])}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-xs font-bold text-amber-300 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>球星对比</span>
            </button>

            {/* Pack Opening Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                setIsPackOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-black transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(206,17,65,0.4)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>抽卡入场</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={handleToggleSound}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10 transition-colors"
              title={isMuted ? '开启音效' : '静音'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* HERO BANNER & TEAM SYNOPSIS */}
      {/* ============================================================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-black tracking-widest uppercase mb-3">
          <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>PROJECTED STARTING LINEUP · OFFICIAL 2024-25 SCOUTING</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
          休斯顿火箭 · 最有可能的先发五虎
        </h1>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-300 mt-2 font-medium leading-relaxed">
          主帅乌度卡（Ime Udoka）体系下的绝对主力组合：以土耳其魔术师申京为高位战术发牌轴心，范乔丹掌控大局，杰伦·格林爆破突破，狄龙领防施压，小贾巴里提供高炮台与无限换防。
        </p>

        {/* Team Synergy Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
          <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>阵容平均评分：<strong className="text-amber-400 font-mono text-sm">{TEAM_SYNOPSIS.startingFiveOvrAverage}</strong></span>
          </div>
          <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>全队战术羁绊：<strong className="text-emerald-400">{TEAM_SYNOPSIS.chemistryLevel}</strong></span>
          </div>
          <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>战术基石：<strong className="text-red-400">{TEAM_SYNOPSIS.systemIdentity}</strong></span>
          </div>
        </div>

        {/* Filter and Sorter Bar (Only visible in Cards mode) */}
        {viewMode === 'cards' && (
          <div className="flex flex-wrap items-center justify-between gap-3 mt-6 p-2 rounded-2xl bg-slate-900/60 border border-white/10">
            {/* Position Filter */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-gray-400 px-2 font-semibold hidden sm:inline">位置筛选:</span>
              {[
                { id: 'all', label: '全部先发 (5人)' },
                { id: 'guards', label: '后场双枪 (PG/SG)' },
                { id: 'forwards', label: '锋线铁闸 (SF/PF)' },
                { id: 'center', label: '内线中锋 (C)' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => {
                    soundManager.playClick();
                    setPositionFilter(f.id);
                  }}
                  className={`px-3 py-1 rounded-lg font-bold transition-all ${positionFilter === f.id ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Sorter */}
            <div className="flex items-center gap-2 text-xs ml-auto">
              <span className="text-gray-400 font-semibold">排序依据:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  soundManager.playClick();
                  setSortBy(e.target.value);
                }}
                className="bg-black/60 border border-white/20 rounded-lg px-2.5 py-1 text-xs font-bold text-amber-400 focus:outline-none focus:border-red-500 cursor-pointer"
              >
                <option value="ovr">综合总评 (OVR 高到低)</option>
                <option value="ppg">场均得分 (PPG 高到低)</option>
                <option value="def">防守压迫 (DEF 高到低)</option>
                <option value="sht">外线投射 (SHT 高到低)</option>
              </select>
            </div>
          </div>
        )}
      </section>

      {/* ============================================================== */}
      {/* MAIN CONTENT AREA */}
      {/* ============================================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        {viewMode === 'cards' ? (
          <div>
            {/* Cards Showcase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 items-center justify-center">
              {filteredPlayers.map((player) => (
                <div key={player.id} id={`card-${player.id}`} className="flex justify-center">
                  <HoloCard
                    player={player}
                    isFlipped={!!flippedCards[player.id]}
                    onToggleFlip={handleToggleFlip}
                    onSelectCompare={handleOpenCompare}
                  />
                </div>
              ))}
            </div>

            {/* Interactive Notice */}
            <div className="mt-8 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
              <Info className="w-4 h-4 text-amber-400" />
              <span>支持全方位 3D 陀螺仪光栅倾斜感应与正反面 360° 翻转，卡片背面配有高阶能力六维雷达图与特质金徽章！</span>
            </div>
          </div>
        ) : (
          <CourtBoard
            players={ROCKETS_STARTING_FIVE}
            onSelectPlayer={handleSelectFromCourt}
          />
        )}
      </main>

      {/* ============================================================== */}
      {/* TACTICAL SYNERGIES SECTION */}
      {/* ============================================================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 border-t border-white/10 w-full">
        <div className="text-center mb-6">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest mb-1">
            COACH IME UDOKA'S BLUEPRINT
          </div>
          <h3 className="text-2xl font-black text-white">
            先发五虎的核心战术羁绊体系
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM_SYNOPSIS.tacticalTraits.map((trait, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-red-500/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-extrabold text-sm text-white">{trait.title}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {trait.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* FOOTER */}
      {/* ============================================================== */}
      <footer className="relative z-10 bg-black/90 border-t border-white/10 py-6 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src="/rockets-logo.svg" alt="Rockets" className="w-5 h-5 object-contain" />
            <span className="font-bold text-gray-300">休斯顿火箭队 · 先发五虎华丽集卡展示系统</span>
          </div>
          <div className="text-[11px] text-gray-400">
            申京 · 杰伦·格林 · 范弗利特 · 小贾巴里·史密斯 · 狄龙·布鲁克斯
          </div>
        </div>
      </footer>

      {/* ============================================================== */}
      {/* MODALS */}
      {/* ============================================================== */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        players={ROCKETS_STARTING_FIVE}
        initialPlayer={comparePlayer}
      />

      <PackOpeningOverlay
        isOpen={isPackOpen}
        onClose={() => setIsPackOpen(false)}
      />
    </div>
  );
}

export default App;
