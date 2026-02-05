<script lang="ts">
  import Icon from '@iconify/svelte';
  import { siteConfig } from '$lib/config/site';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };

  $effect(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="fixed top-0 left-0 w-full z-50 font-body antialiased transition-all duration-300 ease-out {isScrolled ? 'h-20' : 'h-24'}">
  
  <div 
    class="absolute inset-0 w-full h-full border-b transition-opacity duration-300 ease-out pointer-events-none bg-(--background) border-(--border)
    {isScrolled ? 'opacity-100' : 'opacity-0 border-transparent'}"
  ></div>

  <div class="relative max-w-350 mx-auto px-6 md:px-12 h-full flex items-center justify-between">
    
    <a href="/" class="flex items-center gap-3 shrink-0 select-none group z-50 relative">
      <img 
        src={siteConfig.brand.logo} 
        alt="{siteConfig.brand.name} Logo" 
        class="w-9 h-9 object-contain"
      />
      <span class="text-2xl font-bold tracking-tighter text-(--foreground)">
        {siteConfig.brand.name}<span class="text-(--primary)">.</span>
      </span>
    </a>

    <div class="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {#each siteConfig.nav as link}
        <a 
          href={link.href} 
          class="relative px-5 py-2 rounded-full text-[0.9375rem] font-medium text-(--muted) hover:text-(--foreground) transition-all duration-200 hover:bg-(--surface)"
        >
          {link.label}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-4 shrink-0 z-50 relative">
      
      <a 
        href="/login" 
        class="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full text-[0.875rem] font-bold tracking-tight border border-(--border) bg-(--background) text-(--foreground)
               transition-all duration-200 ease-out
               shadow-none
               hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0.1875rem_0.1875rem_0_0_var(--foreground)] hover:border-(--foreground)
               active:translate-x-0 active:translate-y-0 active:shadow-none"
      >
        Log in
      </a>

      <a 
        href="/contact" 
        class="hidden sm:flex items-center gap-2 bg-(--foreground) text-(--background) px-6 py-2.5 rounded-full text-[0.875rem] font-bold tracking-tight border border-(--foreground)
               transition-all duration-200 ease-out
               shadow-none
               hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0.25rem_0.25rem_0_0_var(--primary)]
               active:translate-x-0 active:translate-y-0 active:shadow-none"
      >
        <span>Get Started</span>
        <Icon icon="heroicons:arrow-right" class="w-4 h-4" />
      </a>

      <button 
        onclick={toggleMobileMenu}
        class="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-60"
        aria-label="Menu"
      >
        <span class="w-6 h-0.5 bg-(--foreground) rounded-full transition-all duration-300 {isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
        <span class="w-6 h-0.5 bg-(--foreground) rounded-full transition-all duration-300 {isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
        <span class="w-6 h-0.5 bg-(--foreground) rounded-full transition-all duration-300 {isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
      </button>

    </div>
  </div>

  {#if isMobileMenuOpen}
    <div class="fixed inset-0 bg-(--background) z-40 flex flex-col items-center justify-center pt-24 pb-10 md:hidden animate-fade-in overflow-y-auto">
      <div class="flex flex-col gap-8 text-center w-full px-6">
        {#each siteConfig.nav as link}
          <a 
            href={link.href} 
            class="text-3xl font-medium text-(--foreground) tracking-tight hover:text-(--primary) transition-colors" 
            onclick={toggleMobileMenu}
          >
            {link.label}
          </a>
        {/each}

        <div class="h-px w-16 bg-(--border) mx-auto my-4"></div>
        
        <a href="/login" class="text-xl font-medium text-(--muted) hover:text-(--foreground) transition-colors" onclick={toggleMobileMenu}>
            Log In
        </a>
        
        <a href="/contact" class="text-xl font-bold text-(--primary)" onclick={toggleMobileMenu}>
            Get Started
        </a>
      </div>
    </div>
  {/if}
</nav>