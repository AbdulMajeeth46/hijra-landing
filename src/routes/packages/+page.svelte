<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<div class="min-h-screen w-full flex flex-col font-body bg-(--background) relative overflow-x-hidden selection:bg-(--primary) selection:text-white">
    
    <div class="flex-1 flex flex-col justify-center py-12 pt-32 md:pt-[15vh] px-6 md:px-12 mt-10">
        <div class="max-w-350 mx-auto w-full">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-24 items-center">
                
                <div class="lg:col-span-7">
                    <h1 class="text-[clamp(6rem,25vw,20rem)] font-bold tracking-tighter leading-[0.8] text-(--foreground) -ml-[0.05em] select-none opacity-0 animate-fade-in-up will-change-transform">
                        404<span class="text-(--primary)">.</span>
                    </h1>
                </div>

                <div class="lg:col-span-5 flex flex-col">
                    
                    <div class="space-y-6 md:space-y-8 opacity-0 animate-fade-in-up delay-200 will-change-transform">
                        <h2 class="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-(--foreground)">
                            Nothing <br />
                            <span class="text-(--muted)">to see here.</span>
                        </h2>
                        
                        <p class="text-lg md:text-xl lg:text-2xl text-(--muted) leading-relaxed font-normal max-w-md">
                            The architecture you are looking for has not yet been built.
                        </p>
                    </div>

                    <div class="mt-12 lg:mt-24 opacity-0 animate-fade-in-up delay-300 will-change-transform">
                         <a href="/" 
                           class="group inline-flex items-center gap-3 px-8 py-4 bg-(--background) text-(--foreground) rounded-full text-sm font-bold tracking-widest uppercase border border-(--border)
                                  transition-all duration-300 ease-out
                                  shadow-none
                                  hover:-translate-y-1 hover:-translate-x-1 hover:border-(--foreground) hover:shadow-[0.25rem_0.25rem_0_0_var(--foreground)]
                                  active:translate-x-0 active:translate-y-0 active:shadow-none">
                            <span>Return Home</span>
                            <Icon icon="heroicons:arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>