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
  Heart,
  MessageSquareHeart,
  Smile,
  Compass,
  BarChart2
} from "lucide-react";
import { useState } from "react";

// --- Culture Amp風イラストグラフィックコンポーネント群 ---

// Hero用：個と組織の調和と成長を描くグラフィック
function ServiceHeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto p-2 flex items-center justify-center">
      <div className="relative w-full bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-rose-200/80 shadow-2xl shadow-rose-950/10 p-7 flex flex-col justify-between overflow-hidden">
        
        {/* 上部バッジ */}
        <div className="mb-4 bg-gradient-to-r from-[#FFF0F5] to-[#F3E5F5] p-3.5 rounded-2xl border border-rose-200/80 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#7b3789] shrink-0">
            <Compass size={16} />
          </div>
          <div>
            <p className="text-[10px] text-[#7b3789] font-extrabold tracking-wider uppercase">TAILOR-MADE SOLUTION</p>
            <p className="text-xs font-bold text-[#2B232A]">個と組織の可能性を最大化</p>
          </div>
        </div>

        {/* センターステージ：対話と成長のオーガニックイラスト */}
        <div className="my-2 relative flex justify-center items-center py-2">
          <svg className="w-full h-44" viewBox="0 0 280 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="140" cy="85" r="60" fill="url(#service-hero-grad)" fillOpacity="0.5" />
            
            {/* 中央の成長の芽と広がりの波紋 */}
            <path d="M140 135 C140 135 115 100 115 75 C115 50 140 30 140 30 C140 30 165 50 165 75 C165 100 140 135 140 135 Z" fill="#2ECDDF" fillOpacity="0.35" />
            <path d="M140 135 C140 135 100 115 90 85 C80 55 105 35 105 35 C105 35 130 65 140 135 Z" fill="#7b3789" fillOpacity="0.25" />
            
            {/* 対話する2人のピープルノード */}
            <circle cx="65" cy="75" r="18" fill="#7b3789" />
            <circle cx="215" cy="75" r="18" fill="#2ECDDF" />
            <path d="M65 75 L215 75" stroke="#7b3789" strokeWidth="2" strokeDasharray="4 4" />

            <g transform="translate(125, 40)">
              <rect x="0" y="0" width="30" height="24" rx="12" fill="#FDF2F5" stroke="#E879F9" strokeWidth="1.5" />
              <path d="M15 15 C15 13 12 11 10 13 C7 15 10 19 15 22 C20 19 23 15 20 13 C18 11 15 13 15 15 Z" fill="#7b3789" />
            </g>

            <defs>
              <linearGradient id="service-hero-grad" x1="80" y1="25" x2="200" y2="145" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDF2F5" />
                <stop offset="0.5" stopColor="#E1F5FE" />
                <stop offset="1" stopColor="#F3E5F5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 下部バッジ */}
        <div className="mt-2 bg-gradient-to-r from-[#E0F7FA] to-[#FFF0F5] p-3.5 rounded-2xl border border-cyan-200 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#7b3789] shrink-0">
            <Smile size={16} />
          </div>
          <div>
            <p className="text-[10px] text-[#7b3789] font-extrabold tracking-wider uppercase">WELL-BEING & PERFORMANCE</p>
            <p className="text-xs font-bold text-[#2B232A]">生産性と幸せの両立を後押し</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// ソリューション1：スタートアップ支援・新規事業立ち上げイラスト
function StartupSolutionIllustration() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-[#E0F7FA] via-[#F3E5F5] to-[#FFF0F5] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-cyan-200/80 shadow-inner">
      <svg className="w-full h-full max-w-xs" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="100" width="50" height="35" rx="10" fill="#7b3789" fillOpacity="0.2" />
        <rect x="95" y="75" width="50" height="60" rx="10" fill="#2ECDDF" fillOpacity="0.3" />
        <rect x="160" y="45" width="50" height="90" rx="10" fill="#7b3789" fillOpacity="0.8" />
        
        {/* 急成長ロケット / 向上矢印 */}
        <path d="M185 20 L195 38 H175 Z" fill="#2ECDDF" />
        <path d="M40 100 Q 120 70 185 25" stroke="#2ECDDF" strokeWidth="3.5" strokeDasharray="5 5" fill="none" />
        <circle cx="185" cy="25" r="6" fill="#2ECDDF" />
      </svg>
    </div>
  );
}

