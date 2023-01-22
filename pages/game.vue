<template>
  {{ data }}
</template>

<script>
export default {
  data() {
    return {
      maxRepeat: {
        action: 2,
        verite: 1,
      },
      data: {
        verite: null,
        action: null,
      },
      game: {},
    }
  },
  methods: {
    async getData(mode) {
      const supabase = useSupabaseClient();
      let respons = await supabase
      .from(`verite_${mode}`)
      .select()
      this.data.verite = respons.data;
      respons = await supabase
      .from(`action_${mode}`)
      .select()
      this.data.action = respons.data;
    },
    Find(table, player) {
      console.log(Math.random());
    }
  },
  mounted() {
    if (localStorage.startedGameId)
    {
      const actualGames = JSON.parse(localStorage.games)
      this.game = actualGames.filter(element => element.id == localStorage.startedGameId);
    }
    this.getData(this.game[0].gameDificulty);
    // const respons = await useAsyncData('tasks', asyn)
    // console.log(supabase.from('action_soft').select());
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