<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => mounted = true);
</script>

<section class="w-full bg-white text-[#1B1B1B] font-['Urbanist'] pt-32 pb-12 px-6 md:px-12">
  <div class="max-w-[1000px] mx-auto text-center">
    
    <div class="opacity-0 translate-y-4 animate-fade-in-up mb-6 flex justify-center">
      <span class="px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50 text-[11px] font-bold uppercase tracking-[0.2em] text-[#00B77A]">
        Contact Us
      </span>
    </div>

    <h1 class="opacity-0 translate-y-4 animate-fade-in-up delay-100 text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-8 text-[#1B1B1B]">
      Let's plan your <br class="hidden md:block" />
      <span class="text-[#00B77A]">Sacred Journey.</span>
    </h1>

    <p class="opacity-0 translate-y-4 animate-fade-in-up delay-200 text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
      Whether you are ready to book or just have a question about the requirements, our team is here to serve you.
    </p>

  </div>
</section>

<style>
  .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>