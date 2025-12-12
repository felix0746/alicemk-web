"use client";

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';

import { ArrowRight, Clock, MapPin, Menu, X, Check, Instagram, Star, AtSign } from 'lucide-react';



// Alice MK Face 服務資料

const services = [

  {

    id: 1,

    title: "基礎保養",

    price: "NT$ 1,000",

    time: "60 min",

    desc: "溫和清潔、基礎保濕與滋潤，適合日常保養維持肌膚健康狀態。",

    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",

    steps: [

      "專業肌膚檢測與諮詢",

      "溫和深層清潔",

      "基礎保濕導入",

      "滋潤精華塗抹",

      "鎖水保護完成"

    ],

    benefits: [

      "維持肌膚健康狀態",

      "基礎保濕滋潤",

      "溫和適合敏感肌",

      "日常保養首選"

    ]

  },

  {

    id: 2,

    title: "抗痘胜肽",

    price: "NT$ 1,300",

    time: "70 min",

    desc: "針對痘痘肌膚，使用胜肽成分調理，改善發炎與預防痘痘生成。",

    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop&q=80",

    steps: [

      "肌膚問題檢測",

      "深層清潔與去角質",

      "胜肽抗痘導入",

      "鎮定舒緩護理",

      "控油保濕完成"

    ],

    benefits: [

      "改善痘痘發炎",

      "調理油水平衡",

      "預防痘痘生成",

      "舒緩敏感肌膚"

    ]

  },

  {

    id: 3,

    title: "杏仁酸煥膚",

    price: "NT$ 1,300",

    time: "70 min",

    desc: "溫和杏仁酸煥膚，去除老廢角質，改善暗沉與粗糙，重現透亮肌膚。",

    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop&q=80",

    steps: [

      "肌膚狀態評估",

      "深層清潔準備",

      "杏仁酸煥膚處理",

      "鎮定舒緩護理",

      "保濕修護完成"

    ],

    benefits: [

      "去除老廢角質",

      "改善暗沉粗糙",

      "提亮肌膚光澤",

      "溫和煥膚體驗"

    ]

  },

  {

    id: 4,

    title: "水氧保濕",

    price: "NT$ 1,600",

    time: "80 min",

    desc: "高濃度水氧導入，深層補水保濕，重現肌膚水潤光澤與彈性。",

    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",

    steps: [

      "肌膚水分檢測",

      "深層清潔與準備",

      "水氧保濕導入",

      "保濕面膜敷設",

      "鎖水精華完成"

    ],

    benefits: [

      "深層補水保濕",

      "提升肌膚光澤",

      "改善乾燥缺水",

      "維持水潤彈性"

    ]

  },

  {

    id: 5,

    title: "鑽石光感",

    price: "NT$ 1,600",

    time: "90 min",

    desc: "鑽石微雕技術，去除老廢角質與細紋，打造光滑細緻的鑽石光感肌。",

    image: "https://images.unsplash.com/photo-1512290923902-8a92f1c04996?w=800&auto=format&fit=crop&q=80",

    steps: [

      "肌膚狀態分析",

      "深層清潔準備",

      "鑽石微雕處理",

      "精華導入護理",

      "保濕修護完成"

    ],

    benefits: [

      "去除細紋粗糙",

      "打造光滑肌膚",

      "提升肌膚光澤",

      "細緻毛孔改善"

    ]

  },

  {

    id: 6,

    title: "海綿微晶",

    price: "NT$ 1,800",

    time: "90 min",

    desc: "海綿微晶技術，溫和去除角質與粉刺，改善毛孔粗大與膚質問題。",

    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop&q=80",

    steps: [

      "肌膚問題檢測",

      "深層清潔準備",

      "海綿微晶處理",

      "鎮定舒緩護理",

      "保濕修護完成"

    ],

    benefits: [

      "溫和去除角質",

      "改善毛孔粗大",

      "清除粉刺黑頭",

      "提升肌膚質感"

    ]

  }

];



