<script lang="ts">
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  import { siteConfig } from '$lib/config/site';

  // Duplicate images for seamless infinite loop
  const reelImages = [...siteConfig.hero.reelImages, ...siteConfig.hero.reelImages];

  let mounted = $state(false);
  onMount(() => { mounted = true; });
</script>

<div class="relative w-full min-h-screen bg-white text-[#1B1B1B] font-['Urbanist'] overflow-hidden flex flex-col selection:bg-[#00B77A] selection:text-white">
  
  <main class="flex-1 flex flex-col justify-center items-center text-center px-6 pt-20 relative z-10 max-w-[1400px] mx-auto w-full">
    
    <div class="opacity-0 translate-y-4 animate-fade-in-up mb-8 inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm">
      <div class="flex items-center gap-2">
        <div class="w-1.5 h-1.5 rounded-full bg-[#00B77A]"></div>
        <span class="text-[13px] font-bold uppercase tracking-widest text-[#1B1B1B]">
            {siteConfig.hero.badge}
        </span>
      </div>
      <span class="w-px h-3.5 bg-gray-200"></span>
      <span class="text-[13px] font-medium text-gray-500">
            {siteConfig.hero.badgeSub}
      </span>
    </div>

    <h1 class="opacity-0 translate-y-4 animate-fade-in-up delay-100 mb-10 text-[#1B1B1B] leading-[1.2]">
      <span class="block text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] font-normal tracking-tight">
        {siteConfig.hero.heading.line1}
      </span>
      <span class="block text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] font-light tracking-tighter -mt-2 md:-mt-4">
        <span class="text-[#00B77A]">{siteConfig.hero.heading.highlight}</span>
      </span>
    </h1>

    <p class="opacity-0 translate-y-4 animate-fade-in-up delay-200 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
      {siteConfig.hero.description}
    </p>

    <div class="opacity-0 translate-y-4 animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
      
      <a href="/packages" 
         class="w-full sm:w-auto h-14 px-10 rounded-full bg-[#1B1B1B] text-white font-bold flex items-center justify-center gap-3
                border border-[#1B1B1B]
                transition-all duration-200 ease-out
                shadow-none
                hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#00B77A]
                active:translate-x-0 active:translate-y-0 active:shadow-none">
        <span>{siteConfig.hero.cta.primary}</span>
        <Icon icon="heroicons:arrow-down" class="w-4 h-4" />
      </a>

      <a href="/about" 
         class="group w-full sm:w-auto h-14 px-10 rounded-full bg-white border border-gray-200 text-[#1B1B1B] font-bold flex items-center justify-center gap-2 
                transition-all duration-200 ease-out
                shadow-none
                hover:border-[#1B1B1B] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#1B1B1B]
                active:translate-x-0 active:translate-y-0 active:shadow-none">
        <span>{siteConfig.hero.cta.secondary}</span>
      </a>
    </div>

  </main>

  <div class="w-full pb-8 md:pb-12 mt-12 opacity-0 animate-fade-in-up delay-500">
    <div class="flex overflow-hidden relative select-none pointer-events-none">
      <div class="flex gap-4 md:gap-6 animate-marquee">
        {#each reelImages as img}
          <div class="relative w-[280px] md:w-[360px] h-[200px] md:h-[260px] shrink-0 rounded-xl overflow-hidden bg-gray-100">
            <img 
              src={img} 
              alt="Destination" 
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>

</div>