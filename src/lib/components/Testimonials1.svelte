<script>
    import Icon from '@iconify/svelte';

    const testimonials = [
        {
            name: "Yusuf Ahmed",
            role: "Hajj Package 2024",
            location: "London, UK",
            quote: "I was worried about logistics, but Hijra handled every detail. The proximity to the Haram was unbelievable, allowing me to focus entirely on my Ibadah."
        },
        {
            name: "Fatima Zahra",
            role: "Premium Umrah",
            location: "Dubai, UAE",
            quote: "A truly spiritual experience. The hotels were walking distance to the Kaaba, and the ground team treated us like family."
        },
        {
            name: "Omar Farooq",
            role: "Ramadan Umrah",
            location: "New York, USA",
            quote: "The Ziyarat tours were so insightful. Our guide didn't just show us places; he connected us to the history of our Prophet (PBUH)."
        },
        {
            name: "Ayesha Siddiqua",
            role: "Family Group",
            location: "Kuala Lumpur, MY",
            quote: "Traveling with elderly parents is hard, but the wheelchair assistance and private transport made it seamless. JazakAllah Khair."
        }
    ];
</script>

<section class="w-full bg-[#F9F9F9] text-[#1B1B1B] py-24 px-6 md:px-12 font-['Urbanist'] antialiased overflow-hidden relative">
    
    <div class="absolute inset-0 opacity-[0.5]" style="background-image: radial-gradient(#E5E5E5 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-[1400px] mx-auto relative z-10">
        
<div class="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div>
                <span class="text-[#00B77A] font-bold tracking-widest uppercase text-[11px] mb-4 block">
                    Testimonials
                </span>
                <h2 class="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
                    Blessed Journeys, <br />
                    <span class="text-[#00B77A]">Spiritual Memories.</span>
                </h2>
            </div>

            <div class="flex items-center gap-5 bg-white p-2 pr-6 rounded-full border border-gray-200 shadow-sm">
                <div class="flex -space-x-3">
                    <div class="w-10 h-10 rounded-full bg-gray-50 border-[3px] border-white flex items-center justify-center text-gray-300"><Icon icon="heroicons:user" class="w-4 h-4" /></div>
                    <div class="w-10 h-10 rounded-full bg-gray-100 border-[3px] border-white flex items-center justify-center text-gray-400"><Icon icon="heroicons:user" class="w-4 h-4" /></div>
                    <div class="w-10 h-10 rounded-full bg-[#00B77A] border-[3px] border-white flex items-center justify-center text-white font-bold text-[10px]">10k</div>
                </div>
                <div class="flex flex-col justify-center">
                    <span class="text-xs font-bold text-black uppercase tracking-wide leading-none mb-1">Pilgrims Served</span>
                    <span class="text-[10px] font-medium text-gray-400 leading-none">Across 15+ Countries</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {#each testimonials as t, i}
                <div class="group relative bg-white p-8 rounded-[1.5rem] border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 overflow-hidden {i === 0 ? 'lg:col-span-2' : ''}">
                    
                    <div class="absolute top-0 right-0 w-56 h-56 opacity-[0.03] pointer-events-none text-black">
                         <svg viewBox="0 0 200 200" fill="currentColor" class="w-full h-full"><path d="M100 0L122.5 22.5L145 0L167.5 22.5L190 0L200 10L190 20L200 30L190 40L200 50L177.5 72.5L200 95L190 105L200 115L177.5 137.5L200 160L190 170L200 180L190 190L200 200L177.5 177.5L155 200L132.5 177.5L110 200L100 190L90 200L67.5 177.5L45 200L22.5 177.5L0 200L10 190L0 180L10 170L0 160L22.5 137.5L0 115L10 105L0 95L22.5 72.5L0 50L10 40L0 30L10 20L0 10L22.5 32.5L45 10L67.5 32.5L90 10L100 0Z" /></svg>
                    </div>

                    <div class="relative mb-6 text-gray-300 group-hover:text-[#00B77A] transition-colors duration-300">
                        <Icon icon="fa6-solid:quote-right" class="w-7 h-7" />
                    </div>

                    <p class="relative font-medium tracking-tight text-[#1B1B1B] mb-8 leading-relaxed {i === 0 ? 'text-2xl md:text-3xl' : 'text-[17px]'}">
                        "{t.quote}"
                    </p>

                    <div class="flex items-center gap-4 mb-6 opacity-20">
                        <div class="h-px bg-black flex-1"></div>
                        <div class="w-1.5 h-1.5 bg-[#00B77A] rotate-45 group-hover:scale-125 transition-transform duration-300"></div> 
                        <div class="h-px bg-black flex-1"></div>
                    </div>

                    <div class="flex items-center justify-between relative z-10">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded-full bg-[#F9F9F9] border border-gray-100 flex items-center justify-center text-[#00B77A] font-bold text-sm">
                                {t.name.charAt(0)}
                            </div>
                            
                            <div class="flex flex-col">
                                <h4 class="text-sm font-bold text-black leading-none mb-1.5">{t.name}</h4>
                                <div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                                    <span class="text-gray-400">{t.location}</span>
                                    <span class="text-[#00B77A]">• {t.role}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-gray-300 group-hover:text-[#00B77A] transition-colors duration-300">
                            <Icon icon="solar:verified-check-bold" class="w-6 h-6" />
                        </div>
                    </div>

                </div>
            {/each}

        </div>
    </div>
</section>