// Modal 組件
function ServiceModal({ service, isOpen, onClose }: { service: typeof services[0] | null, isOpen: boolean, onClose: () => void }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            {/* Modal 內容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* 關閉按鈕 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 hover:bg-primary-200 transition-colors z-10"
              >
                <X size={20} className="text-primary-700" />
              </button>

              {/* 圖片 */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* 內容 */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-2 md:mb-0 tracking-wide">
                    {service.title}
                  </h2>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-2xl font-semibold text-primary-700">{service.price}</span>
                    <div className="flex items-center gap-1 text-sm text-primary-700">
                      <Clock size={14} />
                      <span>{service.time}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-800 mb-6 leading-relaxed">{service.desc}</p>

                {/* 療程步驟 */}
                <div className="mb-6">
                  <h3 className="text-lg font-serif font-light text-gray-900 mb-4 tracking-wide">療程步驟</h3>
                  <ul className="space-y-3">
                    {service.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center text-sm font-medium mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-900 flex-1">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 療程效果 */}
                <div>
                  <h3 className="text-lg font-serif font-light text-gray-900 mb-4 tracking-wide">療程效果</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check size={18} className="text-primary-700 flex-shrink-0" />
                        <span className="text-gray-900">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 預約按鈕 */}
                <div className="mt-8 space-y-3">
                  <motion.a
                    href="https://line.me/R/ti/p/@your-line-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-2xl flex items-center justify-center gap-2 border-2 border-white/40"
                    style={{ backgroundColor: '#9a4545', color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                  >
                    <span>💬</span>
                    <span>LINE 預約諮詢</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const target = footerRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // 平滑滾動到指定區塊
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsNavOpen(false); // 關閉手機選單
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar 高度偏移
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (

    <main className="min-h-screen bg-primary-50 text-gray-900 font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-xl md:text-2xl font-serif font-light tracking-widest text-primary-900 cursor-pointer hover:text-primary-600 transition-colors"
            >
              ALICE MK FACE
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-gray-900 hover:text-primary-600 transition-colors font-light cursor-pointer"
              >
                療程服務
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-gray-900 hover:text-primary-600 transition-colors font-light cursor-pointer"
              >
                關於我們
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-gray-900 hover:text-primary-600 transition-colors font-light cursor-pointer"
              >
                聯絡我們
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2 rounded-lg text-gray-900 hover:bg-primary-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-3 border-t border-primary-200 bg-white/95">
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="block px-4 py-2 text-gray-900 hover:bg-primary-100 hover:text-primary-700 rounded-lg transition-colors cursor-pointer"
                  >
                    療程服務
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="block px-4 py-2 text-gray-900 hover:bg-primary-100 hover:text-primary-700 rounded-lg transition-colors cursor-pointer"
                  >
                    關於我們
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="block px-4 py-2 text-gray-900 hover:bg-primary-100 hover:text-primary-700 rounded-lg transition-colors cursor-pointer"
                  >
                    聯絡我們
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* 1. Hero Section: 第一眼印象 */}
      <section id="home" className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden mt-16 md:mt-20">

        <div className="absolute inset-0">

        <Image

            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 

            alt="Alice MK Face Hero" 

            fill

            className="object-cover opacity-90"

          priority

          />

          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} /> {/* 遮罩讓文字清楚 */}

        </div>

        

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">

          <motion.h1 

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-widest mb-3 md:mb-4 px-2 drop-shadow-2xl text-white"

          >

            ALICE MK FACE

          </motion.h1>

          <motion.p 

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: 0.5, duration: 0.8 }}

            className="text-base sm:text-lg md:text-xl font-light mb-6 md:mb-8 max-w-2xl px-2 drop-shadow-lg text-white"

          >

            專屬您的客製化皮膚管理專家

          </motion.p>

          <motion.button 

            whileHover={{ y: -4, scale: 1.02 }}

            whileTap={{ scale: 0.98 }}

            className="bg-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-gray-50 text-sm sm:text-base font-medium shadow-xl hover:shadow-2xl border border-primary-200"
            style={{ color: '#9a4545' }}

          >

            立即預約體驗

          </motion.button>

        </div>

      </section>



      {/* 2. 品牌理念 (簡單帶過) */}
      <section id="about" className="py-12 md:py-16 px-4 sm:px-6 text-center bg-primary-50">

        <h2 className="text-xl sm:text-2xl font-serif font-light text-gray-900 mb-4 md:mb-6 tracking-wide">About Us</h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-800 leading-relaxed px-2">

          我們深信，美麗源自於健康的肌膚基底。Alice MK Face 結合頂級保養產品與專業手技，

          為您量身打造最適合的護膚方案。在這裡，您可以放慢腳步，享受一段專屬於您的療癒時光。

        </p>

      </section>



      {/* 3. 服務項目列表 (核心功能區) */}
      <section id="services" className="py-12 md:py-16 px-4 sm:px-6 bg-primary-50">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between mb-8 md:mb-10 px-2">

            <h2 className="text-xl sm:text-2xl font-serif font-light text-gray-900 tracking-wide">精選療程</h2>

            {/* 當顯示所有服務時才顯示「收起」按鈕，當只顯示 3 個時不顯示（因為底部有提示卡片） */}
            {showAllServices && (
              <motion.button
                onClick={() => setShowAllServices(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white border-2 border-primary-300 text-primary-700 rounded-full cursor-pointer flex items-center gap-2 hover:bg-primary-50 hover:border-primary-400 transition-all shadow-sm hover:shadow-md text-sm sm:text-base font-medium"
              >
                收起
                <ArrowRight size={16} className="rotate-90 transition-transform" />
              </motion.button>
            )}

          </div>



          <div className="space-y-12 md:space-y-16">

            {(showAllServices ? services : services.slice(0, 3)).map((service, index) => {

              const isEven = index % 2 === 0;

              return (

                <motion.div 

                  key={service.id}

                  initial={{ opacity: 0, y: 30 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true }}

                  transition={{ duration: 0.6 }}

                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-center`}

                >

                  {/* 圖片區塊 - 加大比例 */}
                  <div 
                    className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                    onClick={() => handleServiceClick(service)}
                  >
                    <Image 

                      src={service.image} 

                      alt={service.title}

                      fill

                      className="object-cover transition-transform duration-700 group-hover:scale-110"

                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* 內容區塊 */}
                  <div 
                    className="w-full md:w-1/2 space-y-4 cursor-pointer"
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-900">{service.title}</h3>
                      <span className="text-primary-600 font-semibold text-lg md:text-xl">{service.price}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-primary-700">
                      <Clock size={16} />
                      <span>{service.time}</span>
                    </div>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{service.desc}</p>

                    <button className="text-primary-700 font-medium hover:text-primary-800 transition-colors flex items-center gap-2 group/btn">
                      <span>查看詳情</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </motion.div>

              );

            })}

          </div>

          {/* 當只顯示 3 個服務時，顯示「還有更多」提示卡片 */}
          {!showAllServices && services.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 md:mt-16"
            >
              {/* 提示卡片 - 更優雅的設計 */}
              <div className="relative bg-gradient-to-r from-primary-50 to-white rounded-2xl p-8 md:p-10 shadow-sm border border-primary-100/50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-3 tracking-wide">
                      還有更多精選療程
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      探索我們完整的 {services.length} 項專業療程服務，為您量身打造最適合的護膚方案
                    </p>
                  </div>
                  <motion.button
                    onClick={() => {
                      // 只展開服務，不滾動，讓用戶保持在當前位置
                      setShowAllServices(true);
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-full font-medium hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap text-base"
                    style={{ 
                      backgroundColor: '#e08585',
                      color: '#ffffff'
                    }}
                  >
                    <span>查看全部療程</span>
                    <ArrowRight size={20} style={{ color: '#ffffff' }} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </section>



      {/* 4. 客戶評價區塊 */}
      <section id="testimonials" className="py-12 md:py-16 px-4 sm:px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl sm:text-2xl font-serif font-light text-gray-900 mb-8 md:mb-12 text-center tracking-wide">客戶評價</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* 評價卡片 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-2xl p-6 shadow-sm border border-primary-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                "服務非常專業，環境也很舒適。做完基礎保養後肌膚明顯變得更水潤有光澤，會再回訪！"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-medium text-sm">
                  王
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">王小姐</p>
                  <p className="text-xs text-gray-500">基礎保養</p>
                </div>
              </div>
            </motion.div>

            {/* 評價卡片 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary-50 rounded-2xl p-6 shadow-sm border border-primary-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                "抗痘胜肽療程真的很有效！原本的痘痘問題改善很多，而且過程很溫和，不會刺激肌膚。"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-medium text-sm">
                  李
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">李小姐</p>
                  <p className="text-xs text-gray-500">抗痘胜肽</p>
                </div>
              </div>
            </motion.div>

            {/* 評價卡片 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary-50 rounded-2xl p-6 shadow-sm border border-primary-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                "水氧保濕療程做完後肌膚超水潤！美容師很細心，會根據我的肌膚狀況調整，非常推薦！"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-medium text-sm">
                  陳
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">陳小姐</p>
                  <p className="text-xs text-gray-500">水氧保濕</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* 5. 底部資訊與地圖 */}
      <footer ref={footerRef} id="contact" className="bg-primary-50 py-4 md:py-6 px-4 sm:px-6">

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-5">

          {/* 左側：聯絡資訊 + 社群 */}
          <div className="md:w-3/5 space-y-3">
            <h3 className="text-base md:text-lg font-serif font-medium mb-3 md:mb-4 tracking-wide" style={{ color: '#7a3535' }}>Alice MK Face</h3>
            <div className="space-y-2 text-xs md:text-sm" style={{ color: '#7a3535' }}>
              <p className="flex items-start gap-2"><MapPin size={13} className="sm:w-4 sm:h-4 flex-shrink-0 mt-0.5"/> 台北市北投區新市街24巷65號</p>
              <div className="space-y-1 ml-6">
                <p className="text-xs md:text-sm">🚇 捷運：北投捷運站2號出口步行5-10分鐘</p>
                <p className="text-xs md:text-sm">🚗 開車：導航北投大豐公園停車場，步行2分鐘（每小時40元）</p>
              </div>
              <p className="mt-2 text-xs md:text-sm">營業時間：週一至週六 11:00 - 20:00</p>
            </div>

            {/* 社交媒體按鈕 */}
            <div className="flex gap-2 items-center pt-2">
              {/* Instagram 連結 */}
              <a 
                href="https://www.instagram.com/alicemk_face?igsh=cGFza2JydGZkM20y" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#9a4545' }}
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5 text-white transition-transform group-hover:scale-110" />
              </a>

              {/* Threads 連結 */}
              <a 
                href="https://www.threads.net/@alicemk_face" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#9a4545' }}
                aria-label="Threads"
              >
                <AtSign size={18} className="sm:w-5 sm:h-5 text-white transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* 右側：地圖 */}
          <div id="location" className="md:w-2/5 flex justify-center md:justify-end">
            <div className="w-full max-w-lg h-44 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-primary-100 bg-white">
              <iframe
                title="Alice MK Face 位置"
                src="https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8C%97%E6%8A%95%E5%8D%80%E6%96%B0%E5%B8%82%E8%A1%9724%E5%B7%B765%E8%99%9F&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </footer>

      {/* 版權欄 - 獨立於頁尾底部 */}
      <div className="bg-white py-3 border-t border-primary-200/30">
        <p className="text-center text-xs text-primary-800/60">
          © 2025 Alice MK Face. All rights reserved.
        </p>
      </div>

      {/* 5. Sticky Bottom Action */}
      {!isFooterVisible && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
          <motion.button 
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl flex items-center gap-2 transition-all duration-300 font-semibold text-sm sm:text-base border-2 border-white/40"
            style={{ 
              backgroundColor: '#9a4545',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)' 
            }}
          >
            <span>💬 LINE 預約諮詢</span>
          </motion.button>
        </div>
      )}



      {/* Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setTimeout(() => setSelectedService(null), 300);
        }}
      />

      </main>

  );

}
