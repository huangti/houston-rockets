// Houston Rockets 2024-2025 Projected Starting Five (休斯顿火箭队最强先发五虎)
// Full detailed stats, FIFA/2K style attributes, signature traits and radar dimensions

export const ROCKETS_STARTING_FIVE = [
  {
    id: 'sengun',
    name: '阿尔佩伦·申京',
    nameEn: 'Alperen Şengün',
    jerseyNumber: '28',
    position: 'C',
    positionName: '中锋 / 组织核心',
    ovr: 89,
    stars: 5,
    rarityBadge: 'MYTHIC GOLD',
    rarityBadgeZh: '神话典藏 · 控锋魔术师',
    rarityTier: 'mythic',
    themeColor: '#F59E0B',
    accentGradient: 'from-amber-400 via-yellow-500 to-amber-700',
    cardBorder: 'border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.45)]',
    photo: '/players/sengun.png',
    nation: '土耳其',
    nationFlag: '🇹🇷',
    nickname: '土耳其魔术师 / 申京大帝',
    age: 22,
    height: '211 cm (6\'11")',
    weight: '110 kg (243 lbs)',
    wingspan: '216 cm (7\'1")',
    draft: '2021年 首轮第16顺位',
    experience: '4年 NBA球龄',
    roleTag: '乌度卡战术绝对轴心',
    
    // FIFA FUT Style Face Stats
    faceStats: [
      { label: 'OFF', name: '进攻', value: 92, highlight: true },
      { label: 'DEF', name: '防守', value: 78, highlight: false },
      { label: 'SHT', name: '投射', value: 74, highlight: false },
      { label: 'PAS', name: '组织', value: 91, highlight: true },
      { label: 'REB', name: '篮板', value: 90, highlight: true },
      { label: 'PHY', name: '体能', value: 84, highlight: false },
    ],

    // Radar Chart 6-Dimension
    radar: [
      { dimension: '禁区终结', value: 94, full: 100 },
      { dimension: '外线投射', value: 71, full: 100 },
      { dimension: '传球发牌', value: 93, full: 100 },
      { dimension: '防守护框', value: 79, full: 100 },
      { dimension: '篮板冲抢', value: 91, full: 100 },
      { dimension: '核心对抗', value: 89, full: 100 },
    ],

    // Season Stats
    seasonStats: {
      ppg: '21.1',
      rpg: '9.3',
      apg: '5.0',
      spg: '1.2',
      bpg: '0.9',
      fgPct: '54.1%',
      threePct: '29.7%',
      ftPct: '69.3%',
      tsPct: '58.5%',
      plusMinus: '+4.8'
    },

    // Category Breakdown (0-99)
    attributes: {
      shooting: [
        { label: '中距离跳投', val: 84 },
        { label: '弧顶三分球', val: 70 },
        { label: '罚球稳定性', val: 72 },
        { label: '高压受迫出手', val: 85 }
      ],
      finishing: [
        { label: '禁区巧打终结', val: 95 },
        { label: '梦幻脚步假动作', val: 96 },
        { label: '背身勾手单打', val: 94 },
        { label: '造犯规侵略性', val: 90 }
      ],
      playmaking: [
        { label: '球场策应视野', val: 94 },
        { label: '手递手高位发牌', val: 95 },
        { label: '行进间击地妙传', val: 92 },
        { label: '破包夹出球反应', val: 89 }
      ],
      defense: [
        { label: '禁区对抗顶防', val: 84 },
        { label: '防守篮板卡位', val: 90 },
        { label: '前场拼抢前板', val: 92 },
        { label: '预判抄截断球', val: 82 }
      ],
      athleticism: [
        { label: '核心低位力量', val: 91 },
        { label: '篮下柔韧协调', val: 94 },
        { label: '全场奔跑耐力', val: 85 },
        { label: '爆发垂直起跳', val: 72 }
      ]
    },

    // PlayStyles / Signature Badges
    badges: [
      {
        name: '金色梦幻脚步 (Dream Shake+)',
        type: 'gold',
        icon: 'Footprints',
        desc: '禁区假动作晃动逼真度达联盟顶级，大幅降低防守人封盖几率，勾手命中率极高。'
      },
      {
        name: '高位发牌大师 (High Post Maestro+)',
        type: 'gold',
        icon: 'Sparkles',
        desc: '火箭半场进攻发起点，手递手掩护及背身空切传球极具穿透力，自带进攻梳理光环。'
      },
      {
        name: '前板嗅觉 (Rebound Beast)',
        type: 'silver',
        icon: 'Crosshair',
        desc: '对篮板落点具备动物般直觉，擅长点抢前场篮板制造二次进攻机会。'
      }
    ],

    scoutingReport: {
      summary: '申京是现代NBA最罕见的进攻轴心型控球中锋（Point Center）。他具备年轻约基奇般的球商与脚步，既能低位坐打碾碎错位，又能站在弧顶指点江山，是火箭打进季后赛的战术命脉。',
      pros: ['顶级策应视野与手感', '低位单打万花筒脚步', '极其凶猛的二次进攻拼抢'],
      cons: ['护框弹跳与横移速度有限', '远投三分产量与稳定性待提升']
    },

    courtCoordinates: { x: 50, y: 36 }, // Center paint/high-post
    synergyPartner: 'vanvleet',
    synergyLabel: '黄金挡拆轴心'
  },

  {
    id: 'green',
    name: '杰伦·格林',
    nameEn: 'Jalen Green',
    jerseyNumber: '4',
    position: 'SG',
    positionName: '得分后卫 / 闪电分卫',
    ovr: 86,
    stars: 5,
    rarityBadge: 'HYPER RUBY',
    rarityBadgeZh: '超音速赤红 · 爆破终结者',
    rarityTier: 'ruby',
    themeColor: '#EF4444',
    accentGradient: 'from-rose-500 via-red-600 to-amber-600',
    cardBorder: 'border-red-500/80 shadow-[0_0_25px_rgba(239,68,68,0.45)]',
    photo: '/players/green.png',
    nation: '美国',
    nationFlag: '🇺🇸',
    nickname: '休城超新星 / 闪电滑翔机',
    age: 22,
    height: '193 cm (6\'4")',
    weight: '84 kg (186 lbs)',
    wingspan: '203 cm (6\'8")',
    draft: '2021年 首轮第2顺位 (榜眼)',
    experience: '4年 NBA球龄',
    roleTag: '攻防转换第一爆破箭头',

    faceStats: [
      { label: 'OFF', name: '进攻', value: 89, highlight: true },
      { label: 'DEF', name: '防守', value: 72, highlight: false },
      { label: 'SHT', name: '投射', value: 84, highlight: true },
      { label: 'PAS', name: '组织', value: 76, highlight: false },
      { label: 'REB', name: '篮板', value: 73, highlight: false },
      { label: 'PHY', name: '体能', value: 95, highlight: true },
    ],

    radar: [
      { dimension: '禁区终结', value: 88, full: 100 },
      { dimension: '外线投射', value: 85, full: 100 },
      { dimension: '传球发牌', value: 75, full: 100 },
      { dimension: '防守护框', value: 71, full: 100 },
      { dimension: '篮板冲抢', value: 72, full: 100 },
      { dimension: '运动天赋', value: 96, full: 100 },
    ],

    seasonStats: {
      ppg: '19.6',
      rpg: '5.2',
      apg: '3.5',
      spg: '0.8',
      bpg: '0.4',
      fgPct: '42.3%',
      threePct: '33.2%',
      ftPct: '80.4%',
      tsPct: '54.6%',
      plusMinus: '+3.2'
    },

    attributes: {
      shooting: [
        { label: '急停干拔三分', val: 86 },
        { label: '中距离后撤步', val: 84 },
        { label: '接球定点出手', val: 83 },
        { label: '关键罚球把握', val: 82 }
      ],
      finishing: [
        { label: '超音速折叠暴扣', val: 96 },
        { label: '突破换手上篮', val: 91 },
        { label: '空中对抗悬停', val: 90 },
        { label: '快攻快下反击', val: 95 }
      ],
      playmaking: [
        { label: '突破吸引分球', val: 80 },
        { label: '运球变向变速', val: 90 },
        { label: '人球结合灵动', val: 88 },
        { label: '出球稳定性', val: 74 }
      ],
      defense: [
        { label: '后场换防敏捷', val: 78 },
        { label: '传球路线截断', val: 75 },
        { label: '后场冲板助推', val: 74 },
        { label: '阵地单防抗压', val: 71 }
      ],
      athleticism: [
        { label: '极限冲刺启动', val: 97 },
        { label: '垂直极限弹跳', val: 96 },
        { label: '横移爆发力', val: 92 },
        { label: '体能持久巡航', val: 87 }
      ]
    },

    badges: [
      {
        name: '极速第一步 (Quick First Step+)',
        type: 'gold',
        icon: 'Zap',
        desc: '持球三威胁启动瞬间爆发力位列全联盟前茅，单挑防守人难以靠单兵跟防。'
      },
      {
        name: '终极滑翔机 (Acrobatic Finisher+)',
        type: 'gold',
        icon: 'Plane',
        desc: '擅长在禁区长人头上展现令人叹为观止的折叠换手与拉杆上篮。'
      },
      {
        name: '微波炉手感 (Microwave Flame)',
        type: 'silver',
        icon: 'Flame',
        desc: '单节得分爆发力极其惊人，曾多次在落后时凭借连续三分直接打崩防守。'
      }
    ],

    scoutingReport: {
      summary: '格林具备历史级别的运动天赋与极其顺滑的得分爆发力。在乌度卡严格的防守战术锤炼下，防守积极性与篮板冲抢显著提升，当他投篮准星在线时，就是不可阻挡的外线大杀器。',
      pros: ['全联盟顶尖的第一步启动与弹跳', '撕裂防线造杀伤能力', '40+单场得分爆发力'],
      cons: ['投篮手感起伏度有待磨练', '高对抗下的终结护球细节需精进']
    },

    courtCoordinates: { x: 78, y: 55 }, // Right wing
    synergyPartner: 'smith',
    synergyLabel: '内外齐射双星'
  },

  {
    id: 'vanvleet',
    name: '弗雷德·范弗利特',
    nameEn: 'Fred VanVleet',
    jerseyNumber: '5',
    position: 'PG',
    positionName: '控球后卫 / 战术大脑',
    ovr: 84,
    stars: 5,
    rarityBadge: 'PLATINUM GENERAL',
    rarityBadgeZh: '白金统帅 · 冠军领航者',
    rarityTier: 'platinum',
    themeColor: '#38BDF8',
    accentGradient: 'from-sky-400 via-cyan-500 to-blue-700',
    cardBorder: 'border-cyan-400/80 shadow-[0_0_25px_rgba(56,189,248,0.45)]',
    photo: '/players/vanvleet.png',
    nation: '美国',
    nationFlag: '🇺🇸',
    nickname: '范乔丹 / 稳健大脑 / 冠军控卫',
    age: 30,
    height: '183 cm (6\'0")',
    weight: '89 kg (197 lbs)',
    wingspan: '188 cm (6\'2")',
    draft: '2016年 传奇落选秀逆袭',
    experience: '9年 夺冠功勋老将',
    roleTag: '火箭场上第一指挥官',

    faceStats: [
      { label: 'OFF', name: '进攻', value: 83, highlight: false },
      { label: 'DEF', name: '防守', value: 84, highlight: true },
      { label: 'SHT', name: '投射', value: 85, highlight: true },
      { label: 'PAS', name: '组织', value: 88, highlight: true },
      { label: 'REB', name: '篮板', value: 68, highlight: false },
      { label: 'PHY', name: '体能', value: 79, highlight: false },
    ],

    radar: [
      { dimension: '禁区终结', value: 76, full: 100 },
      { dimension: '外线投射', value: 87, full: 100 },
      { dimension: '传球发牌', value: 91, full: 100 },
      { dimension: '防守护框', value: 81, full: 100 },
      { dimension: '篮板冲抢', value: 66, full: 100 },
      { dimension: '战术大脑', value: 95, full: 100 },
    ],

    seasonStats: {
      ppg: '17.4',
      rpg: '3.8',
      apg: '8.1',
      spg: '1.4',
      bpg: '0.8',
      fgPct: '41.6%',
      threePct: '38.7%',
      ftPct: '86.0%',
      tsPct: '56.2%',
      plusMinus: '+5.1'
    },

    attributes: {
      shooting: [
        { label: '定点及干拔三分', val: 88 },
        { label: 'Logo超远三分', val: 86 },
        { label: '冷血关键球罚球', val: 89 },
        { label: '挡拆抛投中距离', val: 81 }
      ],
      finishing: [
        { label: '抗对抗拉杆上篮', val: 80 },
        { label: '节奏变换小抛投', val: 82 },
        { label: '造外线投篮犯规', val: 88 },
        { label: '借掩护急停急起', val: 85 }
      ],
      playmaking: [
        { label: '挡拆出球视野', val: 93 },
        { label: '超低助攻失误比', val: 95 },
        { label: '半场战术呼叫', val: 96 },
        { label: '快慢节奏掌控', val: 92 }
      ],
      defense: [
        { label: '鬼手切球断球', val: 92 },
        { label: '造进攻犯规站位', val: 94 },
        { label: '下盘死顶低位', val: 86 },
        { label: '防守呼应沟通', val: 95 }
      ],
      athleticism: [
        { label: '下盘扎实对抗', val: 86 },
        { label: '连续出场铁人体魄', val: 91 },
        { label: '敏捷横移回防', val: 80 },
        { label: '瞬间反应神经', val: 89 }
      ]
    },

    badges: [
      {
        name: '十美分指挥官 (Dimer+)',
        type: 'gold',
        icon: 'Compass',
        desc: '极其珍惜球权，联盟首屈一指的助攻失误比（>4:1），让年轻队友在舒服位置接球。'
      },
      {
        name: '鬼魅截球手 (Interceptor+)',
        type: 'gold',
        icon: 'Hand',
        desc: '矮壮控卫的典范，敏锐嗅出对手传球意图，切球极其干净狠辣。'
      },
      {
        name: '冷血大心脏 (Clutch General)',
        type: 'silver',
        icon: 'ShieldAlert',
        desc: '第四节最后两分钟拥有极高三分命中率与罚球绝杀神经。'
      }
    ],

    scoutingReport: {
      summary: '范弗利特是年轻火箭的真正舵手。虽然受制于身高没有炸裂运动力，但他用极高的篮球智商、扎实下盘顶防、精准三分以及老辣的控场为火箭注入了久违的赢球文化。',
      pros: ['历史级别的助攻失误比', '高产高质的外线超远三分', '更衣室话语权与总冠军铁血经验'],
      cons: ['内线攻筐终结受制于身高', '面对高大长臂后卫存在封盖风险']
    },

    courtCoordinates: { x: 50, y: 78 }, // Top of the key / PG
    synergyPartner: 'sengun',
    synergyLabel: '挡拆战术发动机'
  },

  {
    id: 'smith',
    name: '小贾巴里·史密斯',
    nameEn: 'Jabari Smith Jr.',
    jerseyNumber: '10',
    position: 'PF',
    positionName: '大前锋 / 空间高炮台',
    ovr: 82,
    stars: 5,
    rarityBadge: 'EMERALD TITAN',
    rarityBadgeZh: '翡翠重炮 · 空间防守铁锁',
    rarityTier: 'emerald',
    themeColor: '#10B981',
    accentGradient: 'from-emerald-400 via-teal-500 to-green-700',
    cardBorder: 'border-emerald-400/80 shadow-[0_0_25px_rgba(16,185,129,0.45)]',
    photo: '/players/smith.png',
    nation: '美国',
    nationFlag: '🇺🇸',
    nickname: '空间高射炮 / 小史密斯',
    age: 21,
    height: '211 cm (6\'11")',
    weight: '100 kg (220 lbs)',
    wingspan: '216 cm (7\'1")',
    draft: '2022年 首轮第3顺位 (探花)',
    experience: '3年 NBA球龄',
    roleTag: '极致空间与无限换防基石',

    faceStats: [
      { label: 'OFF', name: '进攻', value: 80, highlight: false },
      { label: 'DEF', name: '防守', value: 85, highlight: true },
      { label: 'SHT', name: '投射', value: 85, highlight: true },
      { label: 'PAS', name: '组织', value: 66, highlight: false },
      { label: 'REB', name: '篮板', value: 84, highlight: true },
      { label: 'PHY', name: '体能', value: 83, highlight: false },
    ],

    radar: [
      { dimension: '禁区终结', value: 79, full: 100 },
      { dimension: '外线投射', value: 88, full: 100 },
      { dimension: '传球发牌', value: 64, full: 100 },
      { dimension: '防守扫荡', value: 87, full: 100 },
      { dimension: '篮板保护', value: 86, full: 100 },
      { dimension: '敏捷体能', value: 84, full: 100 },
    ],

    seasonStats: {
      ppg: '13.7',
      rpg: '8.1',
      apg: '1.6',
      spg: '0.7',
      bpg: '0.8',
      fgPct: '45.4%',
      threePct: '36.3%',
      ftPct: '81.1%',
      tsPct: '56.8%',
      plusMinus: '+3.0'
    },

    attributes: {
      shooting: [
        { label: '接球定点三分', val: 89 },
        { label: '底角狙击命中', val: 90 },
        { label: '高弧度干拔跳投', val: 86 },
        { label: '翻身后仰中投', val: 82 }
      ],
      finishing: [
        { label: '空接吃饼暴扣', val: 86 },
        { label: '二次前板补篮', val: 84 },
        { label: '直线突破扣篮', val: 80 },
        { label: '造犯规靠打', val: 75 }
      ],
      playmaking: [
        { label: '转移底角快传', val: 72 },
        { label: '高位安全过渡球', val: 75 },
        { label: '无球战术掩护', val: 84 },
        { label: '失误控制能力', val: 82 }
      ],
      defense: [
        { label: '大防小横移换防', val: 88 },
        { label: '协防弱侧大帽', val: 84 },
        { label: '后场篮板死守', val: 87 },
        { label: '防守对抗硬度', val: 83 }
      ],
      athleticism: [
        { label: '长臂防守覆盖面积', val: 92 },
        { label: '全场冲刺跟进', val: 83 },
        { label: '弹速与弹跳高度', val: 85 },
        { label: '核心抗击打', val: 81 }
      ]
    },

    badges: [
      {
        name: '高空拦截机 (Switch Stopper+)',
        type: 'gold',
        icon: 'Shield',
        desc: '兼具2米11的身高与后卫般横移，能在换防至对方顶级持球后卫时完全封死其出手路线。'
      },
      {
        name: '空间高射炮 (Catch & Shoot+)',
        type: 'gold',
        icon: 'Target',
        desc: '极其纯正的高出手点投篮机制，防守人难以对其定点三分形成有效指尖干扰。'
      },
      {
        name: '底角杀手 (Corner Specialist)',
        type: 'silver',
        icon: 'Crosshair',
        desc: '在左右两侧底角三分准心极其惊人，是火箭进攻拉扯内线空间的利刃。'
      }
    ],

    scoutingReport: {
      summary: '小贾巴里完美契合现代小球时代对极致3&D大前锋的终极想象。他的高射炮投篮让申京与格林在禁区拥有宽阔进攻通道，同时在防守端能够无缝执行1至5号位无限换防。',
      pros: ['稀有的2米11高炮台投射', '换防小个子后卫的敏捷横移', '凶猛的后场篮板保护'],
      cons: ['自主持球单打运球重心稍高', '对抗后核心发力仍在稳步增肌中']
    },

    courtCoordinates: { x: 74, y: 32 }, // Right corner / elbow
    synergyPartner: 'brooks',
    synergyLabel: '锋线防守铁幕'
  },

  {
    id: 'brooks',
    name: '狄龙·布鲁克斯',
    nameEn: 'Dillon Brooks',
    jerseyNumber: '9',
    position: 'SF',
    positionName: '小前锋 / 铁血恶犬',
    ovr: 81,
    stars: 5,
    rarityBadge: 'OBSIDIAN LOCK',
    rarityBadgeZh: '黑曜恶犬 · 外线窒息铁闸',
    rarityTier: 'obsidian',
    themeColor: '#8B5CF6',
    accentGradient: 'from-purple-500 via-indigo-600 to-slate-900',
    cardBorder: 'border-purple-500/80 shadow-[0_0_25px_rgba(139,92,246,0.45)]',
    photo: '/players/brooks.png',
    nation: '加拿大',
    nationFlag: '🇨🇦',
    nickname: '恶犬 / 铁血狄龙 / 心理战大师',
    age: 28,
    height: '198 cm (6\'6")',
    weight: '102 kg (225 lbs)',
    wingspan: '198 cm (6\'6")',
    draft: '2017年 次轮第45顺位',
    experience: '8年 最佳防守一阵猛将',
    roleTag: '锁死对方头号核心的领防死士',

    faceStats: [
      { label: 'OFF', name: '进攻', value: 79, highlight: false },
      { label: 'DEF', name: '防守', value: 91, highlight: true },
      { label: 'SHT', name: '投射', value: 81, highlight: false },
      { label: 'PAS', name: '组织', value: 71, highlight: false },
      { label: 'REB', name: '篮板', value: 70, highlight: false },
      { label: 'PHY', name: '体能', value: 88, highlight: true },
    ],

    radar: [
      { dimension: '禁区终结', value: 77, full: 100 },
      { dimension: '外线投射', value: 82, full: 100 },
      { dimension: '传球发牌', value: 70, full: 100 },
      { dimension: '全场领防', value: 95, full: 100 },
      { dimension: '篮板拼抢', value: 71, full: 100 },
      { dimension: '铁血对抗', value: 93, full: 100 },
    ],

    seasonStats: {
      ppg: '12.7',
      rpg: '3.4',
      apg: '1.7',
      spg: '0.9',
      bpg: '0.3',
      fgPct: '42.8%',
      threePct: '35.9%',
      ftPct: '84.4%',
      tsPct: '53.5%',
      plusMinus: '+2.8'
    },

    attributes: {
      shooting: [
        { label: '接球定点空位三分', val: 84 },
        { label: '急停中距离跳投', val: 82 },
        { label: '强投硬解冷箭', val: 81 },
        { label: '稳定罚球命中', val: 85 }
      ],
      finishing: [
        { label: '借掩护切入打板', val: 80 },
        { label: '贴身对抗上篮', val: 82 },
        { label: '快攻反击终结', val: 79 },
        { label: '反击假动作造杀伤', val: 78 }
      ],
      playmaking: [
        { label: '外线强侧转移', val: 74 },
        { label: '侧翼战术挡拆', val: 75 },
        { label: '失误控制与纪律', val: 78 },
        { label: '阵地无球跑位', val: 81 }
      ],
      defense: [
        { label: '全场撕咬贴身领防', val: 96 },
        { label: '身体对抗挤过掩护', val: 94 },
        { label: '心理激怒与干扰', val: 96 },
        { label: '造进攻犯规与抢断', val: 89 }
      ],
      athleticism: [
        { label: '重型前锋对抗吨位', val: 93 },
        { label: '下盘死顶无惧强突', val: 94 },
        { label: '全场无休飞扑救球', val: 95 },
        { label: '敏捷回身脚步', val: 86 }
      ]
    },

    badges: [
      {
        name: '全场撕咬锁链 (Lockdown Clamps+)',
        type: 'gold',
        icon: 'Lock',
        desc: 'NBA最佳防守一阵成员，从后场底线开始施加令人窒息的身体对抗与手部干扰。'
      },
      {
        name: '情绪点火器 (Team Catalyst+)',
        type: 'gold',
        icon: 'Activity',
        desc: '球场恶汉与精神领袖，用极其顽强的肉搏防守点燃休斯顿丰田中心的战斗热血。'
      },
      {
        name: '强投冷箭 (Contested Maker)',
        type: 'silver',
        icon: 'Crosshair',
        desc: '关键进攻时段不畏惧任何对抗，敢于命中打破僵局的高难度跳投。'
      }
    ],

    scoutingReport: {
      summary: '狄龙是休斯顿火箭防守文化蜕变的最关键图腾。他每场比赛都负责领防对手最强超巨（库里、东契奇、亚历山大等），其强硬的对抗与心理战术彻底改变了过去火箭年轻阵容的松散气质。',
      pros: ['联盟顶尖的一对一单兵外线领防', '极强的更衣室硬度与防守领导力', '强硬的高对抗身体条件'],
      cons: ['进攻端偶有不理智的追身强投', '容易陷入犯规麻烦与技术犯规']
    },

    courtCoordinates: { x: 24, y: 52 }, // Left wing / SF
    synergyPartner: 'smith',
    synergyLabel: '外线锁喉大闸'
  }
];

// Team Overall Synopsis
export const TEAM_SYNOPSIS = {
  teamNameZh: '休斯顿火箭队',
  teamNameEn: 'Houston Rockets',
  arena: '丰田中心球馆 (Toyota Center)',
  coach: '伊梅·乌度卡 (Ime Udoka)',
  startingFiveOvrAverage: 84.4,
  systemIdentity: '防守立足 · 空间拉开 · 申京高位轴心 · 青年风暴',
  chemistryLevel: '100% 完美羁绊',
  tacticalTraits: [
    { title: '一五号位挡拆轴心', desc: '申京 + 范弗利特形成绝妙的挡拆发起与手递手战术' },
    { title: '外线铁锁领防', desc: '狄龙 + 范乔丹构成外线窒息压迫，挤过掩护破坏传球' },
    { title: '无限换防与空间高炮', desc: '小贾巴里2米11的身高横扫外线并提供致命底角三分' },
    { title: '超音速攻防转换', desc: '杰伦·格林利用历史级运动天赋在反击中撕裂阵型' }
  ]
};
