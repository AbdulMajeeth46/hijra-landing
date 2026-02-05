<script lang="ts">
  import Icon from '@iconify/svelte';
  import { siteConfig } from '$lib/config/site';
  
  let formData = {
    name: '',
    email: '',
    phone: '',
    interest: siteConfig.contactPage.form.interests[0],
    message: ''
  };

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
            {siteConfig.contactPage.form.heading} <br />
            <span class="text-[#00B77A]">{siteConfig.contactPage.form.highlight}</span>
          </h3>
          <p class="text-gray-500 leading-relaxed text-lg font-medium max-w-sm">
            {siteConfig.contactPage.form.description}
          </p>
        </div>

        <div class="flex flex-col gap-10">
          
          <div class="group cursor-default">
             <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-full bg-[#00B77A]/10 flex items-center justify-center text-[#00B77A]">
                  <Icon icon="heroicons:envelope" class="w-4 h-4" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {siteConfig.contactPage.form.labels.sidebarEmail}
                </span>
             </div>
             <a href="mailto:{siteConfig.brand.contact.email}" class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] hover:text-[#00B77A] transition-colors block break-all">
               {siteConfig.brand.contact.email}
             </a>
          </div>

          <div class="group cursor-default">
             <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-full bg-[#00B77A]/10 flex items-center justify-center text-[#00B77A]">
                  <Icon icon="heroicons:phone" class="w-4 h-4" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {siteConfig.contactPage.form.labels.sidebarPhone}
                </span>
             </div>
             <a href="tel:{siteConfig.brand.contact.phone.replace(/\s+/g, '')}" class="text-2xl md:text-3xl font-medium tracking-tight text-[#1B1B1B] hover:text-[#00B77A] transition-colors block">
               {siteConfig.brand.contact.phone}
             </a>
          </div>

        </div>
      </div>

      <div class="lg:col-span-7">
        <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-8 bg-white pt-2">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {siteConfig.contactPage.form.labels.name}
              </label>
              <input 
                type="text" 
                id="name" 
                placeholder={siteConfig.contactPage.form.placeholders.name}
                bind:value={formData.name}
                class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors placeholder-gray-300"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {siteConfig.contactPage.form.labels.email}
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder={siteConfig.contactPage.form.placeholders.email}
                bind:value={formData.email}
                class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors placeholder-gray-300"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div class="flex flex-col gap-2">
              <label for="phone" class="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {siteConfig.contactPage.form.labels.phone}
              </label>
              <input 
                type="tel" 
                id="phone" 
                placeholder={siteConfig.contactPage.form.placeholders.phone}
                bind:value={formData.phone}
                class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors placeholder-gray-300"
              />
            </div>
            <div class="flex flex-col gap-2 relative">
              <label for="interest" class="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {siteConfig.contactPage.form.labels.interest}
              </label>
              <div class="relative">
                <select 
                  id="interest"
                  bind:value={formData.interest}
                  class="w-full bg-transparent border-b border-gray-200 py-4 text-lg font-medium text-[#1B1B1B] focus:outline-none focus:border-[#00B77A] transition-colors appearance-none cursor-pointer rounded-none"
                >
                  {#each siteConfig.contactPage.form.interests as interest}
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
            <label for="message" class="text-xs font-bold uppercase tracking-widest text-gray-400">
                {siteConfig.contactPage.form.labels.message}
            </label>
            <textarea 
              id="message" 
              rows="4"
              placeholder={siteConfig.contactPage.form.placeholders.message}
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
              <span>{siteConfig.contactPage.form.labels.submit}</span>
              <Icon icon="heroicons:paper-airplane" class="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>

    </div>
  </div>
</section>