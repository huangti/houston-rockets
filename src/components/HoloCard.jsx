import React, { useState, useRef } from 'react';
import { 
  RotateCw, 
  Sparkles, 
  Shield, 
  Zap, 
  Flame, 
  Target, 
  Crosshair, 
  Award,
  ChevronRight,
  Info,
  Activity,
  Compass,
  Footprints,
  Lock,
  Layers,
  BarChart3,
  UserCheck
} from 'lucide-react';
import { RadarChart } from './RadarChart';
import { soundManager } from '../utils/sound';

export function HoloCard({ 
  player, 
  isFlipped = false, 
  onToggleFlip, 
  onSelectCompare 
}) {
  const [activeTab, setActiveTab] = useState('radar'); // 'radar' | 'attributes' | 'badges' | 'scout'
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Dynamic 3D tilt calculation
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundManager.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  };

  const handleCardClick = (e) => {
    // Prevent flip if clicking an interactive inner button or tab
    if (e.target.closest('button') || e.target.closest('.interactive-click')) {
      return;
    }
    soundManager.playFlip();
    onToggleFlip(player.id);
  };

  // 3D rotation transform values
  const rotX = isHovered && !isFlipped ? (0.5 - mousePos.y) * 16 : 0;
  const rotY = isHovered && !isFlipped ? (mousePos.x - 0.5) * 16 : 0;
  const glareAngle = Math.atan2(mousePos.y - 0.5, mousePos.x - 0.5) * (180 / Math.PI) + 90;

  // Render badge icon by name
  const renderBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'Footprints': return <Footprints className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Compass': return <Compass className="w-4 h-4" />;
      case 'Target': return <Target className="w-4 h-4" />;
      case 'Shield': return <Shield className="w-4 h-4" />;
      case 'Lock': return <Lock className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  return (
    <div 
      className="perspective-1000 w-full max-w-[340px] sm:max-w-[360px] h-[580px] sm:h-[610px] mx-auto select-none"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        onClick={handleCardClick}
        style={{
          transform: `rotateY(${isFlipped ? 180 : rotY}deg) rotateX(${isFlipped ? 0 : rotX}deg) ${isHovered && !isFlipped ? 'scale(1.02)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
          transition: isHovered && !isFlipped ? 'transform 0.1s ease-out' : 'transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        className="relative w-full h-full rounded-2xl cursor-pointer shadow-2xl transition-shadow duration-300"
      >
        {/* ============================================================== */}
        {/* CARD FRONT (正面：集卡风、立绘、稀有度、OVR、六维主属性、星星) */}
        {/* ============================================================== */}
        <div 
          style={{ backfaceVisibility: 'hidden' }}
          className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden border-2 bg-gradient-to-b from-slate-900 via-neutral-900 to-black ${player.cardBorder}`}
        >
          {/* Holographic Prismatic Sheen Layer */}
          {isHovered && (
            <div 
              className="absolute inset-0 pointer-events-none z-30 opacity-40 mix-blend-color-dodge transition-opacity duration-200"
              style={{
                background: `linear-gradient(${glareAngle}deg, 
                  rgba(255, 0, 128, 0.25) 0%, 
                  rgba(255, 215, 0, 0.35) 25%, 
                  rgba(0, 255, 180, 0.35) 50%, 
                  rgba(0, 160, 255, 0.3) 75%, 
                  rgba(255, 0, 128, 0.25) 100%)`
              }}
            />
          )}

          {/* Holographic Radial Specular Glare */}
          {isHovered && (
            <div 
              className="absolute inset-0 pointer-events-none z-30 opacity-50 mix-blend-screen transition-opacity duration-150"
              style={{
                background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 255, 255, 0.5) 0%, transparent 55%)`
              }}
            />
          )}

          {/* Carbon Fiber Background Pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#CE1141 1px, transparent 1px), radial-gradient(#FFD700 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px'
            }}
          />

          {/* Diagonal Foil Stripes */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

          {/* Front Content Header */}
          <div className="relative z-10 p-4 pb-0 flex justify-between items-start">
            {/* OVR Shield & Position */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <span className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-amber-500 drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)]">
                  {player.ovr}
                </span>
              </div>
              <div className="px-2.5 py-0.5 mt-0.5 rounded-md bg-red-600/90 text-white font-extrabold text-xs tracking-wider border border-red-400 shadow-sm">
                {player.position}
              </div>
              <div className="text-[10px] text-gray-400 mt-1 font-semibold flex items-center gap-1">
                <span>{player.nationFlag}</span>
                <span>{player.nation}</span>
              </div>
            </div>

            {/* Top Center: 5 Stars Rating & Rarity */}
            <div className="flex flex-col items-center mt-1">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-1">
                {Array.from({ length: player.stars }).map((_, i) => (
                  <span 
                    key={i} 
                    className="text-amber-400 text-sm filter drop-shadow-[0_0_4px_rgba(251,191,36,0.9)] animate-pulse"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>
              {/* Rarity Pill */}
              <div className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/95 border border-white/20 bg-gradient-to-r from-red-950 via-slate-900 to-red-950 shadow-inner">
                {player.rarityBadge}
              </div>
            </div>

            {/* Rockets Team Crest */}
            <div className="w-12 h-12 flex items-center justify-center p-1 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              <img 
                src="/rockets-logo.svg" 
                alt="Houston Rockets" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(206,17,65,0.7)]" 
              />
            </div>
          </div>

          {/* Player Portrait & Silhouette */}
          <div className="relative z-10 w-full h-[230px] sm:h-[245px] flex items-center justify-center -mt-2">
            {/* Background Halo Glow */}
            <div 
              className="absolute w-44 h-44 rounded-full blur-2xl opacity-40 transition-all duration-300"
              style={{ backgroundColor: player.themeColor }}
            />

            {/* Watermark Jersey Number */}
            <div className="absolute right-3 top-2 text-8xl font-black text-white/5 select-none pointer-events-none font-mono">
              #{player.jerseyNumber}
            </div>

            {/* Official Headshot Image */}
            <img 
              src={player.photo} 
              alt={player.name}
              className="relative z-10 max-h-full object-contain filter drop-shadow-[0_12px_16px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          </div>

          {/* Name Plate & Role Title */}
          <div className="relative z-10 px-4 -mt-2 text-center">
            <div className="inline-block px-4 py-1 rounded-lg bg-gradient-to-r from-transparent via-black/80 to-transparent border-y border-white/15">
              <h3 className="text-xl sm:text-2xl font-black tracking-wide text-white drop-shadow-md">
                {player.name}
              </h3>
              <p className="text-[11px] text-gray-300 font-medium tracking-widest uppercase">
                {player.nameEn} · #{player.jerseyNumber}
              </p>
            </div>
            <div className="text-[11px] text-amber-300/90 font-semibold mt-1 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{player.rarityBadgeZh}</span>
            </div>
          </div>

          {/* Face Attributes Grid (FIFA FUT 6 Stats) */}
          <div className="relative z-10 px-4 mt-3">
            <div className="grid grid-cols-6 gap-1 p-2 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 shadow-lg">
              {player.faceStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[10px] text-gray-400 font-bold tracking-tight">
                    {stat.label}
                  </span>
                  <span className={`text-sm sm:text-base font-black ${stat.value >= 88 ? 'text-amber-400' : stat.value >= 80 ? 'text-emerald-400' : 'text-white'}`}>
                    {stat.value}
                  </span>
                  <span className="text-[9px] text-gray-400 scale-90">
                    {stat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Flip Action Hint */}
          <div className="absolute bottom-2 inset-x-0 z-10 flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium tracking-wide">
            <RotateCw className="w-3.5 h-3.5 text-red-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-gray-300 text-[11px]">点击翻转卡片 · 查看深度球探报告</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CARD BACK (背面：六维雷达图、详细属性条目、真实赛季数据、徽章特质) */}
        {/* ============================================================== */}
        <div 
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border-2 border-red-500/60 bg-gradient-to-b from-slate-950 via-neutral-900 to-black text-white p-3.5 flex flex-col justify-between shadow-[0_0_30px_rgba(206,17,65,0.35)]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-red-600/30 border border-red-400/50 flex items-center justify-center font-black text-amber-400 text-sm">
                {player.ovr}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm">{player.name}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-600/80 font-bold">{player.position}</span>
                </div>
                <div className="text-[10px] text-gray-400">{player.nickname}</div>
              </div>
            </div>

            {/* Quick Action Flip Back Button */}
            <button
              onClick={() => {
                soundManager.playFlip();
                onToggleFlip(player.id);
              }}
              className="interactive-click p-1.5 rounded-lg bg-white/10 hover:bg-red-600/40 text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              title="翻转回正面"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>正面</span>
            </button>
          </div>

          {/* Quick Season Stats Ribbon */}
          <div className="grid grid-cols-5 gap-1 py-1.5 px-2 my-1 rounded-lg bg-white/5 border border-white/10 text-center">
            <div>
              <div className="text-[9px] text-gray-400">得分</div>
              <div className="text-xs font-black text-amber-400">{player.seasonStats.ppg}</div>
            </div>
            <div>
              <div className="text-[9px] text-gray-400">篮板</div>
              <div className="text-xs font-black text-cyan-400">{player.seasonStats.rpg}</div>
            </div>
            <div>
              <div className="text-[9px] text-gray-400">助攻</div>
              <div className="text-xs font-black text-emerald-400">{player.seasonStats.apg}</div>
            </div>
            <div>
              <div className="text-[9px] text-gray-400">命中率</div>
              <div className="text-xs font-bold text-gray-200">{player.seasonStats.fgPct}</div>
            </div>
            <div>
              <div className="text-[9px] text-gray-400">三分%</div>
              <div className="text-xs font-bold text-gray-200">{player.seasonStats.threePct}</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="grid grid-cols-4 gap-1 p-0.5 rounded-lg bg-black/60 border border-white/10 text-[11px] font-semibold">
            <button
              onClick={() => setActiveTab('radar')}
              className={`interactive-click py-1 rounded-md transition-all ${activeTab === 'radar' ? 'bg-red-600 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
            >
              能力雷达
            </button>
            <button
              onClick={() => setActiveTab('attributes')}
              className={`interactive-click py-1 rounded-md transition-all ${activeTab === 'attributes' ? 'bg-red-600 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
            >
              细分参数
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`interactive-click py-1 rounded-md transition-all ${activeTab === 'badges' ? 'bg-red-600 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
            >
              特质徽章
            </button>
            <button
              onClick={() => setActiveTab('scout')}
              className={`interactive-click py-1 rounded-md transition-all ${activeTab === 'scout' ? 'bg-red-600 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'}`}
            >
              球探档案
            </button>
          </div>

          {/* Tab Content Area (Fixed Height with clean layout) */}
          <div className="flex-1 overflow-y-auto my-1 pr-1 custom-scrollbar">
            {/* TAB 1: RADAR CHART */}
            {activeTab === 'radar' && (
              <div className="flex flex-col items-center justify-center py-1">
                <RadarChart 
                  data={player.radar} 
                  color={player.themeColor} 
                  size={240} 
                />
                <div className="mt-1 text-center">
                  <span className="text-[11px] text-gray-400 font-medium">
                    核心战术标签：
                  </span>
                  <span className="text-[11px] font-bold text-amber-400 ml-1">
                    {player.roleTag}
                  </span>
                </div>
              </div>
            )}

            {/* TAB 2: DETAILED ATTRIBUTE BARS (0-99 FIFA/2K style) */}
            {activeTab === 'attributes' && (
              <div className="space-y-2.5 text-xs py-1">
                {/* 投射能力 */}
                <div>
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>🎯 投射能力 (Shooting)</span>
                    <span className="text-gray-400">均值 84</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {player.attributes.shooting.map((item, idx) => (
                      <div key={idx} className="bg-white/5 p-1 rounded flex justify-between items-center">
                        <span className="text-gray-300 text-[10px]">{item.label}</span>
                        <span className={`font-mono font-bold text-[11px] ${item.val >= 85 ? 'text-amber-400' : 'text-gray-200'}`}>
                          {item.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 禁区终结 */}
                <div>
                  <div className="text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>⚡ 禁区终结 (Finishing)</span>
                    <span className="text-gray-400">均值 86</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {player.attributes.finishing.map((item, idx) => (
                      <div key={idx} className="bg-white/5 p-1 rounded flex justify-between items-center">
                        <span className="text-gray-300 text-[10px]">{item.label}</span>
                        <span className={`font-mono font-bold text-[11px] ${item.val >= 88 ? 'text-rose-400' : 'text-gray-200'}`}>
                          {item.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 组织串联 */}
                <div>
                  <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>🧠 组织传球 (Playmaking)</span>
                    <span className="text-gray-400">均值 82</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {player.attributes.playmaking.map((item, idx) => (
                      <div key={idx} className="bg-white/5 p-1 rounded flex justify-between items-center">
                        <span className="text-gray-300 text-[10px]">{item.label}</span>
                        <span className={`font-mono font-bold text-[11px] ${item.val >= 88 ? 'text-sky-400' : 'text-gray-200'}`}>
                          {item.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 防守压迫 */}
                <div>
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>🛡️ 防守封锁 (Defense)</span>
                    <span className="text-gray-400">均值 85</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {player.attributes.defense.map((item, idx) => (
                      <div key={idx} className="bg-white/5 p-1 rounded flex justify-between items-center">
                        <span className="text-gray-300 text-[10px]">{item.label}</span>
                        <span className={`font-mono font-bold text-[11px] ${item.val >= 88 ? 'text-emerald-400' : 'text-gray-200'}`}>
                          {item.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: SIGNATURE BADGES (特质徽章) */}
            {activeTab === 'badges' && (
              <div className="space-y-2 py-1">
                {player.badges.map((badge, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-white/10 to-transparent border border-amber-500/30 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1 rounded-lg bg-amber-500/20 text-amber-400">
                        {renderBadgeIcon(badge.icon)}
                      </div>
                      <span className="font-bold text-amber-300 text-xs">
                        {badge.name}
                      </span>
                      <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-200 font-extrabold uppercase">
                        {badge.type === 'gold' ? '黄金特质' : '白银特质'}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      {badge.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: SCOUTING REPORT & BIO */}
            {activeTab === 'scout' && (
              <div className="space-y-2.5 py-1 text-xs">
                {/* Physical Specifications */}
                <div className="grid grid-cols-2 gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                  <div><span className="text-gray-400">身高：</span><span className="font-semibold text-white">{player.height}</span></div>
                  <div><span className="text-gray-400">臂展：</span><span className="font-semibold text-white">{player.wingspan}</span></div>
                  <div><span className="text-gray-400">体重：</span><span className="font-semibold text-white">{player.weight}</span></div>
                  <div><span className="text-gray-400">年龄：</span><span className="font-semibold text-white">{player.age} 岁</span></div>
                  <div className="col-span-2"><span className="text-gray-400">选秀：</span><span className="font-semibold text-white">{player.draft}</span></div>
                </div>

                {/* Scouting Summary */}
                <div className="p-2 rounded-lg bg-red-950/30 border border-red-500/30">
                  <div className="text-[11px] font-bold text-red-400 mb-1 flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    <span>教练组综合评估：</span>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    {player.scoutingReport.summary}
                  </p>
                </div>

                {/* Pros & Cons */}
                <div className="space-y-1">
                  <div className="text-[10px] text-emerald-400 font-bold">✓ 战术优势：</div>
                  {player.scoutingReport.pros.map((pro, i) => (
                    <div key={i} className="text-[10px] text-gray-300 pl-2 border-l border-emerald-500/50">
                      {pro}
                    </div>
                  ))}
                  <div className="text-[10px] text-amber-400 font-bold pt-1">⚠ 进阶短板：</div>
                  {player.scoutingReport.cons.map((con, i) => (
                    <div key={i} className="text-[10px] text-gray-300 pl-2 border-l border-amber-500/50">
                      {con}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Card Footer Actions */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-[10px] text-gray-400">休斯顿火箭 · 官方认证数据</span>
            <button
              onClick={() => onSelectCompare(player)}
              className="interactive-click px-2.5 py-1 rounded-md bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold transition-all flex items-center gap-1"
            >
              <span>加入双人对比</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
