import React, { useState, useEffect } from 'react';
import { 
  Phone, MapPin, Clock, Calendar, Menu, X, Stethoscope, HeartPulse, 
  UserCheck, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, 
  Activity, ArrowUpRight, Instagram, Linkedin, Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants = {
    primary: 'bg-medical-ink text-white hover:bg-medical-sage shadow-md md:shadow-xl shadow-medical-ink/10',
    secondary: 'border border-medical-border bg-white text-medical-ink hover:border-medical-sage hover:text-medical-sage',
    outline: 'border border-medical-ink/20 text-medical-ink hover:border-medical-ink',
    ghost: 'text-medical-ink hover:text-medical-sage'
  };
  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 md:px-10 py-3.5 md:py-4 rounded-full font-medium transition-all duration-500 flex items-center justify-center gap-2 active:scale-95 ${variants[variant as keyof typeof variants]} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionHeading = ({ eyebrow, title, subtitle, centered = false, className = '' }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`${centered ? 'text-center mx-auto' : ''} mb-12 md:mb-24 max-w-4xl ${className}`}
  >
    {eyebrow && <span className="text-medical-sage text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 md:mb-6 block">{eyebrow}</span>}
    <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 text-balance">{title}</h2>
    {subtitle && <p className="text-medical-muted text-base md:text-xl font-light max-w-2xl leading-relaxed mx-auto lg:mx-0">{subtitle}</p>}
  </motion.div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-2 md:py-4' : 'py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-700 ${isScrolled ? 'medical-glass shadow-lg' : 'bg-transparent'}`}>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-medical-sage rounded-full flex items-center justify-center text-white shadow-lg">
              <Stethoscope size={16} md:size={20} />
            </div>
            <div>
              <h1 className="text-sm md:text-lg font-serif font-bold leading-none tracking-tight">Dr. Amine El Fassi</h1>
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-medical-muted mt-1 font-sans font-semibold">Médecine Générale</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['Accueil', 'Services', 'Le Cabinet', 'À Propos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-widest text-medical-ink/60 hover:text-medical-sage transition-colors">{item}</a>
            ))}
            <Button variant="primary" className="px-6 py-2.5 text-[10px] uppercase tracking-widest">Rendez-vous</Button>
          </div>
          <button className="md:hidden text-medical-ink p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>{isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: -10 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          exit={{ opacity: 0, scale: 0.98, y: -10 }} 
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute top-20 left-4 right-4 p-8 bg-white rounded-[32px] shadow-2xl md:hidden z-50 border border-medical-border"
        >
          <div className="flex flex-col gap-6">
            {['Accueil', 'Services', 'Le Cabinet', 'À Propos', 'Contact'].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-xl font-serif text-medical-ink hover:text-medical-sage transition-colors" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <div className="h-px bg-medical-border my-1" />
            <Button className="w-full py-4 text-xs uppercase tracking-widest">Prendre rendez-vous</Button>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="accueil" className="relative min-h-screen flex flex-col overflow-hidden bg-medical-bg pt-32 md:pt-40">
    {/* Background decoration */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute top-0 right-0 w-1/2 h-full bg-medical-accent/10 -z-10 hidden lg:block" 
    />
    
    <div className="max-w-7xl mx-auto px-4 md:px-6 w-full my-auto pb-12 md:pb-20">
      {/* Mobile Hero Composition */}
      <div className="lg:hidden flex flex-col">
        <div className="flex flex-col">
          {/* Location Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-medical-sage/30" />
            <span className="text-medical-sage text-[10px] font-bold uppercase tracking-[0.3em]">Cabinet Casablanca • Anfa</span>
          </motion.div>

          {/* Portrait & Headline Integration */}
          <div className="relative mb-8">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[16/11] rounded-[28px] overflow-hidden shadow-2xl border-2 border-white/50 mb-6"
            >
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop" 
                alt="Dr. Amine El Fassi" 
                className="w-full h-full object-cover grayscale-[0.1]" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-ink/30 via-transparent to-transparent" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl font-serif leading-[1.15] tracking-tight text-medical-ink"
            >
              Une médecine <br />
              <span className="italic text-medical-sage font-light">humaine</span> & rigoureuse.
            </motion.h1>
          </div>

          {/* Supporting Content */}
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base text-medical-muted font-light leading-relaxed max-w-md"
            >
              Votre santé mérite une attention particulière. Nous vous accueillons dans un cadre serein pour un suivi médical d'excellence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-3"
            >
              <Button className="w-full py-4 text-sm shadow-xl">Prendre rendez-vous</Button>
              <Button variant="secondary" className="w-full py-4 text-sm">
                <Phone size={16} className="text-medical-sage" /> Appeler le cabinet
              </Button>
            </motion.div>

            {/* Trust Points */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center gap-8 border-t border-medical-border pt-8"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-medical-ink">15+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-medical-muted font-bold mt-1">Années d'expertise</span>
              </div>
              <div className="w-px h-8 bg-medical-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-medical-ink">5k+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-medical-muted font-bold mt-1">Patients suivis</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Hero Composition */}
      <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-medical-sage/30" />
            <span className="text-medical-sage text-xs font-bold uppercase tracking-[0.3em]">Cabinet Casablanca • Anfa</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-8xl font-serif leading-[0.95] mb-8 tracking-tight"
          >
            Une médecine <br />
            <span className="italic text-medical-sage font-light">humaine</span> & <br />
            rigoureuse.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-medical-muted font-light max-w-xl leading-relaxed mb-12"
          >
            Votre santé mérite une attention particulière. Nous vous accueillons dans un cadre serein pour un suivi médical d'excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-5"
          >
            <Button className="group text-sm py-4 px-10">
              Prendre rendez-vous 
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="text-sm py-4 px-10">
              <Phone size={16} className="text-medical-sage" /> 
              Appeler le cabinet
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center gap-12 border-t border-medical-border pt-12"
          >
            <div>
              <p className="text-3xl font-serif font-bold">15+</p>
              <p className="text-[10px] uppercase tracking-widest text-medical-muted font-bold mt-1">Expertise</p>
            </div>
            <div className="w-px h-10 bg-medical-border" />
            <div>
              <p className="text-3xl font-serif font-bold">5k+</p>
              <p className="text-[10px] uppercase tracking-widest text-medical-muted font-bold mt-1">Patients</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }} 
          animate={{ opacity: 1, scale: 1, x: 0 }} 
          transition={{ duration: 1.2, delay: 0.5 }} 
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl border-4 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop" 
              alt="Dr. Amine El Fassi" 
              className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-ink/40 via-transparent to-transparent" />
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[32px] shadow-2xl border border-medical-border max-w-[240px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-medical-sage/10 rounded-full flex items-center justify-center text-medical-sage">
                <ShieldCheck size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Qualité Certifiée</span>
            </div>
            <p className="text-sm font-light leading-snug text-medical-muted">Une approche rigoureuse validée par des années de pratique.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "Médecine Générale", icon: <Stethoscope />, desc: "Consultations complètes pour adultes et enfants, diagnostic et orientation." },
    { title: "Suivi Chronique", icon: <Activity />, desc: "Accompagnement personnalisé pour le diabète, l'hypertension et autres pathologies." },
    { title: "Bilan de Santé", icon: <HeartPulse />, desc: "Check-up complet et examens préventifs adaptés à votre profil et âge." },
    { title: "Pédiatrie", icon: <UserCheck />, desc: "Suivi de croissance, vaccinations et soins courants pour les plus jeunes." }
  ];
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-medical-sage/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          eyebrow="Expertise Médicale" 
          title="Des soins attentifs pour toute la famille." 
          subtitle="Nous couvrons l'ensemble de vos besoins de santé primaire avec une rigueur scientifique et une écoute humaine." 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="mb-8 md:mb-10 relative">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-14 h-14 md:w-20 md:h-20 bg-medical-bg rounded-[24px] flex items-center justify-center text-medical-sage group-hover:bg-medical-sage group-hover:text-white transition-all duration-500 shadow-sm"
                >
                  {React.cloneElement(s.icon as React.ReactElement, { size: 28 })}
                </motion.div>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-medical-sage transition-colors duration-500">{s.title}</h3>
              <p className="text-medical-muted font-light leading-relaxed mb-8 text-base md:text-lg">{s.desc}</p>
              <div className="h-px w-full bg-medical-border group-hover:w-1/2 group-hover:bg-medical-sage transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Cabinet = () => (
  <section id="le cabinet" className="section-padding bg-medical-bg relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-sage/5 rounded-full blur-3xl -ml-48 -mb-48" />
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <SectionHeading 
            eyebrow="L'Environnement" 
            title="Un espace conçu pour votre sérénité." 
            subtitle="Le cabinet a été pensé comme un refuge calme au cœur de Casablanca, où la confidentialité et le confort sont prioritaires." 
          />
          <div className="space-y-10 md:space-y-12">
            {[
              { t: "Confidentialité Totale", d: "Espaces isolés phoniquement pour des échanges en toute discrétion." },
              { t: "Équipement Moderne", d: "Outils de diagnostic de dernière génération pour une précision accrue." },
              { t: "Cadre Apaisant", d: "Design minimaliste et lumière naturelle pour réduire le stress médical." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 md:gap-8 group"
              >
                <div className="mt-1 text-medical-sage/30 group-hover:text-medical-sage transition-all duration-500 group-hover:scale-110">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-serif mb-3 group-hover:text-medical-sage transition-colors duration-500">{item.t}</h4>
                  <p className="text-medical-muted font-light text-base md:text-lg leading-relaxed">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4 md:space-y-8 pt-16">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="rounded-[32px] md:rounded-[50px] overflow-hidden shadow-2xl border-4 border-white/50"
              >
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800" alt="Cabinet" className="w-full h-full object-cover aspect-[4/5] hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="rounded-[32px] md:rounded-[50px] overflow-hidden shadow-2xl border-4 border-white/50"
              >
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" alt="Waiting Room" className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
            <div className="space-y-4 md:space-y-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="rounded-[32px] md:rounded-[50px] overflow-hidden shadow-2xl border-4 border-white/50"
              >
                <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800" alt="Equipment" className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-medical-sage p-10 md:p-14 rounded-[32px] md:rounded-[50px] text-white flex flex-col justify-end aspect-[4/5] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                <Quote size={48} className="mb-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <p className="text-3xl md:text-5xl font-serif mb-6 italic leading-tight">"Le soin commence par l'accueil."</p>
                <p className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold opacity-60">Dr. Amine El Fassi</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Steps = () => (
  <section className="section-padding bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <SectionHeading centered eyebrow="Processus" title="Prendre rendez-vous simplement." className="mb-20 md:mb-32" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 relative">
        {[
          { n: "01", t: "Contactez le cabinet", d: "Par téléphone ou via notre plateforme en ligne pour un premier contact." },
          { n: "02", t: "Choisissez votre créneau", d: "Sélectionnez l'horaire qui vous convient le mieux parmi nos disponibilités." },
          { n: "03", t: "Consultation sereine", d: "Nous vous accueillons dans un cadre apaisant pour votre suivi médical." }
        ].map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative group"
          >
            <div className="flex items-baseline gap-6 mb-6 md:mb-10">
              <span className="text-6xl md:text-8xl font-serif font-light text-medical-sage/10 group-hover:text-medical-sage group-hover:opacity-30 transition-all duration-700">{s.n}</span>
              <h3 className="text-2xl md:text-3xl font-serif group-hover:translate-x-2 transition-transform duration-500">{s.t}</h3>
            </div>
            <p className="text-medical-muted font-light text-base md:text-xl leading-relaxed pl-20 md:pl-28">{s.d}</p>
            {i < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-12 w-24 h-px bg-medical-border/50" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section-padding bg-medical-bg relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      <SectionHeading centered eyebrow="Témoignages" title="Une relation de confiance." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {[
          { q: "Médecin à l’écoute, consultation claire et rassurante. On se sent vraiment pris en charge.", a: "Mme. Bensalah" },
          { q: "Un cabinet agréable et une prise en charge très professionnelle. Le Dr. El Fassi est très rigoureux.", a: "Mr. Amrani" },
          { q: "On se sent écouté et bien orienté dès le premier rendez-vous. Je recommande vivement.", a: "Mme. Tazi" }
        ].map((t, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group"
          >
            <Quote className="text-medical-sage/10 mb-8 group-hover:text-medical-sage group-hover:opacity-20 transition-all duration-500" size={56} />
            <p className="text-medical-ink text-xl md:text-3xl font-serif italic mb-8 leading-relaxed group-hover:text-medical-sage transition-colors duration-500">"{t.q}"</p>
            <div className="flex items-center gap-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px bg-medical-sage/30" 
              />
              <p className="font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-medical-sage">{t.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <SectionHeading 
            eyebrow="Contact" 
            title="Nous trouver." 
            subtitle="Situé au cœur du quartier d'Anfa, notre cabinet est facilement accessible pour vos consultations." 
            className="mb-12 md:mb-20" 
          />
          <div className="space-y-10 md:space-y-14">
            {[
              { i: <MapPin />, t: "Adresse", v: "123 Boulevard d'Anfa, Casablanca" },
              { i: <Phone />, t: "Téléphone", v: "+212 5 22 XX XX XX" },
              { i: <Clock />, t: "Horaires", v: "Lun - Ven: 09h - 18h30 | Sam: 09h - 13h" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 md:gap-8 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-[24px] bg-medical-bg flex items-center justify-center text-medical-sage shadow-sm flex-shrink-0 group-hover:bg-medical-sage group-hover:text-white transition-all duration-500">
                  {React.cloneElement(item.i as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-medical-muted mb-2">{item.t}</p>
                  <p className="text-xl md:text-3xl font-serif leading-tight group-hover:text-medical-sage transition-colors duration-500">{item.v}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mt-16 md:mt-24">
            <Button className="w-full sm:w-auto text-base py-4 px-12">Obtenir l'itinéraire</Button>
            <Button variant="secondary" className="w-full sm:w-auto text-base py-4 px-12">Ouvrir Google Maps</Button>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[16/9] md:aspect-square rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl border-8 border-medical-bg group"
          >
            <div className="absolute inset-0 bg-medical-accent/10 group-hover:bg-medical-accent/20 transition-colors duration-1000 flex items-center justify-center text-center p-12">
              <div className="max-w-xs">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border border-medical-border"
                >
                  <MapPin size={36} className="text-medical-sage" />
                </motion.div>
                <h3 className="text-2xl md:text-4xl font-serif mb-4">Carte Interactive</h3>
                <p className="text-medical-muted font-light text-base md:text-lg">Cliquez pour ouvrir la localisation exacte dans votre application de navigation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 md:py-48 bg-medical-ink text-white text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[80%] md:w-[50%] h-[80%] md:h-[50%] bg-medical-sage rounded-full blur-[80px] md:blur-[150px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[80%] md:w-[50%] h-[80%] md:h-[50%] bg-medical-sage-light/20 rounded-full blur-[80px] md:blur-[150px]" 
      />
    </div>
    <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-8xl font-serif mb-8 md:mb-12 leading-[1.1] tracking-tight">Prenez soin de votre santé dès aujourd'hui.</h2>
        <p className="text-lg md:text-2xl text-white/60 font-light mb-12 md:mb-20 max-w-2xl mx-auto leading-relaxed">Une médecine générale attentive et rigoureuse pour vous accompagner au quotidien dans un cadre d'exception.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          <Button className="w-full sm:w-auto px-12 md:px-20 py-6 text-lg md:text-2xl bg-white !text-medical-ink hover:bg-medical-bg">Prendre rendez-vous</Button>
          <Button variant="outline" className="w-full sm:w-auto px-12 md:px-20 py-6 text-lg md:text-2xl border-white/30 text-white hover:bg-white/10">Appeler le cabinet</Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-medical-ink py-16 md:py-32 border-t border-white/5 text-white/80">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-16 md:mb-32">
        <div className="md:col-span-6">
          <div className="flex items-center gap-4 mb-6 md:mb-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-medical-sage rounded-full flex items-center justify-center text-white shadow-xl">
              <Stethoscope size={20} md:size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">Dr. Amine El Fassi</h2>
          </div>
          <p className="text-white/40 font-light max-w-md text-sm md:text-lg leading-relaxed">
            Cabinet de médecine générale d'excellence à Casablanca. <br className="hidden md:block" />
            Une approche rigoureuse, humaine et personnalisée pour votre bien-être durable.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 md:col-span-6 gap-10">
          <div className="md:col-span-3">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-10 text-white/20">Navigation</h4>
            <ul className="space-y-4 md:space-y-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              {['Accueil', 'Services', 'Le Cabinet', 'À Propos'].map(i => (
                <li key={i}><a href="#" className="hover:text-medical-sage transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-10 text-white/20">Contact</h4>
            <p className="text-sm md:text-xl font-serif mb-2 text-white">+212 5 22 XX XX XX</p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">Boulevard d'Anfa, Casablanca</p>
          </div>
        </div>
      </div>
      <div className="pt-10 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
        <p>© 2026 Dr. Amine El Fassi. Tous droits réservés.</p>
        <div className="flex gap-8 md:gap-16">
          <a href="#" className="hover:text-white/40 transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white/40 transition-colors">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-medical-bg">
      <Navbar />
      <Hero />
      <Services />
      <Cabinet />
      <Steps />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
