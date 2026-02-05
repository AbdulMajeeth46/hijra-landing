<script lang="ts">
    import Icon from '@iconify/svelte';
    import { siteConfig } from '$lib/config/site';

    const currentYear = new Date().getFullYear();
</script>

<footer class="w-full bg-(--background) text-(--foreground) pb-8 px-6 md:px-12 font-body antialiased">
    
    <div class="max-w-350 mx-auto">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-(--border) pb-12 md:pb-16 pt-8">
            
            <div class="lg:col-span-4 flex flex-col gap-6 md:gap-8">
                <div>
                    <a href="/" class="inline-flex items-center gap-3 group/logo">
                        <img 
                            src={siteConfig.brand.logo} 
                            alt="{siteConfig.brand.name} Logo" 
                            class="w-8 h-8 md:w-10 md:h-10 object-contain group-hover/logo:scale-110 transition-transform duration-300" 
                        />
                        <span class="text-3xl md:text-4xl font-bold tracking-tighter text-(--foreground)">
                            {siteConfig.brand.name}<span class="text-(--primary)">.</span>
                        </span>
                    </a>
                    <p class="mt-4 text-(--muted) text-sm leading-relaxed max-w-xs font-medium">
                        {siteConfig.brand.description}
                    </p>
                </div>

                <div class="flex items-center gap-3">
                    {#each siteConfig.socials as { icon, color, label, href }}
                        <a href={href} 
                           aria-label={label}
                           style="--brand-color: {color}"
                           class="group/social w-10 h-10 rounded-full bg-(--background) border border-(--border) flex items-center justify-center text-(--muted) 
                                  transition-all duration-200 ease-out
                                  shadow-none
                                  hover:text-(--brand-color) hover:border-(--brand-color) 
                                  hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[0.1875rem_0.1875rem_0_0_var(--brand-color)]
                                  active:translate-x-0 active:translate-y-0 active:shadow-none">
                            <Icon icon={icon} class="w-5 h-5" />
                        </a>
                    {/each}
                </div>
            </div>

            <div class="hidden lg:block lg:col-span-2"></div>

            <div class="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                {#each siteConfig.footerNav as section}
                    <div class="flex flex-col gap-4 md:gap-6">
                        <span class="text-[0.625rem] md:text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-(--muted) opacity-70">
                            {section.label}
                        </span>
                        <ul class="flex flex-col gap-2 md:gap-3">
                            {#each section.items as item}
                                <li>
                                    <a href={item.href} class="text-sm md:text-[0.9375rem] font-medium text-(--muted) hover:text-(--primary) transition-colors duration-200">
                                        {item.label}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>

        <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-xs text-(--muted) font-medium text-center md:text-left">
                © {currentYear} {siteConfig.brand.name} Portal. All rights reserved.
            </p>

            <a href={siteConfig.brand.credits.url} target="_blank" 
               style="--hover-color: {siteConfig.brand.credits.color}"
               class="group flex items-center gap-2 px-4 py-2 bg-(--background) border border-(--border) rounded-lg text-(--muted)
                      transition-all duration-200 ease-out
                      shadow-none
                      hover:text-(--hover-color) hover:border-(--hover-color)
                      hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[0.1875rem_0.1875rem_0_0_var(--hover-color)]
                      active:translate-x-0 active:translate-y-0 active:shadow-none">
                
                <span class="text-[0.625rem] font-bold uppercase tracking-wider group-hover:text-(--foreground)/60 transition-colors">
                    {siteConfig.brand.credits.text}
                </span>
                <span class="text-xs font-bold text-(--hover-color)">
                    {siteConfig.brand.credits.company}
                </span>
            </a>
        </div>
    </div>
</footer>