"use client";

import Link from "next/link";
import { 
  Menu, 
  X, 
  ArrowRight, 
  MapPin, 
  Building2, 
  Briefcase, 
  Users, 
  Award,
  HeartHandshake,
  Sparkles,
  Leaf
} from "lucide-react";
import { useState } from "react";

// --- Hero用：個と組織をつなぐ抽象グラフィック ---
function CompanyHeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto p-2 flex items-center justify-center">
      <div className="relative w-full bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-rose-200/80 shadow-2xl shadow-rose-950/10 p-7 flex flex-col justify-between overflow-hidden">
        
        <div className="mb-4 bg-gradient-to-r from-[#FFF0F5] to-[#F3E5F5] p-3.5 rounded-2xl border border-rose-200/80 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#7b3789] shrink-0">
            <Building2 size={16} />
          </div>
          <div>
            <p className="text-[10px] text-[#7b3789] font-extrabold tracking-wider uppercase">LABORATIK INC.</p>
            <p className="text-xs font-bold text-[#2B232A]">HR Solution Company</p>
          </div>
        </div>

        <div className="my-2 relative flex justify-center items-center py-2">
          <svg className="w-full h-44" viewBox="0 0 280 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="140" cy="85" r="60" fill="url(#company-hero-grad)" fillOpacity="0.5" />
            
            <path d="M70 85 C 100 40, 180 40, 210 85" stroke="#7b3789" strokeWidth="2.5" strokeDasharray="4 4" fill="none" opacity="0.6" />
            <path d="M70 85 C 100 130, 180 130, 210 85" stroke="#2ECDDF" strokeWidth="2.5" fill="none" opacity="0.7" />
            
            <circle cx="70" cy="85" r="18" fill="#E879F9" fillOpacity="0.85" />
            <circle cx="70" cy="85" r="6" fill="#FFF" />
            
            <circle cx="210" cy="85" r="26" fill="#2ECDDF" fillOpacity="0.85" />
            <circle cx="210" cy="85" r="10" fill="#FFF" />
            <circle cx="225" cy="70" r="6" fill="#7b3789" />
            
            <rect x="120" y="65" width="40" height="40" rx="12" fill="#FDF2F5" stroke="#E879F9" strokeWidth="1.5" />
            <path d="M130 85 L140 95 L150 75" stroke="#7b3789" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            
            <defs>
              <linearGradient id="company-hero-grad" x1="80" y1="25" x2="200" y2="145" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDF2F5" />
                <stop offset="0.5" stopColor="#E1F5FE" />
                <stop offset="1" stopColor="#F3E5F5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mt-2 bg-gradient-to-r from-[#E0F7FA] to-[#FFF0F5] p-3.5 rounded-2xl border border-cyan-200 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#7b3789] shrink-0">
            <HeartHandshake size={16} />
          </div>
          <div>
            <p className="text-[10px] text-[#7b3789] font-extrabold tracking-wider uppercase">OUR PROMISE</p>
            <p className="text-xs font-bold text-[#2B232A]">つながりで未来を拓く</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function MissionTypographyCard() {
  return (
    <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-[#FFF0F5] via-[#F3E5F5] to-[#E0F7FA] rounded-3xl relative overflow-hidden p-8 sm:p-12 border border-rose-200/80 shadow-inner flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/60 rounded-full blur-2xl pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2ECDDF]/10 rounded-full blur-2xl pointer-events-none transform -translate-x-1/4 translate-y-1/4" />
      
      <div className="relative z-10 space-y-8">
        <h4 className="text-xl sm:text-2xl lg:text-[1.35rem] font-bold text-[#7b3789] leading-[1.6]">
          成長や幸せの形は、<br />
          人や組織によって異なります。
        </h4>
        <div className="w-10 h-1 bg-[#2ECDDF] rounded-full" />
        <p className="text-sm sm:text-base text-[#2B232A] leading-[2] font-medium tracking-wide">
          その要となるのが、<br />
          <span className="font-extrabold">「純粋で前向きなつながり」</span>です。
          <br /><br />
          人、業務、チーム。<br />
          あらゆるつながりを通じて、皆様と組織に確かな成長と幸せがもたらされることを、私たちは心から願っています。
        </p>
      </div>
    </div>
  );
}

function VisionIllustration() {
  return (
    <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-[#E0F7FA] via-[#F3E5F5] to-[#FFF0F5] rounded-3xl relative overflow-hidden flex items-center justify-center p-8 border border-cyan-200/80 shadow-inner">
      <svg className="w-full h-full max-w-xs" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 160 C 40 80, 260 80, 260 160" stroke="#7b3789" strokeWidth="20" strokeLinecap="round" opacity="0.15" />
        <path d="M40 160 C 40 80, 260 80, 260 160" stroke="#2ECDDF" strokeWidth="8" strokeLinecap="round" strokeDasharray="10 10" />
        <path d="M150 110 C150 110 120 70 120 40 C120 20 150 10 150 10 C150 10 180 20 180 40 C180 70 150 110 150 110 Z" fill="#7b3789" fillOpacity="0.8" />
        <path d="M150 110 C150 110 105 85 95 55 C85 25 110 5 110 5 C110 5 135 35 150 110 Z" fill="#E879F9" fillOpacity="0.6" />
        <rect x="110" y="140" width="80" height="20" rx="10" fill="#2B232A" fillOpacity="0.9" />
      </svg>
    </div>
  );
}

export default function CompanyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // ★モーダル状態管理

  const logoUrl = "https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/logo.png";
  const isoImageUrl = "https://laboratik.com/wp-content/themes/laboratik_wp/assets/images/company/img-03.jpg";

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
            <Link href="/platform" className="hover:text-[#7b3789] transition-colors">Platform</Link>
            <Link href="/company" className="text-[#7b3789] font-bold">Company</Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#7b3789] to-[#9b49a8] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#7b3789]/20 transition-all text-xs font-semibold tracking-wider cursor-pointer"
            >
              お問い合わせ
            </button>
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
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-center bg-[#7b3789] text-white py-3 rounded-full font-medium tracking-wider text-sm shadow-md cursor-pointer"
            >
              お問い合わせ
            </button>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="pt-36 pb-20 px-6 md:px-10 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-xs font-semibold text-[#7b3789] shadow-xs">
              <Sparkles size={14} className="text-[#2ECDDF]" />
              <span>OUR COMPANY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-[1.3] text-[#2B232A]">
              <span className="bg-gradient-to-r from-[#7b3789] via-[#9b49a8] to-[#2ECDDF] bg-clip-text text-transparent">
                個と組織の可能性を、<br className="hidden md:block" />共に拓く。
              </span>
            </h1>

            <p className="text-[#6E656B] text-base leading-relaxed font-normal">
              対話とデータを架け橋に、すべての働く人と組織に「生産性と幸せ」をもたらす。
              <br />
              それがラボラティックの使命です。
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-[#7b3789]">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FFF0F5] border border-rose-200">＃組織開発</span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F3E5F5] border border-purple-200">＃EX向上</span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#E0F7FA] border border-cyan-200">＃HRソリューション</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <CompanyHeroIllustration />
          </div>
        </div>
      </section>

      {/* 3. Mission (ミッション) */}
      <section className="py-24 bg-white/80 border-y border-rose-100/60 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#7b3789] block border-b border-[#7b3789]/20 pb-2 inline-block">
                  MISSION
                </span>
                <p className="text-sm font-bold text-[#6E656B]">私たちの使命</p>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] leading-tight tracking-wide">
                つながりを通して、<br />すべての個と組織に<br className="hidden sm:block" />生産性と幸せをもたらす。
              </h2>

              <div className="space-y-4 text-[#6E656B] text-sm leading-relaxed font-normal">
                <p>
                  私たちラボラティックは、組織の成長と幸せを願う企業です。
                </p>
                <p>
                  日本は戦後、豊かな国として歩みを進めてきましたが、ある調査では幸福度は世界で54位。GDPなどが世界トップクラスであるものの、生産性や幸福の度合いは必ずしも高くないのが現実です。
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <MissionTypographyCard />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision (ビジョン) */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <VisionIllustration />
          </div>

          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#7b3789] block border-b border-[#7b3789]/20 pb-2 inline-block">
                VISION
              </span>
              <p className="text-sm font-bold text-[#6E656B]">私たちの目指しているもの</p>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] leading-tight tracking-wide">
              個と組織の架け橋になる
            </h2>

            <div className="space-y-4 text-[#6E656B] text-sm sm:text-base leading-relaxed font-normal">
              <p>
                これからのつながり、そして未来の成長と幸せを、私たちは企業様と共に作ってまいります。
              </p>
              <p>
                私たち一人一人は、それぞれが個性豊かで、可能性を宿した個人です。<br />
                そして、共に働き、新しいつながり、関係性を育む場でもある組織。
              </p>
              <p className="font-bold text-[#2B232A]">
                この組織での活動を通じ、個人の可能性がどんどん花開いていく。<br />
                そして、花開かせていけると私たちは信じています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Company Overview (会社概要) */}
      <section className="py-24 bg-white/60 border-y border-rose-100/60 px-6 md:px-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7b3789] block">OVERVIEW</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] tracking-wide">
              会社概要
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#7b3789] to-[#2ECDDF] mx-auto mt-4 rounded-full" />
          </div>

          <div className="pt-8">
            <dl className="divide-y divide-rose-100/80">
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                <dt className="text-sm font-bold text-[#2B232A] flex items-center gap-3">
                  <Building2 size={18} className="text-[#7b3789]" /> 会社名
                </dt>
                <dd className="mt-2 text-sm text-[#6E656B] sm:col-span-2 sm:mt-0 leading-relaxed font-medium">
                  ラボラティック株式会社<br />Laboratik Inc. (英訳名)
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                <dt className="text-sm font-bold text-[#2B232A] flex items-center gap-3">
                  <Sparkles size={18} className="text-[#7b3789]" /> 設立
                </dt>
                <dd className="mt-2 text-sm text-[#6E656B] sm:col-span-2 sm:mt-0 font-medium">
                  2015年7月
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                <dt className="text-sm font-bold text-[#2B232A] flex items-center gap-3">
                  <MapPin size={18} className="text-[#7b3789]" /> 所在地
                </dt>
                <dd className="mt-2 text-sm text-[#6E656B] sm:col-span-2 sm:mt-0 font-medium">
                  東京都中央区
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                <dt className="text-sm font-bold text-[#2B232A] flex items-center gap-3">
                  <HeartHandshake size={18} className="text-[#7b3789]" /> 資本金
                </dt>
                <dd className="mt-2 text-sm text-[#6E656B] sm:col-span-2 sm:mt-0 font-medium">
                  1億円（資本準備金含む）
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                <dt className="text-sm font-bold text-[#2B232A] flex items-center gap-3">
                  <Users size={18} className="text-[#7b3789]" /> 代表取締役
                </dt>
                <dd className="mt-2 text-sm text-[#6E656B] sm:col-span-2 sm:mt-0 font-medium">
                  野口 麗奈
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                <dt className="text-sm font-bold text-[#2B232A] flex items-center gap-3">
                  <Leaf size={18} className="text-[#7b3789]" /> 主要投資
                </dt>
                <dd className="mt-2 text-sm text-[#6E656B] sm:col-span-2 sm:mt-0 leading-relaxed font-medium">
                  アーキタイプベンチャーズ株式会社、株式会社エルテス、株式会社ディープコア、みずほキャピタル株式会社、他
                </dd>
              </div>
              <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0">
                <dt className="text-sm font-bold text-[#2B232A] flex items-center gap-3">
                  <Briefcase size={18} className="text-[#7b3789]" /> 事業内容
                </dt>
                <dd className="mt-2 text-sm text-[#6E656B] sm:col-span-2 sm:mt-0 font-medium">
                  ITソフトウェアの企画、開発、販売、研究、及び管理業務
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-8 mt-12 border-t border-rose-100/60">
            <img src={isoImageUrl} alt="ISMS 認証マーク等" className="h-20 w-auto object-contain mix-blend-multiply opacity-80" />
            <div className="text-sm text-[#6E656B] space-y-3 font-medium">
              <div className="flex items-center gap-3">
                <Award size={18} className="text-[#2ECDDF]" />
                <span className="font-bold text-[#2B232A]">国際認証:</span> ISO27001(ISMS)取得
              </div>
              <div className="flex items-center gap-3">
                <Award size={18} className="text-[#7b3789]" />
                <span className="font-bold text-[#2B232A]">特許取得:</span> 特許第6559861号
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Section（★全幅グラデーションCTAレイアウトへ一新） */}
      <section className="w-full py-24 px-6 md:px-10 bg-gradient-to-br from-[#FFF0F5] via-[#F3E5F5] to-[#E0F7FA] border-t border-rose-200/60 shadow-inner text-center space-y-8 relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B232A] tracking-wide">
            お問い合わせ・ご相談
          </h2>
          <p className="text-[#6E656B] text-sm sm:text-base leading-relaxed font-normal">
            組織エンゲージメントの向上、Culture Ampの導入相談、各種サービスについてなど、どのようなことでもお気軽にご連絡ください。専門スタッフが丁寧にお答えいたします。
          </p>
          
          <div className="pt-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-[#7b3789] text-white font-bold px-10 py-4 rounded-full text-sm tracking-wider hover:bg-[#2B232A] transition-all shadow-md shadow-[#7b3789]/20 cursor-pointer"
            >
              お問い合わせフォームを開く <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
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

      {/* 8. お問い合わせモーダル (ポップアップフォーム) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity">
          <div 
            className="absolute inset-0 bg-[#2B232A]/50 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)} 
          />
          <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-rose-100 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-[#FAF8F6] rounded-full text-[#6E656B] hover:text-[#7b3789] transition-colors hover:bg-rose-50 cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-[#2B232A] tracking-wide">お問い合わせ・ご相談</h3>
                <p className="text-[#6E656B] text-sm mt-3">どのようなことでもお気軽にご連絡ください。</p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#2B232A]">会社名 <span className="text-rose-500">*</span></label>
                    <input type="text" className="w-full bg-[#FAF8F6] border border-rose-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7b3789] focus:bg-white transition-colors" placeholder="例）株式会社〇〇" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#2B232A]">お名前 <span className="text-rose-500">*</span></label>
                    <input type="text" className="w-full bg-[#FAF8F6] border border-rose-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7b3789] focus:bg-white transition-colors" placeholder="例）山田 太郎" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2B232A]">メールアドレス <span className="text-rose-500">*</span></label>
                  <input type="email" className="w-full bg-[#FAF8F6] border border-rose-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7b3789] focus:bg-white transition-colors" placeholder="例）info@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#2B232A]">お問い合わせ内容 <span className="text-rose-500">*</span></label>
                  <textarea rows={5} className="w-full bg-[#FAF8F6] border border-rose-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7b3789] focus:bg-white resize-none transition-colors" placeholder="ご質問やご相談内容をご記入ください" />
                </div>
                <div className="text-center pt-6 border-t border-rose-100/60">
                  <button 
                    type="button" 
                    onClick={() => {
                      alert("送信が完了しました（※モックアップです）");
                      setIsModalOpen(false);
                    }}
                    className="inline-flex items-center justify-center gap-3 bg-[#7b3789] text-white font-bold px-12 py-4 rounded-full text-sm tracking-wider hover:bg-[#2B232A] transition-all shadow-md shadow-[#7b3789]/20 w-full sm:w-auto cursor-pointer"
                  >
                    送信する <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}