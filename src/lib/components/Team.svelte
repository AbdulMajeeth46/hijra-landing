<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="w-full bg-white text-[#1B1B1B] font-['Urbanist'] py-24 px-6 md:px-12">
  <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
    
    <div class="md:w-1/3">
      <h2 class="text-4xl font-semibold tracking-tighter mb-4">{siteConfig.team.heading}</h2>
      <p class="text-gray-500 text-lg">
        {siteConfig.team.description}
      </p>
    </div>

    <div class="md:w-2/3 flex flex-col">
      {#each siteConfig.team.members as member}
        <div class="group flex items-center justify-between py-8 border-b border-gray-100 cursor-default transition-colors hover:border-gray-200">
          
          <div class="flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-4">
             <span class="w-2 h-2 rounded-full bg-[#00B77A] opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
             <h3 class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B]">
               {member.name}
             </h3>
          </div>

          <span class="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#00B77A] transition-colors">
            {member.role}
          </span>

        </div>
      {/each}
    </div>

  </div>
</section>