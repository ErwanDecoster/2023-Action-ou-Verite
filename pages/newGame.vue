<template>
  <div class="min-h-[100vh] h-full flex flex-col lg:flex-row">
    <div class="relative flex grow flex-col justify-center items-center h-64 lg:h-auto">
      <Logo class="absolute lg:bottom-0 lg:-right-12 lg:hidden" type="" direction="inline" size="small" />
      <Logo class="absolute lg:-right-12 hidden lg:block" type="" direction="" size="big" />
    </div>
    <div class="grow bg-gradient-to-br from-[#242424] to-[#1A1A1A] lg:w-3/4 flex justify-center py-24 lg:pt-64 rounded-t-6xl lg:rounded-l-6xl">
      <div class="flex flex-col gap-8 w-[412px]">
        <h2 class="text-4xl font-bold">Nouvelle partie</h2>
        <ButtonInline content="Nouvelle Partie" type="primary" link="" />
        <div class="w-full grid grid-cols-3 bg-[#333]  rounded-2xl">
          <div class="radio-div rounded-2xl py-1 px-8 text-center w-full text-2xl block cursor-pointer duration-200">
            <input @click="UpdateRadioStyle()" class="invisible" type="radio" name="soft" id="soft">
            <label class="block bg-slate-200 checked:bg-slate-800" for="soft">Soft</label>
          </div>
          <div class="radio-div rounded-2xl py-1 px-8 text-center w-full text-2xl block cursor-pointer duration-200">
            <input @click="UpdateRadioStyle()" class="invisible" type="radio" name="medium" id="medium">
            <label class="block bg-slate-200 checked:bg-slate-800" for="medium">Medium</label>
          </div>
          <div class="radio-div rounded-2xl py-1 px-8 text-center w-full text-2xl block cursor-pointer duration-200">
            <input @click="UpdateRadioStyle()" class="invisible" type="radio" name="hot" id="hot">
            <label class="block bg-slate-200 checked:bg-slate-800" for="hot">Hot</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    UpdateRadioStyle() {
      const radioDivs = document.querySelectorAll('.radio-div');

      radioDivs.forEach(radioDiv)
    },
  },
  created() {
    useHead({
      title: 'Action ou Vérité',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow'},
        { name: 'theme-color', content: '#F15555'},
      ],
    })
  }
}
</script>