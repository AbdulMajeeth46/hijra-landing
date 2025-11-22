<script>
  import Icon from '@iconify/svelte';
  import logo from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';

  let isScrolled = false;
  let isMobileMenuOpen = false;

  const toggleMobileMenu = () => (isMobileMenuOpen = !isMobileMenuOpen);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Packages', href: '/packages' },
    { label: 'Contact', href: '/contact' }
  ];

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="fixed top-0 left-0 w-full z-50 font-['Urbanist'] antialiased transition-all duration-500 ease-out {isScrolled ? 'h-20' : 'h-24'}">
  
  <div 
    class="absolute inset-0 w-full h-full transition-all duration-500 ease-out border-b border-gray-100/0 pointer-events-none
    {isScrolled ? '!opacity-100 bg-white/90 !border-gray-100 shadow-sm' : 'opacity-0'}"
  ></div>

  <div class="relative max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
    
    <a href="/" class="flex items-center gap-3 shrink-0 select-none group z-50 relative">
      <img 
        src={logo} 
        alt="Hijra Logo" 
        class="w-9 h-9 object-contain"
      />
      <span class="text-2xl font-bold tracking-tighter text-[#1B1B1B]">
        Hijrah<span class="text-[#00B77A]">.</span>
      </span>
    </a>

    <div class="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="relative px-5 py-2 rounded-full text-[15px] font-medium text-gray-500 hover:text-[#1B1B1B] transition-all duration-200 hover:bg-gray-50/50"
        >
          {link.label}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-6 shrink-0 z-50 relative">
      
      <a 
        href="/login" 
        class="hidden sm:block text-[15px] font-bold text-[#1B1B1B] hover:text-[#00B77A] transition-colors duration-200"
      >
        Log in
      </a>

      <a 
        href="/contact" 
        class="hidden sm:flex items-center gap-2 bg-[#1B1B1B] text-white px-6 py-2.5 rounded-full text-[14px] font-bold tracking-tight border border-[#1B1B1B]
               transition-all duration-200 ease-out
               shadow-none
               hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_#00B77A]
               active:translate-x-0 active:translate-y-0 active:shadow-none"
      >
        <span>Get Started</span>
        <Icon icon="heroicons:arrow-right" class="w-4 h-4" />
      </a>

      <button 
        on:click={toggleMobileMenu}
        class="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-[60]"
        aria-label="Menu"
      >
        <span class="w-6 h-0.5 bg-black rounded-full transition-all duration-300 {isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
        <span class="w-6 h-0.5 bg-black rounded-full transition-all duration-300 {isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
        <span class="w-6 h-0.5 bg-black rounded-full transition-all duration-300 {isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
      </button>

    </div>
  </div>

  {#if isMobileMenuOpen}
    <div 
      class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center pt-24 pb-10 md:hidden animate-fade-in overflow-y-auto"
    >
      <div class="flex flex-col gap-8 text-center w-full px-6">
        {#each navLinks as link}
          <a 
            href={link.href} 
            class="text-3xl font-medium text-[#1B1B1B] tracking-tight hover:text-[#00B77A] transition-colors" 
            on:click={toggleMobileMenu}
          >
            {link.label}
          </a>
        {/each}

        <div class="h-px w-16 bg-gray-100 mx-auto my-4"></div>
        
        <a href="/login" class="text-xl font-medium text-gray-500 hover:text-black transition-colors" on:click={toggleMobileMenu}>
            Log In
        </a>
        
        <a href="/contact" class="text-xl font-bold text-[#00B77A]" on:click={toggleMobileMenu}>
            Get Started
        </a>
      </div>
    </div>
  {/if}
</nav>

<style>
  .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>