// ソリューション2：エンゲージメント向上イラスト
function EngagementSolutionIllustration() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-[#FFF0F5] via-[#F3E5F5] to-[#E0F7FA] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-rose-200/80 shadow-inner">
      <svg className="w-full h-full max-w-xs" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="80" r="55" fill="#2ECDDF" fillOpacity="0.2" />
        <circle cx="85" cy="80" r="40" fill="#7b3789" fillOpacity="0.15" />
        <circle cx="155" cy="80" r="40" fill="#FDF2F5" />
        
        {/* 対話吹き出し＆ハート */}
        <rect x="85" y="48" width="70" height="48" rx="16" fill="white" className="shadow-md" />
        <path d="M120 66 C120 62, 113 58, 108 62 C102 66, 108 74, 120 80 C132 74, 138 66, 132 62 C127 58, 120 62, 120 66 Z" fill="#7b3789" />
      </svg>
    </div>
  );
}

// ソリューション3：マネージメント開発イラスト
function ManagementSolutionIllustration() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-[#F3E5F5] via-[#FFF0F5] to-[#E0F7FA] rounded-3xl relative overflow-hidden flex items-center justify-center p-6 border border-purple-200/80 shadow-inner">
      <svg className="w-full h-full max-w-xs" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 120 L80 90 L130 105 L200 45" stroke="#7b3789" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 5" />
        <path d="M30 120 L80 90 L130 105 L200 45 L200 135 L30 135 Z" fill="#7b3789" fillOpacity="0.1" />
        <circle cx="200" cy="45" r="10" fill="#2ECDDF" />
        <circle cx="130" cy="105" r="8" fill="#7b3789" />
        <circle cx="80" cy="90" r="8" fill="#E879F9" />
      </svg>
    </div>
  );
}


