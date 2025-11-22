<script>
    import Icon from '@iconify/svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<section class="w-full px-6 md:px-12 py-12 font-['Urbanist'] antialiased">
    
    <div class="max-w-[1400px] mx-auto">
        
        <div class="w-full bg-gradient-to-br from-[#222222] to-[#0a0a0a] rounded-[2rem] p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-white relative overflow-hidden shadow-2xl shadow-black/5">
            
            <div class="relative z-10 max-w-2xl">
                <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
                    Ready to start your <br />
                    <span class="text-[#00B77A]">sacred journey?</span>
                </h2>
                <p class="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                    Your spiritual journey, simplified. We handle the logistics so you can focus on your worship.
                </p>
            </div>

            <a href="/register" 
               class="group flex items-center gap-3 bg-white text-[#1B1B1B] px-8 py-4 rounded-full text-sm font-bold tracking-tight shrink-0 border border-white
                      transition-all duration-200 ease-out
                      shadow-none
                      hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0px_0px_#00B77A]
                      active:translate-x-0 active:translate-y-0 active:shadow-none">
                <span>Start Booking</span>
                <Icon icon="heroicons:arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

        </div>
    </div>
</section>