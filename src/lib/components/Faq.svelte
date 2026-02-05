<script lang="ts">
    import Icon from '@iconify/svelte';
    import { slide } from 'svelte/transition';
    import { siteConfig } from '$lib/config/site';

    let openIndex = $state(0);

    const toggle = (index: number) => {
        openIndex = openIndex === index ? -1 : index;
    }
</script>

<section class="w-full bg-(--background) text-(--foreground) py-20 md:py-24 px-6 md:px-12 font-body antialiased">
    
    <div class="max-w-300 mx-auto">
        
        <div class="mb-16 md:mb-20 border-b border-(--border) pb-10">
            <h1 class="text-4xl md:text-6xl font-medium tracking-tight text-(--foreground) mb-4">
                {siteConfig.faq.heading} <span class="text-(--primary)">{siteConfig.faq.highlight}</span>
            </h1>
            <p class="text-(--muted) text-lg max-w-2xl leading-relaxed">
                {siteConfig.faq.description}
            </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div class="lg:col-span-4 lg:sticky lg:top-24 order-last lg:order-first">
                
                <span class="text-(--primary) font-semibold tracking-widest uppercase text-[0.6875rem] mb-5 block">
                    {siteConfig.faq.sidebar.label}
                </span>
                
                <h2 class="text-3xl md:text-4xl font-medium tracking-tight text-(--foreground) mb-6 leading-[1.1]">
                    {siteConfig.faq.sidebar.heading} <br /> {siteConfig.faq.sidebar.headingHighlight}
                </h2>
                
                <p class="text-(--muted) text-base mb-10 leading-relaxed">
                    {siteConfig.faq.sidebar.description}
                </p>

                <div class="relative overflow-hidden bg-[#0a0a0a] rounded-2xl p-6 md:p-8 text-white shadow-2xl shadow-black/10">
                    
                    <div class="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-(--primary)/20 blur-[3.125rem] rounded-full pointer-events-none"></div>

                    <div class="relative z-10">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white">
                                <Icon icon="heroicons:phone" class="w-5 h-5" />
                            </div>
                            <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-(--primary)/20 border border-(--primary)/20">
                                <div class="w-1.5 h-1.5 rounded-full bg-(--primary)"></div>
                                <span class="text-[0.625rem] font-bold uppercase tracking-wider text-(--primary)">{siteConfig.faq.sidebar.widget.status}</span>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold mb-2 tracking-tight">{siteConfig.faq.sidebar.widget.title}</h3>
                        <p class="text-sm text-gray-400 mb-6 leading-relaxed">
                            {siteConfig.faq.sidebar.widget.subtitle}
                        </p>
                        
                        <a href="/contact" 
                           class="group w-full flex items-center justify-center gap-2 bg-white text-[#1B1B1B] py-3 rounded-xl text-sm font-bold tracking-tight border border-white
                                  transition-all duration-200 ease-out
                                  shadow-none
                                  hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[0.25rem_0.25rem_0_0_var(--primary)]
                                  active:translate-x-0 active:translate-y-0 active:shadow-none">
                            {siteConfig.faq.sidebar.widget.buttonText}
                        </a>
                    </div>
                </div>

            </div>

            <div class="lg:col-span-8 w-full">
                <div class="w-full border-t border-(--border)">
                    {#each siteConfig.faq.items as faq, i}
                        <div class="border-b border-(--border) transition-colors duration-300 {openIndex === i ? 'bg-(--surface)' : 'bg-transparent'}">
                            
                            <button 
                                onclick={() => toggle(i)} 
                                class="group w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left focus:outline-none"
                            >
                                <span class="text-[1rem] md:text-[1.125rem] font-medium tracking-tight leading-snug transition-colors duration-300 w-full pr-4 {openIndex === i ? 'text-(--primary)' : 'text-(--foreground)'}">
                                    {faq.question}
                                </span>

                                <span class="relative flex items-center justify-center w-6 h-6 shrink-0 mt-0.5 md:mt-1">
                                    <div class="transition-transform duration-300 {openIndex === i ? 'rotate-45' : 'rotate-0'}">
                                        <Icon 
                                            icon="heroicons:plus" 
                                            class="w-5 h-5 transition-colors duration-300 {openIndex === i ? 'text-(--primary)' : 'text-(--muted) group-hover:text-(--foreground)'}" 
                                        />
                                    </div>
                                </span>
                            </button>

                            {#if openIndex === i}
                                <div transition:slide={{ duration: 300, axis: 'y' }}>
                                    <p class="text-(--muted) text-[0.9375rem] md:text-base leading-relaxed pb-8 pr-4 md:pr-16">
                                        {faq.answer}
                                    </p>
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>

        </div>
    </div>
</section>