import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/img/34debb3d-c088-4635-87b6-c4b5f0d3e9b5.jpg')",
          filter: 'blur(2px)',
          transform: 'scale(1.1)',
        }}
      ></div>
      
      {/* Animated background with marine elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-ocean-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-seafoam rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-ocean-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Moving marine elements with social icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts/likes */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-8 h-8 bg-coral/70 rounded-full flex items-center justify-center shadow-lg">
            <Icon name="Heart" size={16} className="text-white" />
          </div>
        </div>
        <div className="absolute top-60 right-32 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <div className="w-6 h-6 bg-coral/60 rounded-full flex items-center justify-center shadow-lg">
            <Icon name="Heart" size={12} className="text-white" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
          <div className="w-10 h-10 bg-coral/80 rounded-full flex items-center justify-center shadow-lg">
            <Icon name="Heart" size={18} className="text-white" />
          </div>
        </div>

        {/* Floating repost/share icons */}
        <div className="absolute top-32 right-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
          <div className="w-8 h-8 bg-ocean-400/70 rounded-full flex items-center justify-center shadow-lg">
            <Icon name="Share2" size={16} className="text-white" />
          </div>
        </div>
        <div className="absolute bottom-60 right-40 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
          <div className="w-7 h-7 bg-ocean-500/60 rounded-full flex items-center justify-center shadow-lg">
            <Icon name="Share2" size={14} className="text-white" />
          </div>
        </div>

        {/* Floating starfish */}
        <div className="absolute top-40 left-1/4 animate-spin" style={{ animationDuration: '8s' }}>
          <div className="w-12 h-12 text-seafoam/40">
            <Icon name="Star" size={48} />
          </div>
        </div>
        <div className="absolute bottom-32 right-1/4 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
          <div className="w-8 h-8 text-ocean-300/50">
            <Icon name="Star" size={32} />
          </div>
        </div>

        {/* Floating waves */}
        <div className="absolute top-1/3 left-5 animate-pulse" style={{ animationDuration: '4s' }}>
          <div className="w-16 h-16 text-wave/30">
            <Icon name="Waves" size={64} />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <div className="w-12 h-12 text-seafoam/40">
            <Icon name="Waves" size={48} />
          </div>
        </div>

        {/* Swimming fish (using arrow icons as fish) */}
        <div className="absolute top-1/2 left-0 animate-ping" style={{ animationDuration: '6s' }}>
          <div className="w-10 h-10 text-ocean-400/30 transform rotate-45">
            <Icon name="ArrowRight" size={40} />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-0 animate-ping" style={{ animationDuration: '7s', animationDelay: '2s' }}>
          <div className="w-8 h-8 text-ocean-300/40 transform rotate-180">
            <Icon name="ArrowRight" size={32} />
          </div>
        </div>

        {/* Floating bubbles with likes count */}
        <div className="absolute top-24 left-1/3 animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}>
          <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-ocean-200">
            <span className="text-ocean-600 text-xs font-semibold flex items-center gap-1">
              <Icon name="Heart" size={12} className="text-coral" />
              127
            </span>
          </div>
        </div>
        <div className="absolute bottom-40 right-1/3 animate-bounce" style={{ animationDelay: '4s', animationDuration: '4.5s' }}>
          <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-ocean-200">
            <span className="text-ocean-600 text-xs font-semibold flex items-center gap-1">
              <Icon name="Share2" size={12} className="text-ocean-500" />
              89
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block bg-ocean-500/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-ocean-200">
              <span className="text-ocean-700 font-semibold text-sm tracking-wider">
                АВТОРСКИЙ КУРС
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-ocean-600 via-wave to-ocean-800 bg-clip-text text-transparent">
              SMM ВОЛНА
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-ocean-700 mb-12 leading-relaxed">
              Освой востребованную онлайн-профессию смм специалист с нуля, благодаря которой ты будешь иметь стабильный доход. 
              Перестанешь зависеть от других. Обретешь новые знакомства и исполнишь свои мечты.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-ocean-500 to-wave hover:from-ocean-600 hover:to-ocean-500 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-ocean-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                // Скролл к секции с тарифами
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Icon name="Waves" className="mr-3" size={24} />
              ХОЧУ НА КУРС
            </Button>
          </div>

          {/* Right Column - Expert Photo */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-200/30 via-seafoam/20 to-pearl-200/40 rounded-full blur-3xl scale-150"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-coral/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-ocean-300/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
              
              {/* Main photo container */}
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem]">
                {/* Decorative rings */}
                <div className="absolute inset-0 border-2 border-ocean-300/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 border border-seafoam/40 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                
                {/* Photo */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/files/0083e9a7-06c9-4a3c-980f-99c2bc0a91db.jpg" 
                    alt="Волкова Марина - SMM Эксперт"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-ocean-100/10 to-seafoam/20"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-coral to-starfish rounded-full flex items-center justify-center animate-bounce shadow-xl">
                  <Icon name="Instagram" size={24} className="text-white" />
                </div>
                <div className="absolute bottom-8 left-0 w-14 h-14 bg-gradient-to-br from-ocean-400 to-seafoam rounded-full flex items-center justify-center animate-bounce shadow-xl" style={{ animationDelay: '0.5s' }}>
                  <Icon name="TrendingUp" size={20} className="text-white" />
                </div>
                <div className="absolute top-1/3 -left-4 w-12 h-12 bg-gradient-to-br from-wave to-ocean-500 rounded-full flex items-center justify-center animate-bounce shadow-xl" style={{ animationDelay: '1s' }}>
                  <Icon name="Heart" size={16} className="text-white" />
                </div>
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-ocean-200 shadow-xl">
                <span className="text-ocean-800 font-bold text-lg">Марина Волкова</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ocean-100/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;