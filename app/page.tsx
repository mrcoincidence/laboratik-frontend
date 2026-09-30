"use client";

import Link from "next/link";
import { 
  Users, 
  TrendingUp, 
  Rocket, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  Smile,
  MessageSquareHeart
} from "lucide-react";
import { useState } from "react";

// --- 1. Hero 右側：人が活発に対話・コラボレーションする有機質イラスト ---
function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto p-2 flex items-center justify-center">
      {/* メインカードコンテナ */}
      <div className="relative w-full bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-rose-200/80 shadow-2xl shadow-rose-950/10 p-6 flex flex-col justify-between">
        
        {/* 浮遊バッジ 1（カード内上部） */}
        <div className="mb-4 bg-gradient-to-r from-[#FFF0F5] to-[#F3E5F5] p-3.5 rounded-2xl border border-rose-200 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#7b3789] shrink-0">
            <MessageSquareHeart size={16} />
          </div>
          <div>
            <p className="text-[10px] text-[#7b3789] font-extrabold tracking-wider uppercase">EMPLOYEE VOICE</p>
            <p className="text-xs font-bold text-[#2B232A]">「1on1で本音が話せました！」</p>
          </div>
        </div>

        {/* センターステージ：Culture Ampスタイルの「人と対話」ベクターイラスト */}
        <div className="my-2 relative flex justify-center items-center py-2">
          <svg className="w-full h-44" viewBox="0 0 280 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="140" cy="85" r="60" fill="url(#hero-bg-grad)" fillOpacity="0.5" />
            
            {/* 左の人物（女性・ノートPC・対話） */}
            <g transform="translate(35, 40)">
              <path d="M25 75 C25 60 38 50 50 50 C62 50 75 60 75 75 L75 90 H25 Z" fill="#7b3789" fillOpacity="0.85" />
              <circle cx="50" cy="35" r="15" fill="#FFE0B2" />
              <path d="M36 32 C36 20 44 15 54 15 C64 15 65 25 64 36 C58 32 46 32 36 32 Z" fill="#2B232A" />
              <path d="M40 70 H65 L60 80 H35 Z" fill="#2ECDDF" />
            </g>

            {/* 右の人物（男性・笑顔で共感） */}
            <g transform="translate(155, 40)">
              <path d="M25 75 C25 58 38 48 50 48 C62 48 75 58 75 75 L75 90 H25 Z" fill="#2ECDDF" />
              <circle cx="50" cy="33" r="15" fill="#FFCC80" />
              <path d="M38 28 C38 18 48 16 58 20 C62 25 58 32 58 32 C48 30 42 32 38 28 Z" fill="#2B232A" />
              <path d="M20 60 C25 50 30 45 35 52" stroke="#FFCC80" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* 中央の繋がり点線とハート */}
            <path d="M85 75 Q 140 35 195 75" stroke="#7b3789" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
            
            <g transform="translate(125, 38)">
              <rect x="0" y="0" width="30" height="24" rx="12" fill="#FDF2F5" stroke="#E879F9" strokeWidth="1.5" />
              <path d="M15 15 C15 13 12 11 10 13 C7 15 10 19 15 22 C20 19 23 15 20 13 C18 11 15 13 15 15 Z" fill="#7b3789" />
            </g>

            <defs>
              <linearGradient id="hero-bg-grad" x1="80" y1="25" x2="200" y2="145" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDF2F5" />
                <stop offset="0.5" stopColor="#E1F5FE" />
                <stop offset="1" stopColor="#F3E5F5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 浮遊バッジ 2（カード内下部） */}
        <div className="mt-2 bg-gradient-to-r from-[#E0F7FA] to-[#FFF0F5] p-3.5 rounded-2xl border border-cyan-200 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#7b3789] shrink-0">
            <Smile size={16} />
          </div>
          <div>
            <p className="text-[10px] text-[#7b3789] font-extrabold tracking-wider uppercase">TEAM CULTURE</p>
            <p className="text-xs font-bold text-[#2B232A]">相互の感謝が可視化されて嬉しい</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// 2. カードイラスト 1: 組織内エンゲージメント
