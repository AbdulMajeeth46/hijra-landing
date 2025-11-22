<script>
  import { onMount } from 'svelte';
  
  const stats = [
    {
      value: "10",
      suffix: "+",
      label: "Years Experience",
      desc: "Serving the guests of Allah since 2010."
    },
    {
      value: "15",
      suffix: "+",
      label: "Global Reach",
      desc: "Pilgrims served from over 15 different nations."
    },
    {
      value: "100",
      suffix: "%",
      label: "Satisfaction",
      desc: "Based on post-Hajj feedback surveys."
    }
  ];

  let visible = false;
  onMount(() => visible = true);
</script>

<section class="w-full bg-white text-[#1B1B1B] font-['Urbanist'] py-24 md:py-32 border-b border-gray-100">
  <div class="max-w-[1400px] mx-auto px-6 md:px-12">
    
    <div class="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-12">
      
      <div class="lg:w-1/3 pt-4">
        <h3 class="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-6">
          Built on <br />
          <span class="text-[#00B77A]">trust & tradition.</span>
        </h3>
        <p class="text-gray-500 text-lg leading-relaxed">
          Numbers aren't just metrics to us; they represent individual spiritual journeys facilitated with precision, care, and the Amanah (trust) placed in our hands.
        </p>
      </div>

      <div class="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
        {#each stats as stat, i}
          <div class="group relative flex flex-col md:px-8 first:pl-0 border-t border-gray-200 hover:border-[#00B77A] transition-colors duration-500 cursor-default">
            
            <div class="pt-6 mb-4 flex justify-between items-center">
              <span class="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 group-hover:text-[#00B77A] transition-colors duration-300">
                {stat.label}
              </span>
            </div>

            <div class="mb-4">
               <span class="text-7xl md:text-8xl font-medium tracking-tighter leading-none text-[#1B1B1B] group-hover:text-black transition-colors">
                 {stat.value}<span class="text-4xl align-top text-gray-300 group-hover:text-[#00B77A] transition-colors duration-300">{stat.suffix}</span>
               </span>
            </div>

            <p class="text-sm text-gray-400 font-medium max-w-[150px] leading-tight opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              {stat.desc}
            </p>

          </div>
        {/each}
      </div>

    </div>
  </div>
</section>