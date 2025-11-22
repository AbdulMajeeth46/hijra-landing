<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  onMount(() => mounted = true);
</script>

<section class="w-full bg-white text-[#1B1B1B] font-['Urbanist'] pt-32 pb-20 px-6 md:px-12 border-b border-gray-100">
  <div class="max-w-[1400px] mx-auto">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-20">
      
      <div>
        <h1 class="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] text-[#1B1B1B]">
          Serving the <br />
          <span class="text-[#00B77A]">Guests of Allah.</span>
        </h1>
      </div>

      <div class="lg:pb-2">
        <p class="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
          We bridge the gap between your intention and the Sacred House. Founded on trust, delivered with excellence since 2010.
        </p>
      </div>

    </div>

    <div class="w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden relative group">
      <img 
        src="/3.jpg" 
        alt="Makkah Skyline" 
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>

  </div>
</section>