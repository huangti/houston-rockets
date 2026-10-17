import React, { useState } from 'react';
import { Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';
import { soundManager } from '../utils/sound';

export function CourtBoard({ players, onSelectPlayer }) {
  const [hoveredPlayerId, setHoveredPlayerId] = useState(null);

  const tacticalConnections = [
    { from: 'vanvleet', to: 'sengun', label: '1-5号位挡拆轴心', color: '#F59E0B' },
    { from: 'sengun', to: 'green', label: '高位手递手与空切', color: '#EF4444' },
    { from: 'sengun', to: 'smith', label: '内线策应拉开空间', color: '#10B981' },
    { from: 'brooks', to: 'smith', label: '锋线无限换防扫荡', color: '#8B5CF6' },
    { from: 'vanvleet', to: 'brooks', label: '后场双铁锁领防', color: '#38BDF8' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-6 p-4 sm:p-6 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-red-600/30 shadow-[0_0_50px_rgba(206,17,65,0.2)]">
      {/* Board Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white font-black text-xs uppercase tracking-wider">
              TACTICAL FORMATION
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
              休斯顿火箭先发五虎 · 半场战术站位与羁绊
            </h2>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            乌度卡防守体系下的先发阵型 | 点击球员头像可联动卡片详情与深度球探指标
          </p>
        </div>

        {/* Synergy Legend */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>全队化学反应 100%</span>
          </span>
        </div>
      </div>

      {/* Half-Court SVG Visual Area */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#18080a] via-[#101015] to-[#0a0a0c] shadow-2xl flex items-center justify-center">
        
        {/* Basketball Court Floor Texture & Lines (Half-court) */}
        <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <defs>
            {/* Rockets Court Hardwood Gradient */}
            <linearGradient id="woodFloor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#251216" />
              <stop offset="50%" stopColor="#1a1114" />
              <stop offset="100%" stopColor="#121217" />
            </linearGradient>

            {/* Glowing Synergy Line Gradients */}
            <linearGradient id="synergyGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>

            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Court Hardwood Base */}
          <rect x="0" y="0" width="1000" height="600" fill="url(#woodFloor)" />

          {/* Hardwood subtle plank lines */}
          {Array.from({ length: 30 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 20}
              x2="1000"
              y2={i * 20}
              stroke="rgba(255,255,255,0.02)"
              strokeWidth="1"
            />
          ))}

          {/* Court Perimeter Boundary Line */}
          <rect x="40" y="30" width="920" height="540" fill="none" stroke="rgba(206,17,65,0.6)" strokeWidth="3" />

          {/* Half-court center line & circle */}
          <line x1="40" y1="570" x2="960" y2="570" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
          <path d="M 400 570 A 100 100 0 0 1 600 570" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />

          {/* 3-Point Line */}
          <path
            d="M 120 30 L 120 160 A 370 370 0 0 0 880 160 L 880 30"
            fill="none"
            stroke="rgba(206,17,65,0.7)"
            strokeWidth="3.5"
            filter="url(#glowEffect)"
          />

          {/* Paint Area / Key (Rocket Red Painted) */}
          <rect x="360" y="30" width="280" height="230" fill="rgba(206,17,65,0.18)" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />

          {/* Free throw circle */}
          <circle cx="500" cy="260" r="85" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <path d="M 415 260 A 85 85 0 0 0 585 260" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeDasharray="6 6" />

          {/* Restricted Area Arc */}
          <path d="M 450 70 A 50 50 0 0 0 550 70" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" />

          {/* Backboard & Rim */}
          <line x1="450" y1="55" x2="550" y2="55" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="500" cy="72" r="14" fill="none" stroke="#EF4444" strokeWidth="3.5" />

          {/* Center court watermark Rockets Logo */}
          <image 
            href="/rockets-logo.svg" 
            x="420" 
            y="320" 
            width="160" 
            height="160" 
            opacity="0.12" 
          />

          {/* Tactical Synergy Lines connecting players */}
          {tacticalConnections.map((conn, idx) => {
            const p1 = players.find(p => p.id === conn.from);
            const p2 = players.find(p => p.id === conn.to);
            if (!p1 || !p2) return null;

            const isHighlighted = hoveredPlayerId === conn.from || hoveredPlayerId === conn.to;

            // Translate 0-100 coordinates to SVG viewBox 1000x600
            const x1 = (p1.courtCoordinates.x / 100) * 1000;
            const y1 = (p1.courtCoordinates.y / 100) * 600;
            const x2 = (p2.courtCoordinates.x / 100) * 1000;
            const y2 = (p2.courtCoordinates.y / 100) * 600;

            return (
              <g key={idx}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={conn.color}
                  strokeWidth={isHighlighted ? 4 : 2}
                  strokeDasharray={isHighlighted ? '8 4' : '4 4'}
                  opacity={isHighlighted ? 0.95 : 0.35}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* Interactive Player Nodes on the court */}
        {players.map((p) => {
          const isHovered = hoveredPlayerId === p.id;

          return (
            <div
              key={p.id}
              style={{
                left: `${p.courtCoordinates.x}%`,
                top: `${p.courtCoordinates.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className="absolute z-20 cursor-pointer group"
              onMouseEnter={() => {
                setHoveredPlayerId(p.id);
                soundManager.playHover();
              }}
              onMouseLeave={() => setHoveredPlayerId(null)}
              onClick={() => {
                soundManager.playClick();
                onSelectPlayer(p.id);
              }}
            >
              {/* Pulsating Radar Wave */}
              <div 
                className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{ backgroundColor: p.themeColor }}
              />

              {/* Player Node Disc */}
              <div className={`relative flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-slate-900/90 backdrop-blur-md border-2 transition-all duration-300 shadow-2xl ${isHovered ? 'scale-110 border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'border-white/20'}`}
                style={{ borderColor: isHovered ? '#FFFFFF' : p.themeColor }}
              >
                {/* Mini Headshot */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-gradient-to-b from-gray-800 to-black border border-white/20 flex-shrink-0">
                  <img src={p.photo} alt={p.name} className="w-full h-full object-cover object-top" />
                </div>

                {/* Player Info Pill */}
                <div className="pr-1 sm:pr-2 text-left">
                  <div className="flex items-center gap-1">
                    <span className="px-1.5 py-0.2 rounded bg-red-600 text-white font-extrabold text-[9px] sm:text-[10px]">
                      {p.position}
                    </span>
                    <span className="font-mono font-black text-xs sm:text-sm text-amber-400">
                      {p.ovr}
                    </span>
                  </div>
                  <div className="font-black text-white text-[11px] sm:text-xs tracking-tight whitespace-nowrap">
                    {p.name}
                  </div>
                </div>
              </div>

              {/* Hover Tactical Tooltip */}
              {isHovered && (
                <div className="absolute left-1/2 -top-16 -translate-x-1/2 z-30 w-44 sm:w-52 p-2 rounded-xl bg-black/95 backdrop-blur-md border border-red-500/50 shadow-2xl pointer-events-none text-center">
                  <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                    {p.roleTag}
                  </div>
                  <div className="text-[11px] text-gray-200 mt-0.5 font-medium">
                    {p.nickname} · #{p.jerseyNumber}
                  </div>
                  <div className="text-[9px] text-gray-400 mt-1">
                    点击锁定此球星卡片
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tactical Description Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
          <Zap className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block">进攻发起：挡拆策应与内外串联</span>
            <span className="text-gray-400 text-[11px]">范乔丹弧顶呼叫申京高位掩护，借助格林空切与小贾巴里底角牵制防守。</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block">防守策略：全场撕咬与无限换防</span>
            <span className="text-gray-400 text-[11px]">狄龙全场领防对方第一持球人，小史密斯2米11长臂大防小兼顾协防护框。</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
          <Activity className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block">反击推进：超音速青年风暴</span>
            <span className="text-gray-400 text-[11px]">格林利用全联盟顶尖的第一步与弹跳快攻攻筐，掀起丰田中心反击浪潮。</span>
          </div>
        </div>
      </div>
    </div>
  );
}
