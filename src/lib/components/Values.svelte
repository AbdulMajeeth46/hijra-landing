<script>
  const principles = [
    {
      title: "Amanah",
      label: "Trust",
      desc: "Your journey is a sacred trust. We honor it with transparency and unwavering reliability.",
      img: "/1.jpg" 
    },
    {
      title: "Ihsan",
      label: "Excellence",
      desc: "Perfection in every detail. From the logistics of your flight to the quality of your stay.",
      img: "/2.jpg"
    },
    {
      title: "Khidmah",
      label: "Service",
      desc: "Serving the guests of Ar-Rahman is not a job; it is the highest honor we cherish.",
      img: "/3.jpg"
    },
    {
      title: "Ilm",
      label: "Knowledge",
      desc: "Authentic scholarship ensures every ritual of your Manasik is performed correctly.",
      img: "/4.jpg"
    }
  ];
</script>

<section class="w-full bg-white text-[#1B1B1B] font-['Urbanist'] py-24 px-6 md:px-12 border-b border-gray-100">
  <div class="max-w-[1400px] mx-auto">
    
    <div class="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
      
      <h2 class="text-5xl md:text-7xl font-normal tracking-tight text-[#1B1B1B] leading-none">
        Guiding <span class="text-[#00B77A]">Principles.</span>
      </h2>

      <div class="pb-1">
        <p class="text-gray-500 text-lg md:text-xl font-medium max-w-sm leading-relaxed text-left md:text-right">
          The four pillars that define our service and uphold every journey we craft.
        </p>
      </div>
      
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[900px]">
      {#each principles as item}
        <div class="group relative w-full h-[500px] md:h-full rounded-[2rem] overflow-hidden bg-gray-100">
          
          <img 
            src={item.img} 
            alt={item.title}
            class="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform"
          />

          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>

          <div class="absolute top-0 left-0 p-10 md:p-12">
            <span class="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em]">
              {item.label}
            </span>
          </div>

          <div class="absolute bottom-0 left-0 p-10 md:p-12 w-full max-w-xl">
            <h3 class="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {item.title}
            </h3>
            <p class="text-gray-200 text-base md:text-lg leading-relaxed font-medium opacity-90">
              {item.desc}
            </p>
            <div class="w-12 h-1 bg-[#00B77A] mt-6"></div>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>