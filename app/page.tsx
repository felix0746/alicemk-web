"use client";

import React, { useState } from 'react';

import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';

import { ArrowRight, Clock, MapPin, Menu, X, Check } from 'lucide-react';



// 模擬服務資料 (您可以換成 Alice MK 的真實資料)

const services = [

  {

    id: 1,

    title: "極致水光深層保濕",

    price: "NT$ 2,500",

    time: "90 min",

    desc: "針對乾燥缺水肌膚，導入高濃度玻尿酸，重現透亮光澤。",

    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop&q=80",

    steps: [

      "專業肌膚檢測與諮詢",

      "深層清潔與去角質",

      "高濃度玻尿酸導入",

      "保濕面膜敷設",

      "鎖水精華塗抹",

      "防曬保護完成"

    ],

    benefits: [

      "深層補水，改善乾燥",

      "提升肌膚光澤度",

      "減少細紋與粗糙感",

      "維持 48 小時水潤感"

    ]

  },

  {

    id: 2,

    title: "韓式無痛清粉刺",

    price: "NT$ 1,800",

    time: "60 min",

    desc: "溫和手法清潔毛孔深層髒污，改善草莓鼻與閉鎖性粉刺。",

    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format&fit=crop&q=80",

    steps: [

      "溫和卸妝與清潔",

      "蒸氣軟化毛孔",

      "專業無痛清粉刺",

      "鎮定舒緩護理",

      "收斂毛孔精華",

      "保濕修護完成"

    ],

    benefits: [

      "徹底清除黑頭粉刺",

      "改善毛孔粗大問題",

      "無痛舒適體驗",

      "減少粉刺再生"

    ]

  },

  {

    id: 3,

    title: "V臉緊緻拉提護理",

    price: "NT$ 3,200",

    time: "100 min",

    desc: "結合專業手技與儀器，改善臉部線條，恢復肌膚彈性。",

    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",

    steps: [

      "肌膚緊緻度檢測",

      "深層清潔與準備",

      "專業手技按摩",

      "緊緻儀器導入",

      "拉提精華塗抹",

      "V臉塑形完成"

    ],

    benefits: [

      "緊緻臉部輪廓",

      "提升肌膚彈性",

      "改善雙下巴",

      "打造立體V臉"

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
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* 關閉按鈕 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
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
                  <h2 className="text-2xl md:text-3xl font-medium text-primary-900 mb-2 md:mb-0">
                    {service.title}
                  </h2>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-2xl font-semibold text-primary-500">{service.price}</span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>{service.time}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>

                {/* 療程步驟 */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-primary-900 mb-4">療程步驟</h3>
                  <ul className="space-y-3">
                    {service.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-medium mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 flex-1">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 療程效果 */}
                <div>
                  <h3 className="text-lg font-medium text-primary-900 mb-4">療程效果</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check size={18} className="text-primary-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 預約按鈕 */}
                <button
                  onClick={onClose}
                  className="mt-8 w-full bg-primary-500 text-white py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
                >
                  立即預約此療程
                </button>
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

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (

    <main className="min-h-screen bg-primary-50 text-gray-800 font-sans pb-20">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="text-xl md:text-2xl font-light tracking-widest text-primary-900">
              ALICE MK FACE
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary-500 transition-colors">首頁</a>
              <a href="#services" className="text-gray-700 hover:text-primary-500 transition-colors">療程服務</a>
              <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors">關於我們</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors">聯絡我們</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
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
                <div className="py-4 space-y-3 border-t border-gray-100">
                  <a
                    href="#home"
                    onClick={() => setIsNavOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-lg transition-colors"
                  >
                    首頁
                  </a>
                  <a
                    href="#services"
                    onClick={() => setIsNavOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-lg transition-colors"
                  >
                    療程服務
                  </a>
                  <a
                    href="#about"
                    onClick={() => setIsNavOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-lg transition-colors"
                  >
                    關於我們
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsNavOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-lg transition-colors"
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

            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2070&auto=format&fit=crop" 

            alt="Alice MK Face Hero" 

            fill

            className="object-cover opacity-90"

            priority

          />

          <div className="absolute inset-0 bg-black/20" /> {/* 遮罩讓文字清楚 */}

        </div>

        

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">

          <motion.h1 

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-widest mb-3 md:mb-4 px-2"

          >

            ALICE MK FACE

          </motion.h1>

          <motion.p 

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: 0.5, duration: 0.8 }}

            className="text-base sm:text-lg md:text-xl font-light mb-6 md:mb-8 max-w-2xl px-2"

          >

            專屬您的客製化皮膚管理專家

          </motion.p>

          <motion.button 

            whileHover={{ scale: 1.05 }}

            whileTap={{ scale: 0.95 }}

            className="bg-white/90 text-primary-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full backdrop-blur-sm transition hover:bg-white text-sm sm:text-base"

          >

            立即預約體驗

          </motion.button>

        </div>

      </section>



      {/* 2. 品牌理念 (簡單帶過) */}
      <section id="about" className="py-12 md:py-16 px-4 sm:px-6 text-center bg-white">

        <h2 className="text-xl sm:text-2xl font-medium text-primary-900 mb-4 md:mb-6">About Us</h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed px-2">

          我們深信，美麗源自於健康的肌膚基底。Alice MK Face 結合頂級保養產品與專業手技，

          為您量身打造最適合的護膚方案。在這裡，您可以放慢腳步，享受一段專屬於您的療癒時光。

        </p>

      </section>



      {/* 3. 服務項目列表 (核心功能區) */}
      <section id="services" className="py-12 md:py-16 px-4 sm:px-6 bg-primary-50">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between mb-8 md:mb-10 px-2">

            <h2 className="text-xl sm:text-2xl font-medium text-primary-900">精選療程</h2>

            <span className="text-xs sm:text-sm text-gray-500 cursor-pointer flex items-center gap-1 hover:text-primary-500">

              查看全部 <ArrowRight size={14} className="sm:w-4 sm:h-4" />

            </span>

          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {services.map((service) => (

              <motion.div 

                key={service.id}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                onClick={() => handleServiceClick(service)}

                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"

              >

                <div className="relative h-56 sm:h-64 overflow-hidden">

                  <Image 

                    src={service.image} 

                    alt={service.title}

                    fill

                    className="object-cover transition-transform duration-500 group-hover:scale-110"

                  />

                </div>

                <div className="p-5 sm:p-6">

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">

                    <h3 className="text-base sm:text-lg font-medium text-gray-900">{service.title}</h3>

                    <span className="text-primary-500 font-semibold text-sm sm:text-base">{service.price}</span>

                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">

                    <Clock size={14} />

                    <span>{service.time}</span>

                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-2">{service.desc}</p>

                  <span className="text-xs text-primary-500 font-medium group-hover:underline">

                    查看詳情 →

                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* 4. 底部資訊 */}
      <footer id="contact" className="bg-primary-900 text-primary-100 py-10 md:py-12 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">

          <div>

            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-white">Alice MK Face</h3>

            <div className="space-y-2 text-xs sm:text-sm opacity-80">

              <p className="flex items-center gap-2"><MapPin size={14} className="sm:w-4 sm:h-4"/> 台北市大安區 (詳細地址)</p>

              <p>Mon - Sat: 11:00 - 20:00</p>

            </div>

          </div>

          <div className="flex gap-4 items-center md:justify-end">

            {/* 這裡可以放 IG Icon 連結 */}

            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-xs sm:text-sm cursor-pointer hover:bg-white/20 transition-colors">IG</div>

            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-xs sm:text-sm cursor-pointer hover:bg-white/20 transition-colors">FB</div>

          </div>

        </div>

      </footer>



      {/* 5. Sticky Bottom Action (模擬 LINE LIFF 體驗) */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">

        <button className="bg-[#06C755] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#05b34c] transition-colors font-bold text-sm sm:text-base">

            {/* 使用 LINE 的綠色 */}

            <span>💬 LINE 預約諮詢</span>

        </button>

      </div>



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
