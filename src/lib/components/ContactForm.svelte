<script>
  import Icon from '@iconify/svelte';
  
  let formData = {
    name: '',
    email: '',
    phone: '',
    interest: 'Hajj Package',
    message: ''
  };

  const interests = ['Hajj Package', 'Umrah Package', 'Custom Tour', 'Visa Only'];

  const handleSubmit = () => {
    console.log('Form Submitted', formData);
  };
</script>

<section class="w-full bg-white text-[#1B1B1B] font-['Urbanist'] py-12 md:py-24 px-6 md:px-12 border-b border-gray-100">
  <div class="max-w-[1400px] mx-auto">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
      
      <div class="lg:col-span-5 flex flex-col gap-16">
        
        <div>
          <h3 class="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 leading-[1.1]">
            Get in touch <br />
            <span class="text-[#00B77A]">directly.</span>
          </h3>
          <p class="text-gray-500 leading-relaxed text-lg font-medium max-w-sm">
            Prefer to speak to a human? Our support team in Jeddah is available 24/7 to assist you.
          </p>
        </div>

        <div class="flex flex-col gap-10">
          
          <div class="group cursor-default">
             <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-full bg-[#00B77A]/10 flex items-center justify-center text-[#00B77A]">
                  <Icon icon="heroicons:envelope" class="w-4 h-4" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</span>
             </div>
             <a href="mailto:salam@hijra.com" class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] hover:text-[#00B77A] transition-colors block break-all">
               salam@hijra.com
             </a>
          </div>

          <div class="group cursor-default">
             <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-full bg-[#00B77A]/10 flex items-center justify-center text-[#00B77A]">
                  <Icon icon="heroicons:phone" class="w-4 h-4" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest text-gray-400">WhatsApp / Call</span>
             </div>
             <a href="tel:+966500000000" class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] hover:text-[#00B77A] transition-colors block">
               +966 50 000 0000
             </a>
          </div>

        </div>
      </div>

      <div class="lg:col-span-7">
        <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-8 bg-white pt-2">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="e.g. Yusuf Ahmed"
                bind:value={formData.name}
                class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors placeholder-gray-300"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="name@example.com"
                bind:value={formData.email}
                class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors placeholder-gray-300"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div class="flex flex-col gap-2">
              <label for="phone" class="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="+1 (555) 000-0000"
                bind:value={formData.phone}
                class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors placeholder-gray-300"
              />
            </div>
            <div class="flex flex-col gap-2 relative">
              <label for="interest" class="text-xs font-bold uppercase tracking-widest text-gray-400">Interested In</label>
              <div class="relative">
                <select 
                  id="interest"
                  bind:value={formData.interest}
                  class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors appearance-none cursor-pointer rounded-none"
                >
                  {#each interests as interest}
                    <option value={interest}>{interest}</option>
                  {/each}
                </select>
                <div class="absolute right-0 top-5 pointer-events-none text-gray-400">
                    <Icon icon="heroicons:chevron-down" class="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="message" class="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
            <textarea 
              id="message" 
              rows="4"
              placeholder="Tell us about your plans..."
              bind:value={formData.message}
              class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors placeholder-gray-300 resize-none"
            ></textarea>
          </div>

          <div class="pt-6">
            <button 
              type="submit"
              class="group cursor-pointer w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#1B1B1B] text-white px-10 py-4 rounded-full text-sm font-bold tracking-tight border border-[#1B1B1B]
                     transition-all duration-200 ease-out
                     shadow-none
                     hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0px_0px_#00B77A]
                     active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <span>Send Message</span>
              <Icon icon="heroicons:paper-airplane" class="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>

    </div>
  </div>
</section>