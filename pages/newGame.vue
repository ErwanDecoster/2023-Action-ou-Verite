<template>
  <div class="min-h-[100vh] h-full flex flex-col lg:flex-row">
    <div class="relative flex grow flex-col justify-center items-center h-64 lg:h-auto">
      <Logo class="absolute lg:bottom-0 lg:-right-12 lg:hidden" type="" direction="inline" size="small" />
      <Logo class="absolute lg:-right-12 hidden lg:block" type="" direction="" size="big" />
    </div>
    <div class="grow bg-gradient-to-br from-[#242424] to-[#1A1A1A] lg:w-3/4 flex justify-center py-24 lg:pt-64 rounded-t-6xl lg:rounded-l-6xl">
      <form @submit.prevent="StartGame()" class="flex flex-col gap-8 w-[412px]">
        <h2 class="text-4xl font-bold">Nouvelle partie</h2>
        <div class="grid gap-4">
          <div class="w-full grid gap-1">
            <p class="text-2xl font-bold">Mode de difficulté</p>
            <div class="w-full grid grid-cols-3 bg-[#333] relative rounded-2xl overflow-hidden">
              <div id="background" class="bg-fire-opal w-1/3 h-full absolute left-0 duration-200 rounded-2xl "></div>
              <div class="radio-div z-10 rounded-2xl overflow-hidden text-center w-full text-2xl block cursor-pointer duration-200">
                <input v-model="game.gameDificulty" @click="UpdateRadioStyle($event, 1, 3)" class="absolute h-0 w-0" type="radio" name="game-dificulty" value="soft" id="soft" checked>
                <label class="py-1 px-8 block w-full h-full cursor-pointer duration-200 text-black" for="soft">Soft</label>
              </div>
              <div class="radio-div z-10 rounded-2xl overflow-hidden text-center w-full text-2xl block cursor-pointer duration-200">
                <input v-model="game.gameDificulty" @click="UpdateRadioStyle($event, 2, 3)" class="absolute h-0 w-0" type="radio" name="game-dificulty" value="medium" id="medium">
                <label class="py-1 px-8 block w-full h-full cursor-pointer duration-200" for="medium">Medium</label>
              </div>
              <div class="radio-div z-10 rounded-2xl overflow-hidden text-center w-full text-2xl block cursor-pointer duration-200">
                <input v-model="game.gameDificulty" @click="UpdateRadioStyle($event, 3 , 3)" class="absolute h-0 w-0" type="radio" name="game-dificulty" value="hot" id="hot">
                <label class="py-1 px-8 block w-full h-full cursor-pointer duration-200" for="hot">Hot</label>
              </div>
            </div>
          </div>
          <div class="w-full grid gap-1">
            <p class="text-2xl font-bold">Mode de jeu</p>
            <div class="w-full grid grid-cols-2 bg-[#333] relative rounded-2xl overflow-hidden">
              <div id="background" class="bg-fire-opal w-1/2 h-full absolute left-0 duration-200 rounded-2xl "></div>
              <div class="radio-div z-10 rounded-2xl overflow-hidden text-center w-full text-2xl block cursor-pointer duration-200">
                <input v-model="game.gameMode" @click="UpdateRadioStyle($event, 1, 2)" class="absolute h-0 w-0" type="radio" name="game-mode" value="manuel" id="manuel" checked>
                <label class="py-1 px-8 block w-full h-full cursor-pointer duration-200 text-black" for="manuel">Manuel</label>
              </div>
              <div class="radio-div z-10 rounded-2xl overflow-hidden text-center w-full text-2xl block cursor-pointer duration-200">
                <input v-model="game.gameMode" @click="UpdateRadioStyle($event, 2, 2)" class="absolute h-0 w-0" type="radio" name="game-mode" value="aleatoire" id="aleatoire">
                <label class="py-1 px-8 block w-full h-full cursor-pointer duration-200" for="aleatoire">Aléatoire</label>
              </div>
            </div>
          </div>
          <div class="w-full grid gap-1" v-for="player in game.players">
            <label class="text-2xl font-bold" :for="`joueur_${player.id}`"><span class="capitalize">{{ InLetter(player.id) }}</span> joueur</label>
            <div class="flex gap-1 w-full">
              <input v-model="game.players[player.id].name" class="bg-[#333] rounded-2xl py-1 px-2 text-2xl capitalize grow duration-200" type="text" name="" :id="`joueur_${player.id}`" autocomplete="off">
              <ButtonInline v-if="game.players.length > 2" @click="RemovePlayer(player.id)" content="Supprimer" button_style="primary" />
            </div>     
          </div>
        </div>
        <div class="grid gap-4">
          <ButtonInline @click="AddPlayer()" content="Ajouter un joueur" button_style="secondary" link="" />
          <button class="rounded-2xl py-1 px-2 text-center w-full text-2xl block cursor-pointer duration-200 shadow-md bg-fire-opal text-black hover:shadow-fire-opal" type="submit">Commencer</button>
          <ButtonInline content="Retour" button_style="secondary" link="/" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: {
        id: Date.parse(new Date()),
        gameDificulty: 'soft',
        gameMode: 'aleatoire',
        players: [
          {
            id: 0,
            name: "Erwan",
            realised: {
              action: [],
              verite: []
            }
          },
          {
            id: 1,
            name: "Warne",
            realised: {
              action: [],
              verite: []
            }
          },
        ]
      },
      numbersInLetter: [
        { nb: 'premier' },
        { nb: 'deuxième' },
        { nb: 'troisième' },
        { nb: 'quatrième' },
        { nb: 'cinquième' },
        { nb: 'sixième' },
        { nb: 'septième' },
        { nb: 'huitième' },
        { nb: 'neuvième' },
      ]
    }
  },
  methods: {
    AddPlayer() {
      let player = {
        id: this.game.players.length,
        name: ''
      }
      this.game.players.push(player)
    },
    RemovePlayer(id) {
      this.game.players.splice(id - 1, 1);
      this.ReOrderPlayer();
    },
    ReOrderPlayer() {
      for (let i = 0; i < this.game.players.length; i++) {
        this.game.players[i].id = i;
      }
    },
    InLetter(nb) {
      if (nb < 10) {
        return (this.numbersInLetter[nb].nb);
      }
      return (nb);
    },
    VerifForm() {

    },
    ResetForm() {
      this.game.id = Date.parse(new Date());
      this.game.gameDificulty = 'soft';
      this.game.gameMode = 'aleatoire';
      this.game.players = [];
      this.AddPlayer();
      this.AddPlayer();
    },
    StartGame() {
      if (this.VerifForm)
      {
        let games = [];
        if (localStorage.games) {
          const actualGames = JSON.parse(localStorage.games)
          actualGames.forEach((game) => {
            games.push(game);
          })
        }
        games.push(this.game)
        localStorage.setItem('games', JSON.stringify(games))
        localStorage.startedGameId = this.game.id;
        // console.log(localStorage.getItem('games'));
        console.log(JSON.parse(localStorage.games));
        this.ResetForm();
        this.$router.push('/game')
      }
    },
    UpdateRadioStyle(elemInput, position, nbElement) {
      const radioBlock = elemInput.target.parentElement.parentElement;
      const background = radioBlock.querySelector('#background');
      if (nbElement === 3)
      {
        if (position === 1)
        {
          background.classList.remove('left-2/3');
          background.classList.remove('left-1/3');
          background.classList.add('left-0');
        }
        if (position === 2)
        {
          background.classList.remove('left-2/3');
          background.classList.remove('left-0');
          background.classList.add('left-1/3');
        }
        if (position === 3)
        {
          background.classList.add('left-2/3');
          background.classList.remove('left-1/3');
          background.classList.remove('left-0');
        }
      }
      if (nbElement === 2)
      {
        if (position === 1)
        {
          background.classList.remove('left-1/2');
          background.classList.add('left-0');
        }
        if (position === 2)
        {
          background.classList.remove('left-0');
          background.classList.add('left-1/2');
        }
      }
      const radioDivs = radioBlock.querySelectorAll('.radio-div');
      elemInput.target.nextSibling.classList.add('text-black');
      radioDivs.forEach((radioDiv) => {
        const input = radioDiv.querySelector('input');
        if (input.checked !== true)
          radioDiv.querySelector('label').classList.remove('text-black')
      })
    },
  },
  mounted() {
    if (localStorage.games) {
      // this.game.id = localStorage.games.length;
    }
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