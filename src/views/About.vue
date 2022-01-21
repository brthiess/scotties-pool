<template>
  <div class="about">
    <h1>{{ users[0] }}</h1>
    <h3>Picks</h3>
    <ul>
      <li v-for="(pick, index) in currentUser.picks" :key="index">
        {{ getTeamFromId(pick) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    teams: Array,
    users: Array,
  },
  computed: {
    currentUser() {
      return this.users[this.$route.params.id - 1];
    },
  },
  methods: {
    getTeamFromId(teamId) {
      for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id == teamId) {
          return this.teams[i];
        }
      }
    },
  },
};
</script>

<style>
* {
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0;
}
html {
  background: #fafafa;
}
</style>
