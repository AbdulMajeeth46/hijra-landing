<script lang="ts">
    import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<section class="w-full px-6 md:px-12 py-12 font-body antialiased">
    
    <div class="max-w-350 mx-auto">
        
        <div class="w-full bg-linear-to-br from-[#222222] to-[#0a0a0a] rounded-4xl p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-white relative overflow-hidden shadow-2xl shadow-black/5">
            
            <div class="relative z-10 max-w-2xl">
                <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
                    {siteConfig.cta.heading} <br />
                    <span class="text-(--primary)">{siteConfig.cta.highlight}</span>
                </h2>
                <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                    {siteConfig.cta.description}
                </p>
            </div>

            <a href={siteConfig.cta.buttonLink} 
               class="group flex items-center justify-center bg-white text-[#1B1B1B] px-10 py-4 rounded-full text-sm font-bold tracking-tight shrink-0 border border-white
                      transition-all duration-200 ease-out
                      shadow-none
                      hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[0.3125rem_0.3125rem_0_0_var(--primary)]
                      active:translate-x-0 active:translate-y-0 active:shadow-none">
                {siteConfig.cta.buttonText}
            </a>

        </div>
    </div>
</section>