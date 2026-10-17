import React, { useState } from 'react';
import { X, ArrowRightLeft, Trophy, Check } from 'lucide-react';
import { RadarChart } from './RadarChart';
import { soundManager } from '../utils/sound';

export function CompareModal({ players, initialPlayer, isOpen, onClose }) {
  if (!isOpen) return null;

  const [playerAId, setPlayerAId] = useState(initialPlayer?.id || players[0].id);
  const [playerBId, setPlayerBId] = useState(
    players.find(p => p.id !== (initialPlayer?.id || players[0].id))?.id || players[1].id
  );

  const playerA = players.find(p => p.id === playerAId) || players[0];
  const playerB = players.find(p => p.id === playerBId) || players[1];

  const handleSwap = () => {
    soundManager.playClick();
    const temp = playerAId;
    setPlayerAId(playerBId);
    setPlayerBId(temp);
  };

  // Compare face stats
  const statRows = [
    { label: '进攻评分 (OFF)', valA: playerA.faceStats.find(s => s.label === 'OFF')?.value || 0, valB: playerB.faceStats.find(s => s.label === 'OFF')?.value || 0 },
    { label: '防守评分 (DEF)', valA: playerA.faceStats.find(s => s.label === 'DEF')?.value || 0, valB: playerB.faceStats.find(s => s.label === 'DEF')?.value || 0 },
    { label: '投射评分 (SHT)', valA: playerA.faceStats.find(s => s.label === 'SHT')?.value || 0, valB: playerB.faceStats.find(s => s.label === 'SHT')?.value || 0 },
    { label: '组织评分 (PAS)', valA: playerA.faceStats.find(s => s.label === 'PAS')?.value || 0, valB: playerB.faceStats.find(s => s.label === 'PAS')?.value || 0 },
    { label: '篮板评分 (REB)', valA: playerA.faceStats.find(s => s.label === 'REB')?.value || 0, valB: playerB.faceStats.find(s => s.label === 'REB')?.value || 0 },
    { label: '体能评分 (PHY)', valA: playerA.faceStats.find(s => s.label === 'PHY')?.value || 0, valB: playerB.faceStats.find(s => s.label === 'PHY')?.value || 0 },
  ];

  // Compare Season Stats
  const seasonRows = [
    { label: '场均得分 (PPG)', valA: parseFloat(playerA.seasonStats.ppg), valB: parseFloat(playerB.seasonStats.ppg), unit: '分' },
    { label: '场均篮板 (RPG)', valA: parseFloat(playerA.seasonStats.rpg), valB: parseFloat(playerB.seasonStats.rpg), unit: '个' },
    { label: '场均助攻 (APG)', valA: parseFloat(playerA.seasonStats.apg), valB: parseFloat(playerB.seasonStats.apg), unit: '次' },
    { label: '场均抢断 (SPG)', valA: parseFloat(playerA.seasonStats.spg), valB: parseFloat(playerB.seasonStats.spg), unit: '次' },
    { label: '场均盖帽 (BPG)', valA: parseFloat(playerA.seasonStats.bpg), valB: parseFloat(playerB.seasonStats.bpg), unit: '次' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 rounded-3xl border border-red-500/40 shadow-[0_0_60px_rgba(206,17,65,0.4)] p-4 sm:p-6 text-white custom-scrollbar">
        
        {/* Modal Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold mb-1">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>HEAD-TO-HEAD BATTLE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            先发球星深度数据对比
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            双人多维六边形雷达图对比 · 关键能力指标与高阶战术定位对比
          </p>
        </div>

        {/* Player Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center mb-6">
          {/* Player A Select */}
          <div className="sm:col-span-5 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center gap-3">
            <img src={playerA.photo} alt={playerA.name} className="w-14 h-14 object-contain filter drop-shadow-md" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs px-1.5 py-0.5 rounded bg-red-600 font-bold">{playerA.position}</span>
                <span className="text-xs text-amber-400 font-mono font-bold">OVR {playerA.ovr}</span>
              </div>
              <select
                value={playerAId}
                onChange={(e) => {
                  soundManager.playClick();
                  setPlayerAId(e.target.value);
                }}
                className="w-full mt-1 bg-black/60 border border-white/20 rounded-lg px-2 py-1 text-sm font-bold text-white focus:outline-none focus:border-amber-400"
              >
                {players.map(p => (
                  <option key={p.id} value={p.id} disabled={p.id === playerBId} className="bg-slate-900 text-white">
                    {p.name} ({p.position} · {p.ovr})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="sm:col-span-1 flex justify-center">
            <button
              onClick={handleSwap}
              className="p-2.5 rounded-full bg-white/10 hover:bg-red-600 text-gray-300 hover:text-white transition-all transform hover:rotate-180 duration-300"
              title="交换对比席位"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Player B Select */}
          <div className="sm:col-span-5 p-3 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex items-center gap-3">
            <img src={playerB.photo} alt={playerB.name} className="w-14 h-14 object-contain filter drop-shadow-md" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs px-1.5 py-0.5 rounded bg-red-600 font-bold">{playerB.position}</span>
                <span className="text-xs text-sky-400 font-mono font-bold">OVR {playerB.ovr}</span>
              </div>
              <select
                value={playerBId}
                onChange={(e) => {
                  soundManager.playClick();
                  setPlayerBId(e.target.value);
                }}
                className="w-full mt-1 bg-black/60 border border-white/20 rounded-lg px-2 py-1 text-sm font-bold text-white focus:outline-none focus:border-sky-400"
              >
                {players.map(p => (
                  <option key={p.id} value={p.id} disabled={p.id === playerAId} className="bg-slate-900 text-white">
                    {p.name} ({p.position} · {p.ovr})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Dual Radar Chart Section */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 flex flex-col items-center">
          <div className="flex items-center gap-6 mb-2 text-xs font-bold">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span>{playerA.name} ({playerA.position})</span>
            </span>
            <span className="flex items-center gap-1.5 text-sky-400">
              <span className="w-3 h-3 rounded-full bg-sky-400 inline-block shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span>{playerB.name} ({playerB.position})</span>
            </span>
          </div>

          <RadarChart 
            data={playerA.radar} 
            compareData={playerB.radar} 
            color="#F59E0B" 
            compareColor="#38BDF8" 
            size={280} 
          />
        </div>

        {/* Side-by-side Attribute Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* FUT 6 Main Face Stats */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-300 mb-3 border-b border-white/10 pb-1.5">
              🎮 核心维度能力对比 (0-99)
            </h4>
            <div className="space-y-2.5 text-xs">
              {statRows.map((row, idx) => {
                const aWins = row.valA > row.valB;
                const bWins = row.valB > row.valA;
                return (
                  <div key={idx} className="flex items-center justify-between gap-2">
                    <span className={`w-10 text-right font-mono font-bold ${aWins ? 'text-amber-400 font-black' : 'text-gray-400'}`}>
                      {row.valA}
                    </span>
                    <div className="flex-1 text-center font-medium text-gray-300 text-[11px]">
                      {row.label}
                    </div>
                    <span className={`w-10 text-left font-mono font-bold ${bWins ? 'text-sky-400 font-black' : 'text-gray-400'}`}>
                      {row.valB}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Season Stats Face-off */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-300 mb-3 border-b border-white/10 pb-1.5">
              📊 真实赛季场均数据对抗
            </h4>
            <div className="space-y-2.5 text-xs">
              {seasonRows.map((row, idx) => {
                const aWins = row.valA > row.valB;
                const bWins = row.valB > row.valA;
                return (
                  <div key={idx} className="flex items-center justify-between gap-2">
                    <span className={`w-14 text-right font-mono font-bold ${aWins ? 'text-amber-400 font-black' : 'text-gray-400'}`}>
                      {row.valA} {row.unit}
                    </span>
                    <div className="flex-1 text-center font-medium text-gray-300 text-[11px]">
                      {row.label}
                    </div>
                    <span className={`w-14 text-left font-mono font-bold ${bWins ? 'text-sky-400 font-black' : 'text-gray-400'}`}>
                      {row.valB} {row.unit}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
