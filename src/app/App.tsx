import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  Eye, 
  Rocket, 
  Wand2, 
  GripVertical, 
  Hand, 
  ZoomIn, 
  MapPin, 
  Play, 
  Pause, 
  CheckCircle2, 
  Circle,
  MessageSquare,
  Target,
  Camera,
  Check,
  Map as MapIcon,
  Layers,
  MousePointer2
} from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-50 text-slate-800 font-sans overflow-hidden select-none">
      
      {/* 1. Top Navbar (Clean & Minimal) */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-5 shrink-0 z-30 shadow-sm">
        {/* Left: Logo & Breadcrumbs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
              <BookOpen size={16} className="text-white" />
            </div>
            <span className="font-bold text-slate-800 text-[15px] tracking-wide">
              史图 AI <span className="text-slate-400 font-medium mx-1">-</span> 教师创作台
            </span>
          </div>
          
          <div className="h-4 w-px bg-slate-300 mx-2"></div>
          
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">我的课件库</span>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">八年级上册</span>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">斯大林格勒战役</span>
          </div>
        </div>
        
        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <CheckCircle2 size={12} className="text-green-500" />
            已保存草稿
          </span>
          
          <div className="flex items-center gap-2.5">
            <button className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 hover:border-slate-300 text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm">
              <Eye size={16} className="text-slate-400" />
              <span>预览学生端</span>
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/20">
              <Rocket size={16} />
              <span>发布到课堂</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. Left Column (AI Copilot & Outline - 300px width) */}
        <aside className="w-[300px] bg-white border-r border-slate-200 flex flex-col shrink-0 z-20 shadow-[2px_0_12px_rgba(0,0,0,0.02)]">
          
          {/* Top section: AI Assistant */}
          <div className="p-4 border-b border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
              <Wand2 size={16} />
              ✨ AI 课文解析助手
            </div>
            
            {/* Fake ContentEditable with highlighted entities */}
            <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-600 min-h-[110px] leading-relaxed shadow-inner">
              <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium cursor-pointer hover:bg-blue-200 transition-colors">1942年秋</span>
              ，德军进攻
              <span className="bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-medium cursor-pointer hover:bg-red-200 transition-colors ml-1">斯大林格勒</span>
              ，企图切断伏尔加河交通线。苏联红军进行了顽强的抵抗...
            </div>
            
            <button className="w-full py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border border-indigo-100 text-sm font-bold flex justify-center items-center gap-2 transition-colors">
              <Wand2 size={16} />
              一键生成 3D 课件
            </button>
          </div>

          {/* Bottom section: Lesson Steps */}
          <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
              <span>教学大纲 (Lesson Steps)</span>
              <span className="bg-slate-100 text-slate-500 px-1.5 rounded text-[10px]">3/3</span>
            </div>
            
            <div className="flex flex-col gap-2">
              {/* Card 1 (Active) */}
              <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-3 flex items-center gap-3 cursor-pointer shadow-sm relative group">
                <GripVertical size={14} className="text-blue-300 cursor-grab" />
                <div className="flex-1">
                  <div className="text-xs font-bold text-blue-500 mb-0.5">步骤 1</div>
                  <div className="text-sm font-bold text-blue-900">兵临城下</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-blue-500 absolute right-3 top-1/2 -translate-y-1/2"></div>
              </div>

              {/* Card 2 (Inactive) */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:border-slate-300 transition-colors group">
                <GripVertical size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 mb-0.5">步骤 2</div>
                  <div className="text-sm font-semibold text-slate-600 flex items-center gap-1.5">
                    <Target size={14} className="text-amber-500" />
                    互动答题 - 统帅部抉择
                  </div>
                </div>
              </div>

              {/* Card 3 (Inactive) */}
              <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:border-slate-300 hover:bg-slate-50 transition-colors group">
                <GripVertical size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 mb-0.5">步骤 3</div>
                  <div className="text-sm font-semibold text-slate-600">天王星行动</div>
                </div>
              </div>
            </div>
            
            <button className="mt-2 text-sm font-medium text-slate-400 hover:text-slate-600 border border-dashed border-slate-300 rounded-xl py-2.5 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors">
              <span>+</span> 添加新步骤
            </button>
          </div>
        </aside>

        {/* 3. Center Canvas (WYSIWYG Map Preview) */}
        <main className="flex-1 flex flex-col bg-slate-100 relative overflow-hidden">
          
          {/* Map Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBtYXAlMjB3aW50ZXIlMjBzbm93JTIwdG9wb2dyYXBoaWN8ZW58MXx8fHwxNzc1MDM2Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")',
              filter: 'brightness(0.9) contrast(1.05)'
            }}
          />

          {/* Map Vector Overlays (Military Arrows) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-lg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <marker id="arrow-red" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#ef4444" />
              </marker>
              <marker id="arrow-blue" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="#3b82f6" />
              </marker>
            </defs>
            
            {/* German Advance */}
            <path d="M 200 200 Q 350 250 450 300" fill="none" stroke="#ef4444" strokeWidth="6" markerEnd="url(#arrow-red)" className="opacity-90" />
            <path d="M 250 450 Q 400 400 450 320" fill="none" stroke="#ef4444" strokeWidth="6" markerEnd="url(#arrow-red)" className="opacity-90" />
            
            {/* Soviet Defense Line */}
            <path d="M 480 250 L 480 400" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
            <g transform="translate(510, 325)">
              <rect x="-30" y="-12" width="60" height="24" fill="#3b82f6" rx="4" />
              <text x="0" y="4" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">斯大林格勒</text>
            </g>
          </svg>

          {/* Floating Top Toolbar (White Pill) */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-200 flex gap-1 p-1.5 z-10">
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors" title="选择 (Select)">
              <MousePointer2 size={18} />
            </button>
            <button className="p-2 rounded-full bg-blue-50 text-blue-600 transition-colors" title="鼠标拖拽 (Pan)">
              <Hand size={18} />
            </button>
            <div className="w-px h-5 bg-slate-200 self-center mx-1"></div>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors" title="缩放 (Zoom)">
              <ZoomIn size={18} />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5 pr-3" title="添加地标 (Add Marker)">
              <MapPin size={18} />
              <span className="text-xs font-bold">添加地标</span>
            </button>
          </div>

          {/* Floating Bottom Playback Control (White Pill) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200 flex items-center px-5 py-3 gap-5 z-10 w-[480px]">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 shrink-0"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
            </button>
            
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 cursor-pointer relative">
                {/* Progress Fill */}
                <div className="absolute top-0 left-0 h-full bg-blue-500 w-[35%] rounded-full"></div>
                {/* Playhead */}
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-blue-600 rounded-full shadow-sm" style={{ left: 'calc(35% - 6px)' }}></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400 font-mono">
                <span>00:15</span>
                <span>01:20</span>
              </div>
            </div>
            
            <div className="shrink-0 flex gap-2">
              <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded-md text-xs font-bold">1x 速率</span>
            </div>
          </div>

        </main>

        {/* 4. Right Column (Step Properties Inspector - 300px width) */}
        <aside className="w-[320px] bg-white border-l border-slate-200 flex flex-col shrink-0 z-20 shadow-[-2px_0_12px_rgba(0,0,0,0.02)] overflow-y-auto">
          
          <div className="h-12 border-b border-slate-100 px-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur z-10">
            <span className="font-bold text-sm text-slate-800">当前步骤设置 (Step 1)</span>
          </div>

          <div className="p-5 flex flex-col gap-8">
            
            {/* Section 1: Teacher Narration */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <MessageSquare size={16} className="text-blue-500" />
                📝 侧边栏解说词
              </div>
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-600 h-28 resize-none focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all leading-relaxed placeholder:text-slate-400 shadow-sm"
                defaultValue="同学们，1942年秋天，德军集中了庞大的兵力猛扑向斯大林格勒。这是整场战争中最惨烈的一战..."
              />
            </div>

            <div className="w-full h-px bg-slate-100"></div>

            {/* Section 2: Quiz Config */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Target size={16} className="text-amber-500" />
                🎯 互动提问设置
              </div>
              
              {/* Question */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 ml-1">提问内容</label>
                <input 
                  type="text"
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-400 shadow-sm"
                  defaultValue="如果你是统帅，此时该如何反攻？"
                />
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-slate-500 ml-1">选项设置</label>
                
                {/* Option A */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center shrink-0"></div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-lg flex items-center shadow-sm focus-within:border-blue-400">
                    <span className="w-8 flex items-center justify-center text-xs font-bold text-slate-400 border-r border-slate-100 bg-slate-50 rounded-l-lg h-full py-2">A</span>
                    <input type="text" className="flex-1 bg-transparent border-none text-sm px-3 py-2 focus:outline-none text-slate-700" defaultValue="正面强攻" />
                  </div>
                </div>

                {/* Option B (Correct) */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center shrink-0 shadow-sm">
                    <Check size={12} className="text-white" />
                  </div>
                  <div className="flex-1 bg-green-50 border border-green-300 rounded-lg flex items-center shadow-sm ring-1 ring-green-100">
                    <span className="w-8 flex items-center justify-center text-xs font-bold text-green-600 border-r border-green-200 bg-green-100/50 rounded-l-lg h-full py-2">B</span>
                    <input type="text" className="flex-1 bg-transparent border-none text-sm px-3 py-2 focus:outline-none text-green-800 font-medium" defaultValue="两翼包抄" />
                  </div>
                </div>

                {/* Option C */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center shrink-0"></div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-lg flex items-center shadow-sm focus-within:border-blue-400">
                    <span className="w-8 flex items-center justify-center text-xs font-bold text-slate-400 border-r border-slate-100 bg-slate-50 rounded-l-lg h-full py-2">C</span>
                    <input type="text" className="flex-1 bg-transparent border-none text-sm px-3 py-2 focus:outline-none text-slate-700" defaultValue="撤退" />
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-semibold text-slate-500 ml-1">答案解析</label>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-600 h-20 resize-none focus:outline-none focus:border-blue-400 transition-all shadow-sm"
                  defaultValue="绝佳的战略！这就是天王星行动。通过南北两翼迂回，苏军成功包围了德军。"
                />
              </div>
            </div>

            <div className="w-full h-px bg-slate-100"></div>

            {/* Section 3: Camera Defaults */}
            <div className="space-y-3 pb-6">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Camera size={16} className="text-slate-500" />
                📷 默认视角
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center gap-2 bg-slate-50 border border-slate-200 rounded-xl py-4 hover:border-slate-300 hover:bg-slate-100 transition-colors">
                  <MapIcon size={24} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-600">2D 俯视</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 bg-blue-50 border-2 border-blue-500 rounded-xl py-4 shadow-sm relative">
                  <Layers size={24} className="text-blue-500" />
                  <span className="text-xs font-bold text-blue-700">3D 倾斜</span>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500"></div>
                </button>
              </div>
            </div>

          </div>
        </aside>
      </div>

    </div>
  );
}
