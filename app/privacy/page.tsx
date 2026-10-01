"use client";

import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function PrivacyPage() {
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
          <span>LEGAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-[#2B232A]">
          プライバシーポリシー
        </h1>
      </section>

      {/* 3. Legal Main Content (★枠・ボーダーなしのフラットなレイアウトへ変更) */}
      <section className="py-16 px-6 md:px-10 max-w-4xl mx-auto">
        <div className="space-y-10 text-sm sm:text-base text-[#6E656B] leading-[1.8] font-normal">
          
          <p className="text-[#2B232A] font-medium">
            Laboratik Inc.（以下「当社」といいます）は、当社の提供するウェブサイト、アプリ、その他あらゆるサービス（以下「本サービス」といいます。）において当社が収集した個人情報（個人情報保護法第２条第１項により定義された「個人情報」をいい、以下同様とします。）を以下のとおり取り扱います。
          </p>

          {/* 第1条 */}
          <div className="space-y-4 pt-4 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              第1条 総則
            </h2>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li>当社は、利用者情報等の保護実現のため、個人情報の保護に関する法律（平成15年5月30日法律第57号（以下「個人情報保護法」といいます。）及びその他関連する法令等を遵守し、個人情報を含む利用者情報等の適切な取扱い及び保護に努めます。</li>
              <li>本ポリシーは、本サービスの利用に関し適用されます。また、当社が、当社の運営するウェブサイト上に掲載するプライバシーポリシーその他の個人情報保護方針又は本サービスに関する利用規約等において利用者情報等の取扱いについて規定する場合、当該規定も適用されるものとし、当該規定が本ポリシーと抵触する場合には、本ポリシーが優先されるものとします。</li>
              <li>本サービスと連携するサービス（以下「連携サービス」といいます。）を提供する事業者により提供される提携サービスその他当社以外の者が提供するサービス（以下「連携サービス等」といいます。）については、本ポリシーの規定は適用されません。提携サービス等における利用者情報等の取扱いについては、当該提携サービス等を提供する事業者が別途定めるプライバシーポリシー等をご参照ください。</li>
            </ol>
          </div>

          {/* 第2条 */}
          <div className="space-y-4 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              第2条 当社が取得する情報及びその取得方法
            </h2>
            <ol className="list-decimal list-inside space-y-4 pl-2">
              <li>
                当社は、本サービスにおいて、以下に定めるとおり、個人情報を取得します。
                <div className="pl-6 pt-3 space-y-4">
                  <div className="space-y-2">
                    <p className="font-bold text-[#2B232A]">（1）登録希望者及び登録ユーザーに関する情報</p>
                    <div className="pl-4 space-y-2">
                      <p><strong className="text-[#2B232A]">① 登録希望者及び登録ユーザーの情報：</strong><br />当社は、登録希望者、登録ユーザー（登録ユーザーが法人の場合は、担当者含む。）（以下、併せて「利用者」といいます。）の氏名、メールアドレス、電話番号、所属部署（法人又は団体の場合）、所属組織に関する情報その他の当社が指定する情報（以下「利用者情報」といいます。）を取得します。</p>
                      <p><strong className="text-[#2B232A]">② 端末情報等：</strong><br />当社は、利用者が端末又は携帯端末上で本サービスを利用する場合、本サービスの維持及び改善、又は不正行為防止のため、利用者が使用する端末情報（端末を識別可能なID情報等）を収集することがあります。また、当社は、本サービスの利用時に自動で生成、保存されるIPアドレス及び利用者からのリクエスト日時、本サービス内での操作履歴の情報や、利用者のサービス利用状況に関する情報（以下「ログ情報」といます。）を収集することがあります。</p>
                      <p><strong className="text-[#2B232A]">③ Cookie及び匿名ID：</strong><br />本サービスにおいて、「Cookie（クッキー）」と呼ばれる技術及びこれに類する技術を使用する場合があります。Cookieとは、ウェブサーバが利用者のブラウザを識別する業界標準の技術です。Cookieは、利用者のブラウザを識別することはできますが、利用者個人を識別することはできません。なお、電子端末上の設定の変更によりCookieの機能を無効にすることはできますが、本サービスの全部又は一部が利用できなくなる場合があります。</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-[#2B232A]">（2）送信データ及び連携データ</p>
                    <p className="pl-4">当社は、利用者が本サービスに対して送信したデータ（端末の位置情報、検索履歴、本サービスへの投稿を含みますがこれらに限られません）（以下「送信データ」といいます。）及び本サービスと連携するサービスその他のサービスから取得する情報（ログイン情報、文章、画像、動画その他のデータを含みますがこれらに限られません）（以下「連携データ」といいます。）を収集します。</p>
                  </div>
                </div>
              </li>
              <li>当社は、個人情報の取得にあたっては、偽りその他不正の手段によらず、適正に取得します。また、当社は、登録ユーザーが本サービスを利用することによる取得以外の方法で個人情報を取得する場合には、事前にその利用目的を通知又は公表します。</li>
            </ol>
          </div>

          {/* 第3条 */}
          <div className="space-y-4 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              第3条 利用目的
            </h2>
            <ol className="list-decimal list-inside space-y-4 pl-2">
              <li>当社は、本サービスの利用を通じて取得した個人情報を下記の目的の範囲内で適正に取り扱います。本人の同意なく利用目的の範囲を超えて利用することはありません。</li>
              <li>
                利用目的の詳細および利用する情報：
                <div className="py-2 space-y-3 text-xs sm:text-sm">
                  <p className="font-bold text-[#7b3789]">【本サービスの提供・維持・改善・申込み、提供のため】</p>
                  <ul className="list-disc list-inside pl-2 space-y-1">
                    <li>本サービスにおける本人確認及び不正利用の防止のため</li>
                    <li>本サービスの円滑な提供、維持及び改善のため（利用する情報：利用者情報、端末情報、IPアドレス、ログ情報、Cookie及び匿名ID、送信データ、連携データ）</li>
                  </ul>
                  <p className="font-bold text-[#7b3789] pt-2">【利用者等への通知連絡・対応等】</p>
                  <ul className="list-disc list-inside pl-2 space-y-1">
                    <li>本サービスに関するご案内、お問い合わせ等への対応のため</li>
                    <li>本サービスに関する利用規約、本ポリシーの変更、本サービスの停止・中止・契約解除その他本サービスに関する重要なお知らせ等の通知のため（利用する情報：利用者情報）</li>
                  </ul>
                  <p className="font-bold text-[#7b3789] pt-2">【第三者提供】</p>
                  <ul className="list-disc list-inside pl-2 space-y-1">
                    <li>当社が利用者情報等を第三者に提供する場合、提携サービス等の提供のため（利用する情報：利用者情報、端末情報、IPアドレス、ログ情報、Cookie及び匿名ID、送信データ、連携データ）</li>
                  </ul>
                </div>
              </li>
              <li>当社は、前項の利用目的を、変更前の利用目的と関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合には、利用者に対し、通知又は本サービス上若しくは当社の運営するウェブサイトでの掲示その他分かりやすい方法により公表します。</li>
              <li>第1項に定めるほか、当社は、連携データ、送信データその他の個人情報を、利用者を特定できないようにした匿名加工情報（個人情報保護法第２条第９項に定義された「匿名加工情報」といい、以下同様とします。）又は統計的な情報に加工し、これを利用することがあります。</li>
            </ol>
          </div>

          {/* 第4条 */}
          <div className="space-y-4 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              第4条 第三者提供
            </h2>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li>
                当社は、原則として、本人の同意を得ずに個人データ（個人情報保護法第２条第６項により定義された「個人データ」をいい、以下同様とします。）を第三者（次条に定める委託者を除く。以下、同様とします。）に提供しません。ただし、以下の場合は、関係法令に反しない範囲で、利用者の同意なく個人データを提供することがあります。
                <ol className="list-disc list-inside pl-6 pt-2 space-y-1">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  <li>合併、会社分割、事業譲渡その他の事由により利用者の個人情報を含む事業の承継がなされる場合</li>
                </ol>
              </li>
              <li>
                当社は、利用者の同意に基づき個人データを第三者に提供した場合、以下の事項に関する記録を作成し、保管します。
                <ol className="list-disc list-inside pl-6 pt-2 space-y-1">
                  <li>法令に基づく場合</li>
                  <li>利用者から事前の同意を得ていること</li>
                  <li>当該第三者の氏名又は名称その他の当該第三者を特定するに足りる事項</li>
                  <li>当該個人データによって識別される者の氏名その他のその者を特定するに足りる情報</li>
                  <li>当該個人データの項目</li>
                </ol>
              </li>
            </ol>
          </div>

          {/* 第5条 */}
          <div className="space-y-4 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              第5条 個人情報の取扱いの委託
            </h2>
            <p>
              当社は、利用目的の達成に必要な範囲内において、利用者から取得した個人情報の全部又は一部の取扱いを第三者に委託することがあります。この場合、当社は、当該委託先との間で本ポリシーに準じる内容の秘密保持契約等をあらかじめ締結するとともに、当該委託先において情報の適切な安全管理が図られるよう、必要かつ適切な監督を行います。
            </p>
          </div>

          {/* 第6条 */}
          <div className="space-y-4 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              第6条 共同利用
            </h2>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li>当社は、第２条に定めにより取得される個人情報について、第３条に定める目的に従い、当社が責任者として、当社のサービス利用者であり、かつ登録ユーザーが所属する法人、又は当該法人の管理職その他これに準ずる地位にある者との間で共同利用することがあります。</li>
              <li>前項に定めるものの他、当社は、提携事業者その他第三者との間で、提携サービスの提供等に必要な範囲において、お客さまから取得した個人情報を共同利用することがあります。この場合、当社は、あらかじめ、共同して利用する情報の項目、共同して利用する者の範囲、利用する者の利用目的、当該情報の管理について責任を有する者の氏名または名称を公表するものとします。</li>
            </ol>
          </div>

          {/* 第7条 */}
          <div className="space-y-4 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              第7条 情報収集モジュール
            </h2>
            <p>
              本サービスには、本サービスの利用状況及び本サービスを含むサービスに関する広告効果等の情報を解析するため、当社が選定する以下の情報収集モジュールを組み込む場合があります。これに伴い、当社は、以下の情報収集モジュールの提供者に対し利用者情報等の提供を行う場合があります。これらの情報収集モジュールは、個人を特定する情報を含むことなく利用者情報等を収集し、収集された情報は、各情報収集モジュール提供者の定めるプライバシーポリシーその他の規定に基づき管理されます。
            </p>
            <div className="py-2 text-xs sm:text-sm space-y-1">
              <p><strong className="text-[#2B232A]">名称：</strong> Google Analytics</p>
              <p><strong className="text-[#2B232A]">提供者：</strong> Google Inc.</p>
              <p><strong className="text-[#2B232A]">プライバシーポリシー：</strong> <a href="http://www.google.com/intl/ja/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#7b3789] underline hover:text-[#2ECDDF]">http://www.google.com/intl/ja/policies/privacy/</a></p>
            </div>
          </div>

          {/* 第8条 */}
          <div className="space-y-4 pt-6 border-t border-rose-100/60">
            <h2 className="text-xl font-bold text-[#2B232A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7b3789] shrink-0" />
              第8条 安全管理体制
            </h2>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li>当社は、利用者情報等の漏洩、滅失又は毀損の防止その他の利用者情報等の保護のため、個人情報ファイル及び匿名加工情報へのアクセス制限の実施、アクセス権限保有者の必要最小限度の限定、また外部からの不正アクセス防止のためのセキュリティソフトの導入等、利用者情報等の安全管理のために必要かつ適切な措置を講じています。</li>
              <li>当社は、代表取締役を利用者情報等管理責任者と定め、利用者情報等の適正な管理及び継続的な改善を実施します。</li>
            </ol>
          </div>

          {/* 制定日 */}
          <div className="pt-8 text-right text-xs text-[#6E656B] font-bold">
            制定日 2018.11.13
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
              <li><Link href="/privacy" className="hover:text-[#7b3789] transition-colors font-bold">プライバシーポリシー</Link></li>
              <li><Link href="/security" className="hover:text-[#7b3789] transition-colors">情報セキュリティ方針</Link></li>
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