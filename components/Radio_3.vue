<template>
  <div class="w-full grid grid-cols-3 bg-[#333] relative rounded-2xl overflow-hidden">
    <div id="background" class="bg-fire-opal w-1/3 h-full absolute left-0 duration-200 rounded-2xl "></div>
    <div class="radio-div z-10 group rounded-2xl overflow-hidden text-center w-full text-2xl block cursor-pointer duration-200">
      <input @click="UpdateRadioStyle(0)" class="hidden" type="radio" name="game-dificulty" id="soft" checked>
      <label class="py-1 px-8 block w-full h-full cursor-pointer duration-200 text-black" for="soft">Soft</label>
    </div>
    <div class="radio-div z-10 group rounded-2xl overflow-hidden text-center w-full text-2xl block cursor-pointer duration-200">
      <input @click="UpdateRadioStyle(1)" class="hidden" type="radio" name="game-dificulty" id="medium">
      <label class="py-1 px-8 block w-full h-full cursor-pointer duration-200" for="medium">Medium</label>
    </div>
    <div class="radio-div z-10 group rounded-2xl overflow-hidden text-center w-full text-2xl block cursor-pointer duration-200">
      <input @click="UpdateRadioStyle(2)" class="hidden" type="radio" name="game-dificulty" id="hot">
      <label class="py-1 px-8 block w-full h-full cursor-pointer duration-200" for="hot">Hot</label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    UpdateRadioStyle(position) {
      const background = document.querySelector('#background');
      if (position === 0)
      {
        background.classList.remove('left-2/3');
        background.classList.remove('left-1/3');
        background.classList.add('left-0');
      }
      if (position === 1)
      {
        background.classList.remove('left-2/3');
        background.classList.remove('left-0');
        background.classList.add('left-1/3');
      }
      if (position === 2)
      {
        background.classList.add('left-2/3');
        background.classList.remove('left-1/3');
        background.classList.remove('left-0');
      }
      const radioDivs = document.querySelectorAll('.radio-div');

      radioDivs.forEach((radioDiv) => {
        // console.log(radioDiv);
        const input = radioDiv.querySelector('input');
        if (input.checked === true)
        {
          radioDiv.querySelector('label').classList.add('text-black')
          console.log(input);
        }
        else 
        {
          radioDiv.querySelector('label').classList.remove('text-black')
        }
      })
    },
  },
  beforeMount() {
  },
}
</script>