function EngagementCardIllustration() {
  return (
    <div className="w-full h-32 bg-gradient-to-br from-[#FFF0F5] via-[#F3E5F5] to-[#E0F7FA] rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-rose-200/80">
      <svg className="w-full h-full" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="45" r="35" fill="#2ECDDF" fillOpacity="0.3" />
        <circle cx="70" cy="45" r="25" fill="#7b3789" fillOpacity="0.25" />
        <circle cx="130" cy="45" r="25" fill="#FDF2F5" />
        <rect x="75" y="25" width="50" height="35" rx="12" fill="white" className="shadow-sm" />
        <path d="M100 38 C100 35, 95 32, 92 35 C88 38, 92 44, 100 48 C108 44, 112 38, 108 35 C105 32, 100 35, 100 38 Z" fill="#7b3789" />
      </svg>
    </div>
  );
}

// 3. カードイラスト 2: 人事マネジメント戦略
function StrategyCardIllustration() {
  return (
    <div className="w-full h-32 bg-gradient-to-br from-[#F3E5F5] via-[#FFF0F5] to-[#E0F7FA] rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-purple-200/80">
      <svg className="w-full h-full" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 65 L70 50 L110 58 L160 25" stroke="#7b3789" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="3 3" />
        <path d="M30 65 L70 50 L110 58 L160 25 L160 75 L30 75 Z" fill="#7b3789" fillOpacity="0.15" />
        <circle cx="160" cy="25" r="8" fill="#2ECDDF" />
        <circle cx="110" cy="58" r="6" fill="#7b3789" />
        <circle cx="70" cy="50" r="6" fill="#E879F9" />
      </svg>
    </div>
  );
}

