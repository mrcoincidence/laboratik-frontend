"use client";

import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  HelpCircle, 
  ChevronDown, 
  Menu, 
  X,
  Users,
  BarChart3,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

export default function PlatformPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const logoUrl = "https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/logo.png";
  const pdfUrl = "https://laboratik.com/wp-content/themes/laboratik_wp/assets/file/platform.pdf";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 導入企業ロゴアセット一覧 (logo-01.jpg 〜 logo-24.jpg)
  const clientLogos = Array.from({ length: 24 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/logo-${num}.jpg`;
  });

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
            <Link href="/service" className="hover:text-[#7b3789] transition-colors">Service</Link>
            <Link href="/platform" className="text-[#7b3789] font-bold">Platform</Link>
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

      {/* 2. Hero Section */}
      <section className="pt-36 pb-20 px-6 md:px-10 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-xs font-semibold text-[#7b3789] shadow-xs">
              <Sparkles size={14} className="text-[#2ECDDF]" />
              <span>Culture Amp 日本正規販売代理店</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-[1.3] text-[#2B232A]">
              <span className="bg-gradient-to-r from-[#7b3789] via-[#9b49a8] to-[#2ECDDF] bg-clip-text text-transparent">
                従業員の声を見える化し、生産性の向上・離職の防止が実現できる！
              </span>
            </h1>

            <p className="text-[#6E656B] text-base leading-relaxed font-normal">
              データで“わかる”だけで終わらせない。
              <br />
              社員の声を“行動”につなげ、組織を前に進める仕組みです。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/company#contact" 
                className="inline-flex items-center justify-center gap-3 bg-[#7b3789] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider hover:bg-[#2B232A] transition-all shadow-lg shadow-[#7b3789]/20"
              >
                無料相談 <ArrowRight size={16} />
              </Link>
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 border border-rose-200 bg-white/90 px-8 py-4 rounded-full text-sm font-bold tracking-wider text-[#2B232A] hover:border-[#2ECDDF] transition-all shadow-xs"
              >
                <Download size={16} className="text-[#7b3789]" />
                資料ダウンロード
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#7b3789] via-[#E879F9] to-[#2ECDDF] rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
              <img 
                src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/mv.jpg" 
                alt="Culture Amp Main Visual" 
                className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border border-white" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Lead Banner */}
      <section className="py-12 bg-gradient-to-r from-[#FFF0F5] via-[#F3E5F5]/60 to-[#E0F7FA] border-y border-rose-100/80 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#7b3789] tracking-wide leading-relaxed">
            世界8,200社・193ヵ国以上が導入する従業員エクスペリエンスプラットフォーム
          </p>
        </div>
      </section>

      {/* 4. Worry Section（★カード背景を白(bg-white)に統一して画像の白背景と同化させる） */}
      <section className="py-24 bg-white/80 border-b border-rose-100/60 px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7b3789] block">CHALLENGES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] tracking-wide">
              こんなお悩みありませんか？
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Worry 1 */}
            <div className="bg-white rounded-3xl border border-rose-100/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-[#2B232A] leading-snug">
                  原因が見えない<br />離職が続いている
                </h3>
                <p className="text-xs text-[#6E656B] leading-relaxed font-normal">
                  一見うまくいっているように見えても、突然の退職が起きる。面談では理由がわからず、どこに課題があるのか特定できない。
                </p>
              </div>
              <div className="w-full h-52 p-6 flex items-center justify-center bg-white border-t border-rose-50">
                <img 
                  src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/worry-01.jpg" 
                  alt="原因が見えない離職" 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                />
              </div>
            </div>

            {/* Worry 2 */}
            <div className="bg-white rounded-3xl border border-rose-100/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-[#2B232A] leading-snug">
                  育てたい人ほど<br />辞めてしまう
                </h3>
                <p className="text-xs text-[#6E656B] leading-relaxed font-normal">
                  次世代リーダーや期待していた人材ほど、成長機会を見出せずに離職。努力しても組織に残らない“もったいない離職”が起きている。
                </p>
              </div>
              <div className="w-full h-52 p-6 flex items-center justify-center bg-white border-t border-rose-50">
                <img 
                  src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/worry-02.jpg" 
                  alt="育てたい人ほど辞めてしまう" 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                />
              </div>
            </div>

            {/* Worry 3 */}
            <div className="bg-white rounded-3xl border border-rose-100/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-[#2B232A] leading-snug">
                  エンゲージメント調査を<br />しても行動につながらない
                </h3>
                <p className="text-xs text-[#6E656B] leading-relaxed font-normal">
                  回答は集まるが、分析や改善が現場で止まってしまう。「結果を見たあと、どうすればいいのか」がわからない。
                </p>
              </div>
              <div className="w-full h-52 p-6 flex items-center justify-center bg-white border-t border-rose-50">
                <img 
                  src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/worry-03.jpg" 
                  alt="行動につながらない" 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Solution Culture Amp */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#FFF0F5] via-white to-[#F3E5F5]/60 rounded-[2.5rem] p-9 md:p-16 border border-rose-100 grid lg:grid-cols-12 gap-10 items-center shadow-lg shadow-rose-950/5">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7b3789] block">SOLUTION</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] leading-tight tracking-wide">
              解決するなら、<br />Culture Amp!
            </h2>
            <h3 className="text-xl font-bold text-[#7b3789]">
              データで終わらせず、社員の声を“行動”に変える。
            </h3>
            <p className="text-[#6E656B] text-sm sm:text-base leading-relaxed font-normal">
              世界8,200社・193ヵ国以上で導入。
              <br />
              離職率の改善やマネジャー行動の変化など、エンゲージメント向上の成果が多数報告されています。
              <br />
              日本語サポートにも対応し、導入から定着まで安心です。
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-rose-100 shadow-md">
              <img 
                src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/culture-amp.jpg" 
                alt="Culture Amp Solution" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 6. Sustainable Companies / Logo Grid */}
      <section className="py-20 bg-white border-y border-rose-100/60 px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#7b3789] block">GLOBAL TRUST</span>
            <p className="text-lg sm:text-xl font-bold text-[#2B232A]">
              世界有数の持続可能な企業の多くが利用しています。
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center">
            {clientLogos.map((src, idx) => (
              <div key={idx} className="bg-white p-3 rounded-2xl border border-rose-100/60 flex items-center justify-center hover:scale-105 transition-transform shadow-xs hover:shadow-md">
                <img src={src} alt={`Partner Logo ${idx + 1}`} className="max-h-12 w-auto object-contain mix-blend-multiply opacity-85 hover:opacity-100" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Culture Ampで解決できる組織の課題（★カード背景を白(bg-white)に統一して画像の白背景と同化させる） */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7b3789] block">SOLUTIONS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] tracking-wide">
            Culture Ampで解決できる組織の課題
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Solution Item 1 */}
          <div className="bg-white rounded-3xl border border-rose-100/80 overflow-hidden shadow-xl shadow-rose-950/[0.02] flex flex-col justify-between">
            <div className="p-8">
              <p className="text-sm font-bold text-[#2B232A] leading-relaxed">
                離職のサインをデータで早期に察知。どの要因が影響しているかを可視化し、最適な打ち手を導けます。
              </p>
            </div>
            <div className="w-full h-52 p-6 flex items-center justify-center bg-white border-t border-rose-50">
              <img 
                src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/solution-01.jpg" 
                alt="離職のサインをデータで早期に察知" 
                className="max-w-full max-h-full object-contain mix-blend-multiply" 
              />
            </div>
          </div>

          {/* Solution Item 2 */}
          <div className="bg-white rounded-3xl border border-rose-100/80 overflow-hidden shadow-xl shadow-rose-950/[0.02] flex flex-col justify-between">
            <div className="p-8">
              <p className="text-sm font-bold text-[#2B232A] leading-relaxed">
                オンボーディングやウェルビーイングなど、従業員経験を正確に計測。成長機会を逃さず、期待人材の離職を防ぎます。
              </p>
            </div>
            <div className="w-full h-52 p-6 flex items-center justify-center bg-white border-t border-rose-50">
              <img 
                src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/solution-02.jpg" 
                alt="従業員経験を正確に計測" 
                className="max-w-full max-h-full object-contain mix-blend-multiply" 
              />
            </div>
          </div>

          {/* Solution Item 3 */}
          <div className="bg-white rounded-3xl border border-rose-100/80 overflow-hidden shadow-xl shadow-rose-950/[0.02] flex flex-col justify-between">
            <div className="p-8">
              <p className="text-sm font-bold text-[#2B232A] leading-relaxed">
                サーベイ結果を現場マネジャーがすぐに確認。迷うことなく、課題発見から改善アクションへ進めます。
              </p>
            </div>
            <div className="w-full h-52 p-6 flex items-center justify-center bg-white border-t border-rose-50">
              <img 
                src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/solution-03.jpg" 
                alt="現場マネジャーがすぐに確認" 
                className="max-w-full max-h-full object-contain mix-blend-multiply" 
              />
            </div>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
          <Link 
            href="/company#contact" 
            className="inline-flex items-center gap-3 bg-[#7b3789] text-white font-bold px-9 py-4 rounded-full text-sm tracking-wider hover:bg-[#2B232A] transition-all shadow-md shadow-[#7b3789]/20"
          >
            無料相談 <ArrowRight size={16} />
          </Link>
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 border border-rose-200 bg-white px-9 py-4 rounded-full text-sm font-bold tracking-wider text-[#2B232A] hover:border-[#2ECDDF] transition-all shadow-xs"
          >
            <Download size={16} className="text-[#7b3789]" />
            資料ダウンロード
          </a>
        </div>
      </section>

      {/* 8. Three Mechanics */}
      <section className="py-24 bg-white/80 border-y border-rose-100/60 px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7b3789] block">MECHANICS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] tracking-wide">
              Culture Ampが成果を生む3つの仕組み
            </h2>
            <p className="text-xs sm:text-sm text-[#6E656B] leading-relaxed pt-2">
              データを集めて終わりにしない。Culture Ampは、社員の声を“行動”に変え、組織を前に進めるための仕組みです。
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-12">
            
            {/* Point 1 */}
            <div className="grid md:grid-cols-12 gap-8 items-center bg-[#FAF8F6] p-8 md:p-12 rounded-3xl border border-rose-100">
              <div className="md:col-span-5 order-2 md:order-1 flex justify-center">
                <img src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/point-01.png" alt="01.はかる" className="w-full max-w-sm h-auto object-contain mix-blend-multiply" />
              </div>
              <div className="md:col-span-7 order-1 md:order-2 space-y-4">
                <span className="text-sm font-extrabold text-[#7b3789] bg-[#FFF0F5] px-4 py-1.5 rounded-full border border-rose-200 inline-block">
                  01. はかる
                </span>
                <h3 className="text-2xl font-bold text-[#2B232A] tracking-wide">
                  社員の本音を、正確かつ答えやすく“見える化”
                </h3>
                <p className="text-sm text-[#6E656B] leading-relaxed font-normal">
                  組織心理学と行動科学に基づいた設計で、社員が答えやすく、人事は“見えにくい本音”を正確に把握できます。
                  <br />
                  エンゲージメント、成長、ウェルビーイングなど多面的に測定でき、テンプレートを選ぶだけで必要な設問が自動でセットされます。
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="grid md:grid-cols-12 gap-8 items-center bg-[#FAF8F6] p-8 md:p-12 rounded-3xl border border-rose-100">
              <div className="md:col-span-7 space-y-4">
                <span className="text-sm font-extrabold text-[#7b3789] bg-[#F3E5F5] px-4 py-1.5 rounded-full border border-purple-200 inline-block">
                  02. みえる
                </span>
                <h3 className="text-2xl font-bold text-[#2B232A] tracking-wide">
                  AIが、組織課題の本質を瞬時に整理
                </h3>
                <p className="text-sm text-[#6E656B] leading-relaxed font-normal">
                  集まったコメントやデータをAIが自動で要約。
                  <br />
                  離職・成長・ウェルビーイングなど、テーマごとの傾向を即座に可視化します。複数の部署や職種の違いもリアルタイムで把握でき、「どこから手を打つべきか」が一目でわかります。
                </p>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <img src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/point-02.png" alt="02.みえる" className="w-full max-w-sm h-auto object-contain mix-blend-multiply" />
              </div>
            </div>

            {/* Point 3 */}
            <div className="grid md:grid-cols-12 gap-8 items-center bg-[#FAF8F6] p-8 md:p-12 rounded-3xl border border-rose-100">
              <div className="md:col-span-5 order-2 md:order-1 flex justify-center">
                <img src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/point-03.png" alt="03.うごく" className="w-full max-w-sm h-auto object-contain mix-blend-multiply" />
              </div>
              <div className="md:col-span-7 order-1 md:order-2 space-y-4">
                <span className="text-sm font-extrabold text-[#7b3789] bg-[#E0F7FA] px-4 py-1.5 rounded-full border border-cyan-200 inline-block">
                  03. うごく
                </span>
                <h3 className="text-2xl font-bold text-[#2B232A] tracking-wide">
                  マネジャーが、次の一歩をすぐ踏み出せる
                </h3>
                <p className="text-sm text-[#6E656B] leading-relaxed font-normal">
                  Culture Ampのアクションプランナーが、調査結果に基づく改善アクションを提案。チーム単位で対話しながらプランを整理・実行できます。
                  <br />
                  進捗は自動で可視化され、組織全体の動きがひと目で追えます。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Impact Section */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#FFF0F5] via-[#F3E5F5] to-[#E0F7FA] rounded-[2.5rem] p-9 md:p-16 border border-rose-200/60 text-center shadow-xl shadow-rose-950/5 space-y-10">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#7b3789] block">IMPACT</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] tracking-wide">
              Culture Ampが実現するインパクト
            </h2>
            <p className="text-xs sm:text-sm text-[#6E656B] leading-relaxed pt-2">
              Culture Ampを使うことで、マネージャーたちが業務の進捗やチームへの影響をデータに基づいて把握・理解できるようになり、お金では計り知れない価値を生み出しています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/95 p-6 rounded-2xl shadow-xs border border-white space-y-2 text-left">
              <div className="flex items-baseline gap-1 text-[#7b3789]">
                <span className="text-4xl font-extrabold">+7</span>
                <span className="text-lg font-bold">％</span>
              </div>
              <h4 className="text-sm font-bold text-[#2B232A]">組織パフォーマンス向上</h4>
              <p className="text-xs text-[#6E656B]">利益・マーケット優位性・賃金</p>
            </div>

            <div className="bg-white/95 p-6 rounded-2xl shadow-xs border border-white space-y-2 text-left">
              <div className="flex items-baseline gap-1 text-[#7b3789]">
                <span className="text-4xl font-extrabold">700</span>
                <span className="text-lg font-bold">時間</span>
              </div>
              <h4 className="text-sm font-bold text-[#2B232A]">生産性向上</h4>
              <p className="text-xs text-[#6E656B]">効果的な従業員フィードバックの収集・管理職と従業員の生産性アップ</p>
            </div>

            <div className="bg-white/95 p-6 rounded-2xl shadow-xs border border-white space-y-2 text-left">
              <div className="flex items-baseline gap-1 text-[#7b3789]">
                <span className="text-4xl font-extrabold">+9</span>
                <span className="text-lg font-bold">％</span>
              </div>
              <h4 className="text-sm font-bold text-[#2B232A]">顧客満足度向上</h4>
              <p className="text-xs text-[#6E656B]">顧客対応時間改善・問合せ数量軽減</p>
            </div>

            <div className="bg-white/95 p-6 rounded-2xl shadow-xs border border-white space-y-2 text-left">
              <div className="flex items-baseline gap-1 text-[#7b3789]">
                <span className="text-4xl font-extrabold">28</span>
                <span className="text-lg font-bold">%</span>
              </div>
              <h4 className="text-sm font-bold text-[#2B232A]">コスト軽減</h4>
              <p className="text-xs text-[#6E656B]">人事異動コスト・社員欠席・福利厚生の最適化</p>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-24 bg-white/80 border-t border-rose-100/60 px-6 md:px-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7b3789] block">FAQ</span>
            <h2 className="text-3xl font-extrabold text-[#2B232A] tracking-wide">よくある質問</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Q ダッシュボードの設定は必要ですか？",
                a: "設定は不要です。ダッシュボードは標準で日本語対応済み。主要な指標や傾向が自動で可視化され、すぐに多角的な洞察を得られます。導入後すぐに活用を開始できます。"
              },
              {
                q: "Q 設問はどこまでカスタマイズできますか？",
                a: "テンプレートを基に自由に調整可能ですが、ベンチマーク比較を行う際は基準設問を残すことが重要です。専任チームが最適な設計をサポートします。"
              },
              {
                q: "Q 過去に別途社内で実施したサーベイ結果を取り込めますか？",
                a: "可能です。CSVなどでデータ移行し、過去推移との比較も行えます。Culture Ampベンチマークとの比較には設問整合が必要です。"
              },
              {
                q: "Q 現場のマネージャーも簡単に使えますか？",
                a: "はい。マネジャー用のダッシュボードが標準搭載されており、チーム単位のデータを自動で確認できます。操作は直感的でトレーニング不要です。"
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#FAF8F6] rounded-2xl border border-rose-100/80 overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-4 text-[#2B232A] hover:text-[#7b3789] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#2ECDDF] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown size={18} className={`transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#6E656B] leading-relaxed border-t border-rose-100/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Bottom CTA Section */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#FFF0F5] via-[#F3E5F5] to-[#E0F7FA] rounded-[2.5rem] p-9 md:p-16 border border-rose-200/60 relative overflow-hidden shadow-xl shadow-rose-950/5">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] tracking-wide">
                お気軽にお問い合わせ下さい
              </h2>
              <p className="text-[#6E656B] text-sm sm:text-base leading-relaxed font-normal">
                組織エンゲージメントの向上、Culture Ampの導入相談・資料請求など、専門スタッフが丁寧にお答えいたします。
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <Link 
                  href="/company#contact" 
                  className="inline-flex items-center justify-center gap-3 bg-[#7b3789] text-white font-bold px-9 py-4 rounded-full text-sm tracking-wider hover:bg-[#2B232A] transition-all shadow-md shadow-[#7b3789]/20"
                >
                  無料相談 <ArrowRight size={16} />
                </Link>
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-rose-200 bg-white/90 px-9 py-4 rounded-full text-sm font-bold tracking-wider text-[#2B232A] hover:border-[#2ECDDF] transition-all shadow-xs"
                >
                  <Download size={16} className="text-[#7b3789]" />
                  資料ダウンロード
                </a>
              </div>
            </div>

            {/* フッターイラスト */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src="https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/platform/footer-ill.png" 
                alt="Footer Illustration" 
                className="w-full max-w-sm h-auto object-contain mix-blend-multiply"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 12. Footer */}
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