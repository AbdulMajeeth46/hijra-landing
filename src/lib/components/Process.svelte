<script>
  import Icon from '@iconify/svelte';

  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We begin by understanding your intention. Whether it's Hajj or Umrah, we align on your budget, dates, and spiritual requirements."
    },
    {
      num: "02",
      title: "Processing",
      desc: "We handle the bureaucracy. From visa applications to vaccination records, our team ensures every document is compliant."
    },
    {
      num: "03",
      title: "The Journey",
      desc: "Depart with peace of mind. Our on-ground team receives you in Jeddah and remains by your side until your return."
    }
  ];
</script>

<section class="w-full bg-white text-[#1B1B1B] font-['Urbanist'] py-24 md:py-32 border-b border-gray-100">
  <div class="max-w-[1400px] mx-auto px-6 md:px-12">
    
    <div class="mb-20 md:mb-24 max-w-2xl">
      <span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00B77A] mb-4 block">
        The Roadmap
      </span>
      <h2 class="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1] text-[#1B1B1B]">
        Your path to the <br />
        <span class="text-[#00B77A]">Sacred House.</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
      {#each steps as step}
        <div class="group relative flex flex-col pt-8 border-t border-gray-200 transition-colors duration-500 hover:border-[#00B77A] cursor-default">
          
          <div class="mb-8">
            <span class="text-6xl md:text-7xl font-light tracking-tighter text-gray-200 group-hover:text-[#1B1B1B] transition-colors duration-500 select-none">
              {step.num}
            </span>
          </div>

          <div class="relative z-10">
            <h3 class="text-2xl font-bold tracking-tight mb-4 flex items-center transition-transform duration-300 group-hover:translate-x-4">
              
              <span class="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#00B77A] opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              
              {step.title}
            </h3>
            
            <p class="text-base text-gray-500 leading-relaxed max-w-sm group-hover:text-gray-600 transition-colors">
              {step.desc}
            </p>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>