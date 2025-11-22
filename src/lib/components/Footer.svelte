<script>
    import Icon from '@iconify/svelte';
    import logo from '$lib/assets/favicon.svg';

    const footerData = {
        links: [
            {
                label: 'Services',
                items: ['Umrah Packages', 'Hajj Services', 'Visa Processing']
            },
            {
                label: 'Company',
                items: ['About PBIS', 'Our Mission', 'Testimonials']
            },
            {
                label: 'Support',
                items: ['Pilgrim Guide', 'Contact Us', 'FAQ']
            }
        ]
    };
    
    // Social Media Data with Specific Brand Colors
    const socialLinks = [
        { icon: 'mdi:linkedin', color: '#0077b5', label: 'LinkedIn' },
        { icon: 'mdi:instagram', color: '#E4405F', label: 'Instagram' },
        { icon: 'mdi:twitter', color: '#1DA1F2', label: 'Twitter' },
        { icon: 'mdi:youtube', color: '#FF0000', label: 'YouTube' }
    ];

    const currentYear = new Date().getFullYear();
</script>

<footer class="w-full bg-white text-[#1B1B1B] pb-8 px-6 md:px-12 font-['Urbanist'] antialiased">
    
    <div class="max-w-[1400px] mx-auto">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-gray-100 pb-12 md:pb-16 pt-8">
            
            <div class="lg:col-span-4 flex flex-col gap-6 md:gap-8">
                
                <div>
                    <a href="/" class="inline-flex items-center gap-3 group/logo">
                        <img 
                            src={logo} 
                            alt="Hijra Logo" 
                            class="w-8 h-8 md:w-10 md:h-10 object-contain group-hover/logo:scale-110 transition-transform duration-300" 
                        />
                        <span class="text-3xl md:text-4xl font-bold tracking-tighter text-black">
                            Hijra<span class="text-[#00B77A]">.</span>
                        </span>
                    </a>

                    <p class="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                        Your trusted gateway to the Holy Lands. Facilitating spiritual journeys with comfort and peace of mind.
                    </p>
                </div>

                <div class="flex items-center gap-3">
                    {#each socialLinks as { icon, color, label }}
                        <a href="#" 
                           aria-label={label}
                           style="--brand-color: {color}"
                           class="group/social w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 
                                  transition-all duration-200 ease-out
                                  shadow-none
                                  hover:text-[var(--brand-color)] hover:border-[var(--brand-color)] 
                                  hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[3px_3px_0px_0px_var(--brand-color)]
                                  active:translate-x-0 active:translate-y-0 active:shadow-none">
                            <Icon icon={icon} class="w-5 h-5" />
                        </a>
                    {/each}
                </div>

            </div>

            <div class="hidden lg:block lg:col-span-2"></div>

            <div class="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                {#each footerData.links as section}
                    <div class="flex flex-col gap-4 md:gap-6">
                        <span class="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">{section.label}</span>
                        <ul class="flex flex-col gap-2 md:gap-3">
                            {#each section.items as item}
                                <li>
                                    <a href="#" class="text-sm md:text-[15px] font-medium text-gray-600 hover:text-[#00B77A] transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>

        <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-xs text-gray-400 font-medium text-center md:text-left">
                © {currentYear} Hijra Portal. All rights reserved.
            </p>

            <a href="https://proflobiz.in/" target="_blank" 
               class="group flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-400
                      transition-all duration-200 ease-out
                      shadow-none
                      hover:text-[#FEA6C2] hover:border-[#FEA6C2]
                      hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_#FEA6C2]
                      active:translate-x-0 active:translate-y-0 active:shadow-none">
                
                <span class="text-[10px] font-bold uppercase tracking-wider group-hover:text-black/60 transition-colors">Powered By</span>
                <span class="text-xs font-bold text-[#FEA6C2]">PBIS</span>
            </a>
        </div>
    </div>
</footer>