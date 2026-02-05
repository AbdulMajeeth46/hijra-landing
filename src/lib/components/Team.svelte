<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="w-full bg-(--background) text-(--foreground) font-body py-24 px-6 md:px-12">
  <div class="max-w-350 mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
    
    <div class="md:w-1/3">
      <h2 class="text-4xl font-semibold tracking-tighter mb-4 text-(--foreground)">{siteConfig.team.heading}</h2>
      <p class="text-(--muted) text-lg">
        {siteConfig.team.description}
      </p>
    </div>

    <div class="md:w-2/3 flex flex-col">
      {#each siteConfig.team.members as member}
        <div class="group flex items-center justify-between py-8 border-b border-(--border) cursor-default transition-colors hover:border-(--muted)">
          
          <div class="flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-4">
             <span class="w-2 h-2 rounded-full bg-(--primary) opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
             <h3 class="text-2xl md:text-3xl font-medium tracking-tight text-(--foreground)">
               {member.name}
             </h3>
          </div>

          <span class="text-xs md:text-sm font-bold uppercase tracking-widest text-(--muted) group-hover:text-(--primary) transition-colors">
            {member.role}
          </span>

        </div>
      {/each}
    </div>

  </div>
</section>