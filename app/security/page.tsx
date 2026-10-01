"use client";

import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function SecurityPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <Link href="/service" className="hover:text-[#7b3789] transition-colors">Service</Link>
            <Link href="/platform" className="hover:text-[#7b3789] transition-colors">Platform</Link>
            <Link href="/company" className="hover:text-[#7b3789] transition-colors">Company</Link>
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

      {/* 2. Simple Hero Header (グラフィックなしのラベルとタイトル) */}
      <section className="pt-36 pb-16 px-6 md:px-10 max-w-4xl mx-auto text-center border-b border-rose-100/60">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-xs font-semibold text-[#7b3789] shadow-xs mb-4">
          <Sparkles size={14} className="text-[#2ECDDF]" />
          <span>LEGAL & SECURITY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-[#2B232A]">
          情報セキュリティ方針
        </h1>
      </section>

      {/* 3. Main Content (囲み枠なしのフラットなレイアウト) */}
      <section className="py-16 px-6 md:px-10 max-w-4xl mx-auto">
        <div className="space-y-10 text-sm sm:text-base text-[#6E656B] leading-[1.8] font-normal">
          
          <p className="text-[#2B232A] font-medium leading-relaxed">
            ラボラティック株式会社（以下、当社）は、当社の情報資産、並びにお客様からお預かりした情報資産を事故・災害・犯罪などの脅威から守り、お客様ならびに社会の信頼に応えるべく、以下の方針に基づき全社で情報セキュリティに取り組みます。
          </p>

          {/* 経営者の責任 */}
          <div className="space-y-3 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              経営者の責任
            </h2>
            <p className="pl-4">
              当社は、経営者主導で組織的かつ継続的に情報セキュリティの改善・向上に努めます。
            </p>
          </div>

          {/* 社内体制の整備 */}
          <div className="space-y-3 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              社内体制の整備
            </h2>
            <p className="pl-4">
              当社は、情報セキュリティの維持及び改善のために組織を設置し、情報セキュリティ対策を社内の正式な規則として定めます。
            </p>
          </div>

          {/* 従業員の取組み */}
          <div className="space-y-3 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              従業員の取組み
            </h2>
            <p className="pl-4">
              当社の従業員は、情報セキュリティのために必要とされる知識、技術を習得し、情報セキュリティへの取り組みを確かなものにします。
            </p>
          </div>

          {/* 法令及び契約上の要求事項の遵守 */}
          <div className="space-y-3 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              法令及び契約上の要求事項の遵守
            </h2>
            <p className="pl-4">
              当社は、情報セキュリティに関わる法令、規制、規範、契約上の義務を遵守するとともに、お客様の期待に応えます。
            </p>
          </div>

          {/* 違反及び事故への対応 */}
          <div className="space-y-3 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              違反及び事故への対応
            </h2>
            <p className="pl-4">
              当社は、情報セキュリティに関わる法令違反、契約違反及び事故が発生した場合には適切に対処し、再発防止に努めます。
            </p>
          </div>

          {/* 署名 */}
          <div className="pt-12 text-right text-xs sm:text-sm text-[#2B232A] font-medium leading-relaxed">
            <p>2024年7月1日</p>
            <p className="font-bold">ラボラティック株式会社</p>
            <p>代表取締役 野口麗奈</p>
          </div>

        </div>
      </section>

      {/* 4. Footer */}
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
              <li><Link href="/security" className="hover:text-[#7b3789] transition-colors font-bold">情報セキュリティ方針</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-rose-100 text-xs text-[#6E656B]/70 text-center tracking-wider">
          © {new Date().getFullYear()} Laboratik Inc. All rights reserved.
        </div>
      </footer>

      {/* 5. お問い合わせモーダル (ポップアップフォーム) */}
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