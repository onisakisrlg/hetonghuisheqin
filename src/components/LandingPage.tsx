import { motion } from 'motion/react';
import { Menu, X, Globe, Car, Plane, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ホーム', href: '#hero' },
    { name: '事業内容', href: '#services' },
    { name: '会社概要', href: '#about' },
    { name: 'アクセス', href: '#locations' },
    { name: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-stone-800 tracking-wider">
              合同会社琴商事
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-rose-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-rose-100 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-600 hover:text-rose-500 block px-3 py-4 rounded-md text-base font-medium border-b border-rose-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-6 tracking-tight">
            世界と日本を<br className="md:hidden" />繋ぐ架け橋
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-3xl mx-auto font-light">
            日中国際貿易、旅行手配、レンタカー事業を通じて、<br className="hidden md:block" />
            お客様に最高のサービスと価値を提供します。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services" 
              className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-rose-500/30 flex items-center justify-center gap-2"
            >
              事業内容を見る <ChevronRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-full font-semibold text-lg transition-all"
            >
              お問い合わせ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-rose-500" />,
      title: "日中国際貿易",
      description: "日本と中国の架け橋として、高品質な商品の輸出入をサポート。市場調査から物流までトータルでコーディネートいたします。",
    },
    {
      icon: <Plane className="w-12 h-12 text-pink-500" />,
      title: "旅行サービス手配業",
      description: "お客様のニーズに合わせた最適な旅行プランをご提案。航空券、宿泊、ツアーの手配など、快適な旅をサポートします。",
    },
    {
      icon: <Car className="w-12 h-12 text-rose-400" />,
      title: "レンタカー業",
      description: "ビジネスからレジャーまで、幅広い車種をご用意。安心・安全・快適なドライブ体験を提供いたします。",
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">事業内容</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            多角的な事業展開で、お客様のビジネスとライフスタイルをサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 p-8"
            >
              <div className="mb-6 p-4 bg-rose-50 rounded-2xl inline-block group-hover:bg-rose-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Locations = () => {
  return (
    <section id="locations" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">アクセス</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Head Office */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-rose-50"
          >
            <div className="p-8 border-b border-rose-50">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-rose-600" />
                <h3 className="text-2xl font-bold text-stone-800">本店</h3>
              </div>
              <p className="text-stone-600 ml-9">
                〒124-0022 東京都葛飾区奥戸4丁目17番4号
              </p>
            </div>
            <div className="h-80 w-full bg-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.467389868673!2d139.8596639762955!3d35.71473892813583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601888a7c2f00001%3A0x0!2z5p2x5Lqs6YO96JGb6aO-5Yy65aWl5oi477yU5LiB55uu77yR77yX4oiS77yU!5e0!3m2!1sja!2sjp!4v1709620000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Head Office Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Branch Office */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-rose-50"
          >
            <div className="p-8 border-b border-rose-50">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-rose-600" />
                <h3 className="text-2xl font-bold text-stone-800">江東支店</h3>
              </div>
              <p className="text-stone-600 ml-9">
                〒135-0033 東京都江東区深川1-12 協和ビル2階34
              </p>
            </div>
            <div className="h-80 w-full bg-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.496660636846!2d139.7965!3d35.6647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018890000000001%3A0x0!2z5p2x5Lqs6YO95rGf5p2x5Yy65rex5bed77yR5LiB55uu77yR77yS!5e0!3m2!1sja!2sjp!4v1709620000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Branch Office Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-rose-50/50 rounded-3xl p-8 md:p-12 shadow-sm border border-rose-100"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">会社概要</h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row border-b border-rose-200 pb-4">
              <span className="w-40 font-bold text-stone-700 flex-shrink-0 mb-2 md:mb-0">会社名</span>
              <span className="text-stone-600">合同会社琴商事 (Kin Shoji LLC)</span>
            </div>
            <div className="flex flex-col md:flex-row border-b border-rose-200 pb-4">
              <span className="w-40 font-bold text-stone-700 flex-shrink-0 mb-2 md:mb-0">本店所在地</span>
              <span className="text-stone-600">〒124-0022 東京都葛飾区奥戸4丁目17番4号</span>
            </div>
            <div className="flex flex-col md:flex-row border-b border-rose-200 pb-4">
              <span className="w-40 font-bold text-stone-700 flex-shrink-0 mb-2 md:mb-0">江東支店</span>
              <span className="text-stone-600">〒135-0033 東京都江東区深川1-12 協和ビル2階34</span>
            </div>
            <div className="flex flex-col md:flex-row border-b border-rose-200 pb-4">
              <span className="w-40 font-bold text-stone-700 flex-shrink-0 mb-2 md:mb-0">電話番号</span>
              <span className="text-stone-600">03-6657-8387</span>
            </div>
            <div className="flex flex-col md:flex-row border-b border-rose-200 pb-4">
              <span className="w-40 font-bold text-stone-700 flex-shrink-0 mb-2 md:mb-0">メール</span>
              <span className="text-stone-600">kinshoji001@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-stone-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">お問い合わせ</h2>
        <p className="text-stone-300 mb-12 text-lg">
          事業に関するご質問やご相談など、お気軽にお問い合わせください。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <Phone className="w-10 h-10 mx-auto mb-4 text-rose-400" />
            <h3 className="text-xl font-bold mb-2">お電話</h3>
            <p className="text-2xl font-mono">03-6657-8387</p>
            <p className="text-sm text-stone-400 mt-2">平日 9:00 - 18:00</p>
          </div>
          
          <a href="mailto:kinshoji001@gmail.com" className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
            <Mail className="w-10 h-10 mx-auto mb-4 text-rose-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">メール</h3>
            <p className="text-xl break-all">kinshoji001@gmail.com</p>
            <p className="text-sm text-stone-400 mt-2">24時間受付</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">合同会社琴商事</span>
            <p className="text-sm mt-1">Kin Shoji LLC</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Kin Shoji LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