// 4. カードイラスト 3: 新規事業立ち上げ支援
function LaunchCardIllustration() {
  return (
    <div className="w-full h-32 bg-gradient-to-br from-[#E0F7FA] via-[#F3E5F5] to-[#FFF0F5] rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-cyan-200/80">
      <svg className="w-full h-full" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="55" width="35" height="20" rx="6" fill="#7b3789" fillOpacity="0.25" />
        <rect x="80" y="45" width="35" height="30" rx="6" fill="#2ECDDF" fillOpacity="0.35" />
        <rect x="120" y="30" width="35" height="45" rx="6" fill="#7b3789" fillOpacity="0.8" />
        <path d="M137 15 L143 25 H131 Z" fill="#2ECDDF" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = "https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/logo.png";
  const cultureAmpMvUrl = "https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/mv.jpg";

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#2B232A] font-sans selection:bg-[#FDF2F5] selection:text-[#7b3789] overflow-x-hidden">
      {/* 1. Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src={logoUrl} 
              alt="Laboratik" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-medium tracking-wider">
            <Link href="/service" className="hover:text-[#7b3789] transition-colors">Service</Link>
            <Link href="/platform" className="hover:text-[#7b3789] transition-colors">Platform</Link>
            <Link href="/company" className="hover:text-[#7b3789] transition-colors">Company</Link>
            <Link 
              href="/company#contact" 
              className="bg-gradient-to-r from-[#7b3789] to-[#9b49a8] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#7b3789]/20 transition-all text-xs font-semibold tracking-wider"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#2B232A] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-rose-100 px-6 py-8 space-y-5">
            <Link href="/service" className="block text-[#2B232A] font-medium tracking-wide">Service</Link>
            <Link href="/platform" className="block text-[#2B232A] font-medium tracking-wide">Platform</Link>
            <Link href="/company" className="block text-[#2B232A] font-medium tracking-wide">Company</Link>
            <Link 
              href="/company#contact" 
              className="block w-full text-center bg-[#7b3789] text-white py-3 rounded-full font-medium tracking-wider text-sm shadow-md"
            >
              お問い合わせ
            </Link>
          </div>
        )}
      </header>

      {/* 2. Hero Section（100%フルブリード構造で1500px以上でも切れ目なし） */}
      <section className="w-full pt-32 pb-24 relative overflow-hidden bg-[#FAF8F6]">
        
        {/* ★100vw全体に自然拡散する円形フェードオーラ（四角い境界線が完全に消滅） */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* 左側テキスト領域を包み込むソフトなパステルグラデーションオーブ */}
          <div className="absolute top-1/2 left-[5%] md:left-[15%] -translate-y-1/2 w-[600px] lg:w-[750px] h-[450px] bg-gradient-to-tr from-[#FDE8EE] via-[#F3E5F5] to-[#E0F7FA] rounded-full blur-[90px] opacity-80" />
          
          {/* 右側イラスト領域の補助オーブ */}
          <div className="absolute top-1/3 right-[5%] w-[450px] lg:w-[550px] h-[400px] bg-gradient-to-bl from-[#E0F7FA] via-[#F3E5F5] to-[#FDE8EE] rounded-full blur-[100px] opacity-70" />

          {/* 100%全幅で流れる波線・ドット装飾 */}
          <svg className="w-full h-full absolute inset-0 opacity-40" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
            <path d="M -100 320 Q 350 180 720 300 T 1540 220" stroke="#7b3789" strokeWidth="2.5" strokeDasharray="6 6" />
            <circle cx="12%" cy="18%" r="12" fill="#2ECDDF" opacity="0.6" />
            <circle cx="48%" cy="12%" r="16" fill="#7b3789" opacity="0.25" />
            <circle cx="88%" cy="25%" r="14" fill="#E879F9" opacity="0.4" />
          </svg>
        </div>

        {/* コンテンツ本体（中央寄せ） */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* 左側：コピー＆説明 */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-xs font-medium text-[#7b3789] mb-8 shadow-xs backdrop-blur-sm">
                <Sparkles size={14} className="text-[#2ECDDF]" />
                <span>Culture Amp 日本正規販売代理店</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide leading-[1.25] mb-8 text-[#2B232A]">
                しなやかに、強く。<br />
                <span className="bg-gradient-to-r from-[#7b3789] via-[#9b49a8] to-[#2ECDDF] bg-clip-text text-transparent">
                  対話とデータで華やぐ
                </span>
                <br />組織の未来へ。
              </h1>

              <p className="text-base sm:text-lg text-[#6E656B] leading-relaxed mb-10 tracking-wide font-normal max-w-2xl">
                Laboratikは、世界基準のエンゲージメントプラットフォーム「Culture Amp」のデータと、日本企業に寄り添う人の専門性を融合。一人ひとりが自分らしく輝く、温かく強い組織づくりを伴走します。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/service" 
                  className="inline-flex items-center justify-center gap-3 bg-[#2B232A] text-white px-9 py-4 rounded-full font-medium text-sm tracking-wider hover:bg-[#7b3789] transition-all shadow-xl shadow-[#2B232A]/10 hover:shadow-[#7b3789]/20"
                >
                  サービスを見る <ArrowRight size={16} />
                </Link>
                <Link 
                  href="/platform" 
                  className="inline-flex items-center justify-center gap-2 border border-rose-200 bg-white/90 backdrop-blur-sm px-9 py-4 rounded-full text-sm font-medium tracking-wider hover:border-[#2ECDDF] hover:text-[#7b3789] transition-all shadow-xs"
                >
                  Culture Ampについて
                </Link>
              </div>
            </div>

            {/* 右側：連動イラスト */}
            <div className="lg:col-span-5">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Summary Section */}
      <section className="py-24 bg-white/80 backdrop-blur-sm border-y border-rose-100/60 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7b3789] mb-3 block">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-[#2B232A]">
              人事によりそう、3つのソリューション
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-xl shadow-rose-950/[0.02] hover:shadow-2xl hover:shadow-rose-950/[0.06] transition-all hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <EngagementCardIllustration />
                <div className="mt-6 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#7b3789] font-bold text-sm">
                    01
                  </div>
                  <h3 className="text-xl font-bold tracking-wide">組織内エンゲージメント</h3>
                </div>
                <p className="text-[#6E656B] text-sm leading-relaxed mb-6 font-normal">
                  働く人の声を大切に拾い上げるサーベイ運用と、組織の温度感を高める継続的な改善アクションの伴走支援を行ないます。
                </p>
              </div>
              <Link href="/service#engagement" className="text-xs font-bold text-[#7b3789] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all pt-2">
                詳しく見る <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-xl shadow-rose-950/[0.02] hover:shadow-2xl hover:shadow-rose-950/[0.06] transition-all hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <StrategyCardIllustration />
                <div className="mt-6 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-[#7b3789] font-bold text-sm">
                    02
                  </div>
                  <h3 className="text-xl font-bold tracking-wide">人事マネジメント戦略</h3>
                </div>
                <p className="text-[#6E656B] text-sm leading-relaxed mb-6 font-normal">
                  感覚に頼らないデータ主導の評価・育成制度を構築。経営の思いと従業員の想いが美しく調和する組織設計をサポートします。
                </p>
              </div>
              <Link href="/service#strategy" className="text-xs font-bold text-[#7b3789] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all pt-2">
                詳しく見る <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-xl shadow-rose-950/[0.02] hover:shadow-2xl hover:shadow-rose-950/[0.06] transition-all hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <LaunchCardIllustration />
                <div className="mt-6 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#7b3789] font-bold text-sm">
                    03
                  </div>
                  <h3 className="text-xl font-bold tracking-wide">新規事業立ち上げ支援</h3>
                </div>
                <p className="text-[#6E656B] text-sm leading-relaxed mb-6 font-normal">
                  事業の拡大期に必要なバックオフィス基盤やビジネスアドミンの整理まで、スピード感を持って丁寧にサポートします。
                </p>
              </div>
              <Link href="/service#support" className="text-xs font-bold text-[#7b3789] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all pt-2">
                詳しく見る <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Platform Banner (Culture Amp / 指定画像付きレイアウト) */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#FFF0F5] via-[#F3E5F5] to-[#E0F7FA] rounded-[2.5rem] p-9 md:p-14 border border-rose-200/60 relative overflow-hidden shadow-xl shadow-rose-950/5">
          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* 左側：テキスト説明 */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#7b3789] block">
                OFFICIAL PARTNER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-wide text-[#2B232A]">
                世界7,000社が選ぶSaaS<br />
                「Culture Amp」正規販売代理店
              </h2>
              <p className="text-[#6E656B] leading-relaxed text-sm sm:text-base tracking-wide font-normal">
                グローバルで実証された科学的なエンゲージメントデータと、Laboratikが培ってきた日本企業の風土に寄り添う丁寧なサポートで、実効性の高い人事変革をもたらします。
              </p>
              
              <div className="space-y-3 text-sm text-[#2B232A] font-medium pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/90 shadow-xs flex items-center justify-center text-[#7b3789] shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>世界基準のベンチマークデータに基づいた現状分析</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/90 shadow-xs flex items-center justify-center text-[#7b3789] shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>日本企業の文化に合わせたローカライズ導入＆継続サポート</span>
                </div>
              </div>

              <Link 
                href="/platform" 
                className="inline-flex items-center gap-3 bg-[#7b3789] text-white font-bold px-8 py-4 rounded-full text-sm tracking-wider hover:bg-[#2B232A] transition-all shadow-md shadow-[#7b3789]/20"
              >
                プラットフォーム詳細を見る <ArrowRight size={16} />
              </Link>
            </div>

            {/* 右側：指定のCulture Ampビジュアル画像 (mv.jpg) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />
                <img 
                  src={cultureAmpMvUrl} 
                  alt="Culture Amp Official Platform" 
                  className="relative rounded-2xl w-full h-auto object-cover shadow-lg border border-white/80" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-white border-t border-rose-100/80 pt-20 pb-12 px-6 md:px-10 text-[#2B232A]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <img src={logoUrl} alt="Laboratik" className="h-8 w-auto object-contain" />
            <p className="text-[#6E656B] text-sm max-w-sm leading-relaxed tracking-wide font-normal">
              対話とデータで人と組織の可能性を開花させる、HRソリューションカンパニー。
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7b3789] mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm text-[#6E656B] tracking-wide">
              <li><Link href="/service" className="hover:text-[#7b3789] transition-colors">Service</Link></li>
              <li><Link href="/platform" className="hover:text-[#7b3789] transition-colors">Platform</Link></li>
              <li><Link href="/company" className="hover:text-[#7b3789] transition-colors">Company</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7b3789] mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-[#6E656B] tracking-wide">
              <li><Link href="/privacy" className="hover:text-[#7b3789] transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/security" className="hover:text-[#7b3789] transition-colors">情報セキュリティ方針</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-rose-100 text-xs text-[#6E656B]/70 text-center tracking-wider">
          © {new Date().getFullYear()} Laboratik Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}