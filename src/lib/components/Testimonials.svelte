<script>
    import Icon from '@iconify/svelte';

    // Layout Configuration:
    // Row 1: Wide Review (2 cols) + Tall Image (1 col)
    // Row 2: Tall Image (1 col) + Standard Review (1 col) + Standard Review (1 col)
    const items = [
        // --- ROW 1 ---
        {
            type: 'review',
            span: 'lg:col-span-2', // Wide
            name: "Yusuf Ahmed",
            role: "Hajj Package",
            location: "London, UK",
            quote: "The proximity to the Haram was unbelievable. Hijra didn't just book a hotel; they curated an environment where I could focus entirely on my Ibadah. It felt like a sanctuary."
        },
        {
            type: 'image',
            span: 'lg:col-span-1', // Tall
            src: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1000&auto=format&fit=crop",
            label: "The Holy City",
            alt: "Makkah al-Mukarramah"
        },
        
        // --- ROW 2 ---
        {
            type: 'image',
            span: 'lg:col-span-1', // Tall
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
            label: "Global Reach",
            alt: "15+ Countries Served"
        },
        {
            type: 'review',
            span: 'lg:col-span-1', // Standard (Was Wide)
            name: "Fatima Zahra",
            role: "Premium Umrah",
            location: "Dubai, UAE",
            quote: "Walking distance to the Kaaba, and the ground team treated us with the hospitality of the Ansar."
        },
        {
            type: 'review',
            span: 'lg:col-span-1', // NEW CARD
            name: "Zaid Ibrahim",
            role: "Group Leader",
            location: "Cape Town, SA",
            quote: "I have led groups for 10 years. Hijra's attention to logistical detail is unmatched in the industry."
        }
    ];
</script>

<section class="w-full bg-[#F9F9F9] text-[#1B1B1B] py-20 px-6 md:px-12 font-['Urbanist'] antialiased overflow-hidden relative">
    
    <div class="absolute inset-0 opacity-[0.5]" style="background-image: radial-gradient(#E5E5E5 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-[1200px] mx-auto relative z-10">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div>
                <span class="text-[#00B77A] font-bold tracking-widest uppercase text-[11px] mb-3 block">
                    Testimonials
                </span>
                <h2 class="text-3xl md:text-5xl font-medium tracking-tight text-black leading-[1.1]">
                    Blessed Journeys, <br />
                    <span class="text-[#00B77A]">Spiritual Memories.</span>
                </h2>
            </div>

            <div class="flex items-center gap-4 bg-white p-2 pr-5 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="flex -space-x-2">
                    <div class="w-8 h-8 rounded-full bg-gray-50 border-[2px] border-white flex items-center justify-center text-gray-300"><Icon icon="heroicons:user" class="w-3 h-3" /></div>
                    <div class="w-8 h-8 rounded-full bg-gray-100 border-[2px] border-white flex items-center justify-center text-gray-400"><Icon icon="heroicons:user" class="w-3 h-3" /></div>
                    <div class="w-8 h-8 rounded-full bg-[#00B77A] border-[2px] border-white flex items-center justify-center text-white font-bold text-[9px] shadow-lg shadow-[#00B77A]/20">10k</div>
                </div>
                <div class="flex flex-col justify-center">
                    <span class="text-[11px] font-bold text-black uppercase tracking-wide leading-none mb-0.5">Pilgrims Served</span>
                    <span class="text-[9px] font-medium text-gray-400 leading-none">Across 15+ Countries</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {#each items as item, i}
                
                {#if item.type === 'review'}
                    <div class="group relative bg-white p-6 rounded-2xl border border-gray-100 transition-colors duration-500 hover:border-[#00B77A] flex flex-col justify-between min-h-[260px] {item.span}">
                        
                        <div class="absolute top-0 right-0 w-48 h-48 opacity-[0.03] pointer-events-none text-black">
                             <svg viewBox="0 0 200 200" fill="currentColor" class="w-full h-full"><path d="M100 0L122.5 22.5L145 0L167.5 22.5L190 0L200 10L190 20L200 30L190 40L200 50L177.5 72.5L200 95L190 105L200 115L177.5 137.5L200 160L190 170L200 180L190 190L200 200L177.5 177.5L155 200L132.5 177.5L110 200L100 190L90 200L67.5 177.5L45 200L22.5 177.5L0 200L10 190L0 180L10 170L0 160L22.5 137.5L0 115L10 105L0 95L22.5 72.5L0 50L10 40L0 30L10 20L0 10L22.5 32.5L45 10L67.5 32.5L90 10L100 0Z" /></svg>
                        </div>

                        <div class="relative z-10">
                            <div class="mb-4 text-gray-300 group-hover:text-[#00B77A] transition-colors duration-300">
                                <Icon icon="ph:quotes-fill" class="w-6 h-6" />
                            </div>

                            <p class="font-medium tracking-tight text-[#1B1B1B] mb-6 leading-relaxed text-lg md:text-xl">
                                "{item.quote}"
                            </p>
                        </div>

                        <div>
                            <div class="flex items-center gap-3 mb-4 opacity-20">
                                <div class="h-px bg-black flex-1"></div>
                                <div class="w-1.5 h-1.5 bg-[#00B77A] rotate-45"></div>
                                <div class="h-px bg-black flex-1"></div>
                            </div>

                            <div class="flex items-center justify-between relative z-10">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-full bg-[#F9F9F9] border border-gray-100 flex items-center justify-center text-[#00B77A] font-bold text-xs">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div class="flex flex-col">
                                        <h4 class="text-sm font-bold text-black leading-none mb-1">{item.name}</h4>
                                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                            <span>{item.location}</span>
                                            <span class="text-[#00B77A]">• {item.role}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-gray-300 group-hover:text-[#00B77A] transition-colors duration-300">
                                    <Icon icon="ph:seal-check-fill" class="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>

                {:else}
                    <div class="group relative rounded-2xl overflow-hidden min-h-[260px] {item.span} border border-gray-200">
                        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                             style="background-image: url('{item.src}');">
                        </div>
                        
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                        <div class="absolute bottom-0 left-0 p-6 w-full">
                            <div class="flex items-center gap-2 mb-2">
                                <div class="w-1.5 h-1.5 bg-[#00B77A] rounded-full"></div>
                                <span class="text-[#00B77A] font-bold tracking-widest uppercase text-[10px]">{item.label}</span>
                            </div>
                            <p class="text-white text-lg font-medium tracking-tight">
                                {item.alt}
                            </p>
                        </div>
                    </div>
                {/if}

            {/each}

        </div>
    </div>
</section>