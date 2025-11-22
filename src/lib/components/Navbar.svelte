<script>
  import Icon from '@iconify/svelte';
  import logo from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';

  let isScrolled = false;
  let isMobileMenuOpen = false;

  const toggleMobileMenu = () => (isMobileMenuOpen = !isMobileMenuOpen);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="fixed top-0 left-0 w-full z-50 h-20 font-['Urbanist'] antialiased">
  
  <div 
    class="absolute inset-0 w-full h-full transition-opacity duration-300 ease-out border-b border-gray-100/0
    {isScrolled ? '!opacity-100 backdrop-blur-md bg-white/95 !border-gray-100' : 'opacity-0'}"
  ></div>

  <div class="relative max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
    
    <a href="/" class="flex items-center gap-3 shrink-0 select-none group">
      <img 
        src={logo} 
        alt="Hijra Logo" 
        class="w-9 h-9 object-contain"
      />
      <span class="text-2xl font-bold tracking-tighter text-[#1B1B1B]">
        Hijrah<span class="text-[#00B77A]">.</span>
      </span>
    </a>

    <div class="hidden md:flex items-center gap-2">
      {#each ['Hajj Packages', 'Umrah', 'Experiences', 'About Us'] as link}
        <a 
          href="/" 
          class="relative px-5 py-2 rounded-full text-[15px] font-normal text-gray-500 hover:text-[#1B1B1B] transition-all duration-200 hover:bg-gray-50"
        >
          {link}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-6 shrink-0">
      
      <a 
        href="/login" 
        class="hidden sm:block text-[15px] font-semibold text-[#1B1B1B] hover:text-[#00B77A] transition-colors duration-200"
      >
        Log in
      </a>

      <a 
        href="/book" 
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
        class="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative"
        aria-label="Menu"
      >
        <span class="w-5 h-0.5 bg-black rounded-full transition-transform duration-300 {isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
        <span class="w-5 h-0.5 bg-black rounded-full transition-opacity duration-300 {isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
        <span class="w-5 h-0.5 bg-black rounded-full transition-transform duration-300 {isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
      </button>

    </div>
  </div>

  {#if isMobileMenuOpen}
    <div 
      class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center pt-10 md:hidden animate-fade-in"
    >
      <div class="flex flex-col gap-6 text-center">
        {#each ['Hajj Packages', 'Umrah', 'Experiences', 'About Us'] as link}
          <a href="/" class="text-2xl font-medium text-[#1B1B1B] tracking-tight" on:click={toggleMobileMenu}>
            {link}
          </a>
        {/each}
        <div class="h-px w-16 bg-gray-100 mx-auto my-4"></div>
        <a href="/login" class="text-lg font-medium text-gray-500">Log In</a>
        <a href="/book" class="text-lg font-bold text-[#00B77A]">Get Started</a>
      </div>
    </div>
  {/if}
</nav>

<style>
  .animate-fade-in {
    animation: fadeIn 0.2s ease-out forwards;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>