export default function ServicePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = "https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/logo.png";

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#2B232A] font-sans selection:bg-[#FDF2F5] selection:text-[#7b3789] overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img src={logoUrl} alt="Laboratik" className="h-8 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-medium tracking-wider">
            <Link href="/service" className="text-[#7b3789] font-bold">Service</Link>
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

      {/* 2. Page Hero / Main Message (コピーの改行を解除・一繋ぎに調整) */}
      <section className="pt-36 pb-20 px-6 md:px-10 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-xs font-medium text-[#7b3789] shadow-xs">
              <Sparkles size={14} className="text-[#2ECDDF]" />
              <span>SOLUTION & SUPPORT</span>
            </div>

            {/* ★ご指示通りコピーの途中の改行（br）を消して一繋ぎに修正 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-[1.3] text-[#2B232A]">
              <span className="bg-gradient-to-r from-[#7b3789] via-[#9b49a8] to-[#2ECDDF] bg-clip-text text-transparent">
                個と組織の『あり方』を追求し、生産性と幸せを後押しします。
              </span>
            </h1>

            <p className="text-[#6E656B] text-base leading-relaxed font-normal space-y-2">
              ラボラティックは、組織開発・成長支援を主事業としています。貴社の業務改善のための時間確保や環境整備、生産性を上げることが事業の躍進を加速させます。
              <br />
              貴社の状況にあわせ、バックオフィス支援やプラットフォーム（Culture Amp）を掛け合わせることで、完全オーダーメイドなご提案をさせていただきます。
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-[#7b3789]">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FFF0F5] border border-rose-200">＃組織開発</span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F3E5F5] border border-purple-200">＃EX向上</span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#E0F7FA] border border-cyan-200">＃バックオフィス支援</span>
            </div>
          </div>

          {/* Hero Visual（Culture Ampスタイルのイラストへ置き換え） */}
          <div className="lg:col-span-5">
            <ServiceHeroIllustration />
          </div>

        </div>
      </section>

      {/* 3. Framework Section (成長フレーム『E-E-Pトライアングル』) */}
      <section className="py-24 bg-white/80 border-y border-rose-100/60 px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7b3789] block">
              GROWTH FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-[#2B232A]">
              3つの支援の基軸となる考え方<br />
              <span className="bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] bg-clip-text text-transparent">
                『E-E-P トライアングル』
              </span>
            </h2>
            <p className="text-[#6E656B] text-sm sm:text-base leading-relaxed">
              『個人』・『組織』・『事業』――これら3つの視点をバランスよく成長させることが、困難を乗り越える強い基盤を持つ組織となります。独自のフレームワークを使って、貴社の成長をサポートします。
            </p>
          </div>

          {/* E-E-P 3つのカード */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* 1. Enable */}
            <div className="bg-[#FAF8F6] p-8 rounded-3xl border border-purple-100/80 shadow-lg shadow-rose-950/[0.02] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#7b3789]">
                  <img src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/solution/icon-01.svg" alt="Enable" className="w-8 h-8 object-contain" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#7b3789] text-[10px] font-extrabold uppercase tracking-widest">
                  Enable
                </div>
                <h3 className="text-xl font-bold text-[#2B232A] tracking-wide">個人の可能性を高める</h3>
                <p className="text-[#6E656B] text-sm leading-relaxed font-normal">
                  個人の特性を把握した育成や、適切な人材配置を検討する仕組みです。特に増員期やミドル層の育成が不可欠な企業様に最適です。
                </p>
              </div>
            </div>

            {/* 2. Engage */}
            <div className="bg-[#FAF8F6] p-8 rounded-3xl border border-rose-100/80 shadow-lg shadow-rose-950/[0.02] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#7b3789]">
                  <img src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/solution/icon-02.svg" alt="Engage" className="w-8 h-8 object-contain" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-rose-100 text-[#7b3789] text-[10px] font-extrabold uppercase tracking-widest">
                  Engage
                </div>
                <h3 className="text-xl font-bold text-[#2B232A] tracking-wide">組織の機動力を高める</h3>
                <p className="text-[#6E656B] text-sm leading-relaxed font-normal">
                  組織の機動力＝チーム運営状況です。弊社監修のアンケートデータ解析をもとに、課題となるボトルネック部分へ的確にアプローチします。
                </p>
              </div>
            </div>

            {/* 3. Perform */}
            <div className="bg-[#FAF8F6] p-8 rounded-3xl border border-cyan-100/80 shadow-lg shadow-rose-950/[0.02] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
              <div className="space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#7b3789]">
                  <img src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/solution/icon-03.svg" alt="Perform" className="w-8 h-8 object-contain" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-[#7b3789] text-[10px] font-extrabold uppercase tracking-widest">
                  Perform
                </div>
                <h3 className="text-xl font-bold text-[#2B232A] tracking-wide">事業の経済性を高める</h3>
                <p className="text-[#6E656B] text-sm leading-relaxed font-normal">
                  独自テンプレートで現状を可視化。どこを引き上げ、何に投資し成長させるのか、事業の経済的成長を多角的に支援します。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Solutions (画像要素をイラストグラフィックに統一) */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto space-y-20">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7b3789] mb-3 block">
            CORE SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-[#2B232A]">
            ラボラティックが得意とするソリューション
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-16">
          
          {/* Solution 1: スタートアップ支援・新規事業立ち上げ */}
          <div id="startup" className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-rose-100/80 shadow-xl shadow-rose-950/[0.03] grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F7FA] text-[#7b3789] text-xs font-bold">
                <Rocket size={14} className="text-[#2ECDDF]" />
                <span>SOLUTION 01</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B232A] tracking-wide">
                スタートアップ支援・新規事業立ち上げ
              </h3>
              <p className="text-[#6E656B] text-sm sm:text-base leading-relaxed font-normal">
                当社は経営の専門知識とデータ解析の力を駆使し、迅速な組織立ち上げをサポートします。弊社が提供する仮説検証に基づくアプローチは、お客様の新規事業やスタートアッププロジェクトに確かな土台を築きます。積極的で効果的なサポートにより、お客様のビジョンを現実のものとし、成功への一歩を踏み出すお手伝いをさせていただきます。
              </p>
              <div className="space-y-3 text-sm text-[#2B232A] font-medium pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#2ECDDF] shrink-0" />
                  <span>仮説検証モデルに基づいた新規事業の組織デザイン</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#2ECDDF] shrink-0" />
                  <span>ビジネスアドミニストレーション・労務オペレーション構築</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#2ECDDF] shrink-0" />
                  <span>事業スピードを落とさないバックオフィス体制整備</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <StartupSolutionIllustration />
            </div>
          </div>

          {/* Solution 2: エンゲージメント向上 */}
          <div id="engagement" className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-rose-100/80 shadow-xl shadow-rose-950/[0.03] grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F5] text-[#7b3789] text-xs font-bold">
                <Heart size={14} className="text-[#7b3789]" />
                <span>SOLUTION 02</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B232A] tracking-wide">
                エンゲージメント向上
              </h3>
              <p className="text-[#6E656B] text-sm sm:text-base leading-relaxed font-normal">
                経営戦略においてエンゲージメントの向上は不可欠です。当社は施策の提案から実行までトータルにサポートし、従業員エンゲージメントの向上を実現します。我々のアプローチは、組織内のコミュニケーションやチームビルディングを促進し、生産性とモチベーションの向上に貢献します。お客様の経営において、エンゲージメントの最大化を実現するパートナーとして、自信をもってご提案いたします。
              </p>
              <div className="space-y-3 text-sm text-[#2B232A] font-medium pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#7b3789] shrink-0" />
                  <span>Culture Ampを用いた世界基準のエンゲージメントサーベイ設計</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#7b3789] shrink-0" />
                  <span>サーベイ結果に基づく具体的な改善ワークショップ・アクション伴走</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#7b3789] shrink-0" />
                  <span>チームビルディングとオープンカルチャーの醸成促進</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EngagementSolutionIllustration />
            </div>
          </div>

          {/* Solution 3: マネージメント開発 */}
          <div id="management" className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-rose-100/80 shadow-xl shadow-rose-950/[0.03] grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E5F5] text-[#7b3789] text-xs font-bold">
                <TrendingUp size={14} className="text-[#7b3789]" />
                <span>SOLUTION 03</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B232A] tracking-wide">
                マネージメント開発
              </h3>
              <p className="text-[#6E656B] text-sm sm:text-base leading-relaxed font-normal">
                効果的なマネジメントが組織に与える影響は大きいです。当社はデータに基づき、お客様の組織の状況を踏まえたマネジメント開発プランを提供します。課題を明確にし、必要なスキルやリーダーシップの強化ポイントを抽出し、その上で育成プランを構築いたします。お客様の成長と発展を支えるために、戦略的で柔軟性のあるマネジメント開発をご提案いたします。
              </p>
              <div className="space-y-3 text-sm text-[#2B232A] font-medium pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#2ECDDF] shrink-0" />
                  <span>ピープルアナリティクスに基づくリーダーシップ分析</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#2ECDDF] shrink-0" />
                  <span>1on1対話スキルの向上およびフィードバック文化の定着</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#2ECDDF] shrink-0" />
                  <span>評価・育成制度と連動したマネージャー研修プログラム</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ManagementSolutionIllustration />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#FFF0F5] via-[#F3E5F5] to-[#E0F7FA] rounded-[2.5rem] p-9 md:p-16 border border-rose-200/60 text-center space-y-8 relative overflow-hidden shadow-xl shadow-rose-950/5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] tracking-wide">
            組織のお悩みをお気軽にご相談ください
          </h2>
          <p className="text-[#6E656B] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
            貴社の状況に合わせたオーダーメイドなご提案をさせていただきます。
          </p>
          <div className="pt-2">
            <Link 
              href="/company#contact" 
              className="inline-flex items-center gap-3 bg-[#7b3789] text-white font-bold px-9 py-4 rounded-full text-sm tracking-wider hover:bg-[#2B232A] transition-all shadow-md shadow-[#7b3789]/20"
            >
              お問い合わせはこちら <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
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