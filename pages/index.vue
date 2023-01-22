<template>
  <div class="min-h-[100vh] h-full flex flex-col lg:flex-row">
    <div class="relative flex grow flex-col justify-center items-center h-64 lg:h-auto">
      <Logo class="absolute lg:bottom-0 lg:-right-12 lg:hidden" type="" direction="inline" size="small" />
      <Logo class="absolute lg:-right-12 hidden lg:block" type="" direction="" size="big" />
    </div>
    <div class="bg-gradient-to-br from-[#242424] to-[#1A1A1A] lg:w-3/4 flex justify-center py-24 lg:pt-64 rounded-t-6xl lg:rounded-l-6xl">
      <div class="flex flex-col gap-8 w-[412px]">
        <h2 class="text-4xl font-bold">Bienvenue</h2>
        <ButtonInline content="Nouvelle Partie" button_style="primary" link="newGame" />
        <div class="flex flex-col gap-1">
          <p class="text-2xl font-bold">Parties en cours</p>
          <div class="flex flex-col gap-4">
            <div v-for="game in games" class="flex gap-1">
              <ButtonInline @click="playGame(game.id)" class="grow" :content="ReturnPlayers(game.players) + ' ' + game.id" button_style="secondary" />
              <ButtonInline @click="RemoveGame(game)" content="Suprimmer" button_style="secondary" />
            </div>
            <p v-if="games.length < 1" class="text-center">Aucune partie en cour</p>
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
      games: [],
    }
  },
  methods: {
    MountGames() {
      if (localStorage.games)
        this.games = JSON.parse(localStorage.games);
    },
    RemoveGame(game) {
      this.games = this.games.filter(element => element != game);
      if (localStorage.games) {
        localStorage.setItem('games', JSON.stringify(this.games));
      }
    },
    ReturnPlayers(players) {
      let rtVal = "";
      for (let i = 0; i < players.length; i++) {
        rtVal += players[i].name;
        if (i < players.length - 1)
          rtVal += " | ";
      }
      return (rtVal)
    },
    playGame(id) {
      localStorage.startedGameId = id;
      this.$router.push('/game')
    },
  },
  mounted() {
    this.MountGames();
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