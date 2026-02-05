<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<div class="min-h-screen w-full flex flex-col font-body bg-(--background) relative overflow-x-hidden">
    
    <div class="flex-1 flex flex-col justify-center py-24 pt-[15vh] px-6 md:px-12">
        <div class="max-w-350 mx-auto w-full">
            
            <div class="w-full h-px bg-(--foreground) mb-16 lg:mb-24 scale-x-0 animate-[scaleX_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] origin-left"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-24 items-center">
                
                <div class="lg:col-span-7">
                    <h1 class="text-[clamp(10rem,25vw,20rem)] font-bold tracking-tighter leading-[0.8] text-(--foreground) -ml-[0.05em] select-none opacity-0 translate-y-12 animate-[fadeInUp_1.1s_0.1s_forwards]">
                        404<span class="text-(--primary)">.</span>
                    </h1>
                </div>

                <div class="lg:col-span-5 flex flex-col">
                    
                    <div class="space-y-8 opacity-0 translate-y-8 animate-[fadeInUp_1s_0.3s_forwards]">
                        <h2 class="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-(--foreground)">
                            Nothing <br />
                            <span class="text-(--muted)">to see here.</span>
                        </h2>
                        
                        <p class="text-xl md:text-2xl text-(--muted) leading-relaxed font-normal max-w-md">
                            The architecture you are looking for has not yet been built.
                        </p>
                    </div>

                    <div class="mt-24 opacity-0 translate-y-8 animate-[fadeInUp_1s_0.5s_forwards]">
                         <a href="/" 
                           class="group inline-flex items-center gap-4 px-12 py-6 bg-(--foreground) text-(--background) rounded-full text-sm font-bold tracking-widest uppercase border border-(--foreground)
                                  transition-all duration-300 ease-out
                                  hover:-translate-y-1 hover:shadow-[0.375rem_0.375rem_0_0_var(--primary)]">
                            <span>Return Home</span>
                            <Icon icon="heroicons:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<style>
    @keyframes scaleX { from { transform: scaleX(0); } to { transform: scaleX(1); } }
</style>