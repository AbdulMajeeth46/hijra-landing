<script>
    import Icon from '@iconify/svelte';

    const steps = [
        {
            number: "01",
            title: "Free Consultation",
            description: "Speak with our advisors to understand requirements.",
            icon: "heroicons:chat-bubble-left-right"
        },
        {
            number: "02",
            title: "Documentation & Visa",
            description: "We handle visa processing and ensure paperwork accuracy.",
            icon: "heroicons:document-text"
        },
        {
            number: "03",
            title: "Itinerary Planning",
            description: "Customize flights, hotels, and ground transport.",
            icon: "heroicons:map"
        },
        {
            number: "04",
            title: "Pre-Departure Guidance",
            description: "Workshops on rituals, health, and travel tips.",
            icon: "heroicons:academic-cap"
        },
        {
            number: "05",
            title: "Dedicated Support",
            description: "24/7 on-ground assistance ensures peace of mind.",
            icon: "heroicons:shield-check"
        }
    ];
</script>

<section class="w-full bg-white text-[#1B1B1B] py-24 px-6 md:px-12 font-['Urbanist'] antialiased">
    
    <div class="max-w-[1000px] mx-auto">
        
        <div class="text-center mb-20">
            <span class="text-[#00B77A] font-bold tracking-widest uppercase text-[11px] mb-4 block">
                The Framework
            </span>
            <h2 class="text-4xl md:text-6xl font-medium tracking-tight text-black leading-[1.1]">
                Your Path to <span class="text-[#00B77A]">Makkah.</span>
            </h2>
        </div>

        <div class="flex flex-col gap-4">
            
            {#each steps as step, i}
                <div class="group relative flex items-center justify-between bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 transition-all duration-500 hover:border-[#00B77A] hover:shadow-[0_20px_40px_-15px_rgba(0,183,122,0.1)] hover:z-10">
                    
                    <div class="flex items-center gap-6 md:gap-10">
                        
                        <div class="w-16 h-16 shrink-0 bg-[#F9F9F9] rounded-2xl border border-gray-100 flex items-center justify-center text-gray-300 font-bold text-xl transition-colors duration-500 group-hover:bg-[#00B77A] group-hover:text-white group-hover:border-[#00B77A]">
                            {step.number}
                        </div>

                        <div class="flex flex-col md:flex-row md:items-center md:gap-10">
                            <h3 class="text-xl font-bold text-black min-w-[200px] group-hover:text-[#00B77A] transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p class="text-gray-400 text-sm font-medium leading-relaxed max-w-md transition-colors duration-300 group-hover:text-gray-600">
                                {step.description}
                            </p>
                        </div>

                    </div>

                    <div class="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-100 text-gray-300 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#00B77A] group-hover:border-[#00B77A]/30">
                        <Icon icon="ph:arrow-right" class="w-5 h-5" />
                    </div>

                </div>
            {/each}

        </div>
    </div>
</section>