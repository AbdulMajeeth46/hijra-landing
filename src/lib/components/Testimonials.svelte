<script lang="ts">
    import Icon from '@iconify/svelte';
    import { siteConfig } from '$lib/config/site';

    type GridItem = {
        type: 'review' | 'image';
        span: string;
        data?: any;
        src?: string;
        label?: string;
        alt?: string;
    };

    const items: GridItem[] = [
        { type: 'review', span: 'lg:col-span-2', data: siteConfig.testimonials.items[0] },
        { type: 'image', span: 'lg:col-span-1', src: siteConfig.testimonials.gallery[0].src, label: siteConfig.testimonials.gallery[0].label, alt: siteConfig.testimonials.gallery[0].alt },
        { type: 'image', span: 'lg:col-span-1', src: siteConfig.testimonials.gallery[1].src, label: siteConfig.testimonials.gallery[1].label, alt: siteConfig.testimonials.gallery[1].alt },
        { type: 'review', span: 'lg:col-span-1', data: siteConfig.testimonials.items[1] },
        { type: 'review', span: 'lg:col-span-1', data: siteConfig.testimonials.items[2] }
    ];
</script>

{#snippet ReviewCard(item: GridItem)}
    <div class="group relative bg-(--background) p-6 rounded-2xl border border-(--border) transition-colors duration-500 hover:border-(--primary) flex flex-col justify-between min-h-65 {item.span}">
        
        <div class="absolute top-0 right-0 w-48 h-48 opacity-[0.03] pointer-events-none text-(--foreground)">
                <svg viewBox="0 0 200 200" fill="currentColor" class="w-full h-full"><path d="M100 0L122.5 22.5L145 0L167.5 22.5L190 0L200 10L190 20L200 30L190 40L200 50L177.5 72.5L200 95L190 105L200 115L177.5 137.5L200 160L190 170L200 180L190 190L200 200L177.5 177.5L155 200L132.5 177.5L110 200L100 190L90 200L67.5 177.5L45 200L22.5 177.5L0 200L10 190L0 180L10 170L0 160L22.5 137.5L0 115L10 105L0 95L22.5 72.5L0 50L10 40L0 30L10 20L0 10L22.5 32.5L45 10L67.5 32.5L90 10L100 0Z" /></svg>
        </div>

        <div class="relative z-10">
            <div class="mb-4 text-(--muted) group-hover:text-(--primary) transition-colors duration-300">
                <Icon icon="ph:quotes-fill" class="w-6 h-6" />
            </div>

            <p class="font-medium tracking-tight text-(--foreground) mb-6 leading-relaxed text-lg md:text-xl">
                "{item.data.quote}"
            </p>
        </div>

        <div>
            <div class="flex items-center gap-3 mb-4 opacity-20">
                <div class="h-px bg-(--foreground) flex-1"></div>
                <div class="w-1.5 h-1.5 bg-(--primary) rotate-45"></div>
                <div class="h-px bg-(--foreground) flex-1"></div>
            </div>

            <div class="flex items-center justify-between relative z-10">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center text-(--primary) font-bold text-xs">
                        {item.data.name.charAt(0)}
                    </div>
                    <div class="flex flex-col">
                        <h4 class="text-sm font-bold text-(--foreground) leading-none mb-1">{item.data.name}</h4>
                        <div class="flex items-center gap-1.5 text-[0.625rem] font-semibold text-(--muted) uppercase tracking-wider">
                            <span>{item.data.location}</span>
                            <span class="text-(--primary)">• {item.data.role}</span>
                        </div>
                    </div>
                </div>
                <div class="text-(--border) group-hover:text-(--primary) transition-colors duration-300">
                    <Icon icon="ph:seal-check-fill" class="w-5 h-5" />
                </div>
            </div>
        </div>
    </div>
{/snippet}

{#snippet ImageCard(item: GridItem)}
    <div class="group relative rounded-2xl overflow-hidden min-h-65 {item.span} border border-(--border)">
        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style="background-image: url('{item.src}');">
        </div>
        
        <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        <div class="absolute bottom-0 left-0 p-6 w-full">
            <div class="flex items-center gap-2 mb-2">
                <div class="w-1.5 h-1.5 bg-(--primary) rounded-full"></div>
                <span class="text-(--primary) font-bold tracking-widest uppercase text-[0.625rem]">{item.label}</span>
            </div>
            <p class="text-white text-lg font-medium tracking-tight">
                {item.alt}
            </p>
        </div>
    </div>
{/snippet}

<section class="w-full bg-(--surface) text-(--foreground) py-20 px-6 md:px-12 font-body antialiased overflow-hidden relative">
    
    <div class="absolute inset-0 opacity-[0.5]" style="background-image: radial-gradient(var(--border) 1px, transparent 1px); background-size: 2rem 2rem;"></div>

    <div class="max-w-325 mx-auto relative z-10">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div>
                <span class="text-(--primary) font-bold tracking-widest uppercase text-[0.6875rem] mb-3 block">
                    {siteConfig.testimonials.label}
                </span>
                <h2 class="text-3xl md:text-5xl font-medium tracking-tight text-(--foreground) leading-[1.1]">
                    {siteConfig.testimonials.heading} <br />
                    <span class="text-(--primary)">{siteConfig.testimonials.highlight}</span>
                </h2>
            </div>

            <div class="group flex items-center gap-5 bg-(--background) p-3 pr-6 rounded-full border border-(--border) shadow-sm 
                        transition-all duration-200 ease-out
                        hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0.25rem_0.25rem_0_0_var(--primary)]">
                <div class="flex -space-x-3">
                    <div class="w-10 h-10 rounded-full bg-(--surface) border-[3px] border-white flex items-center justify-center text-(--muted)"><Icon icon="heroicons:user" class="w-4 h-4" /></div>
                    <div class="w-10 h-10 rounded-full bg-(--surface) border-[3px] border-white flex items-center justify-center text-(--muted)"><Icon icon="heroicons:user" class="w-4 h-4" /></div>
                    <div class="w-10 h-10 rounded-full bg-(--primary) border-[3px] border-white flex items-center justify-center text-white font-bold text-[0.625rem] shadow-lg shadow-(--primary)/20">
                        {siteConfig.testimonials.stats.value}
                    </div>
                </div>
                <div class="flex flex-col justify-center">
                    <span class="text-xs font-bold text-(--foreground) uppercase tracking-wide leading-none mb-1">
                        {siteConfig.testimonials.stats.label}
                    </span>
                    <span class="text-[0.625rem] font-medium text-(--muted) leading-none">
                        {siteConfig.testimonials.stats.sub}
                    </span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {#each items as item}
                {#if item.type === 'review'}
                    {@render ReviewCard(item)}
                {:else}
                    {@render ImageCard(item)}
                {/if}
            {/each}
        </div>
    </div>
</section>