<template>
  <div class="about">
    <h1>{{ currentUser.teamName }}</h1>
    <h3>{{ currentUser.realName }}</h3>
    <h4>Picks</h4>
    <ul>
      <li v-for="(pick, index) in currentUser.picks" :key="index">
        <div class="team-logo">
          <img :src="getTeamFromId(pick).image" />
        </div>
        <div class="team-name">
          {{ getTeamFromId(pick).name }}
          <div class="points-per-win">
            {{ getTeamFromId(pick).pointsPerWin }}
            <span class="points-per-win-text">Points/Win</span>
          </div>
        </div>
        <div class="points-per-win-total-points">
          <div class="total-points">
            {{
              Math.round(
                getTeamFromId(pick).pointsPerWin * getTeamFromId(pick).wins * 10
              ) / 10
            }}
            <span class="total-points-text">Total Points</span>
          </div>
        </div>
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

<style scoped>
h1 {
  text-align: center;
  padding: 30px 20px 5px;
  background: #242460;
  color: white;
  font-size: 40px;
}
h3 {
  font-weight: 300;
  text-align: center;
  padding: 0 20px 20px;
  background: #242460;
  color: white;
  color: rgba(255, 255, 255, 0.7);
}
h4 {
  font-size: 26px;
  text-align: center;
  margin-top: 30px;
}
ul {
  list-style: none;
  padding: 0 20px;
}
li {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  background: #eee;
  margin: 30px auto;
  padding: 10px 30px;
  display: flex;
  height: 80px;
  align-items: center;
  max-width: 400px;
}

.total-points {
  display: flex;
  flex-flow: column;
  font-size: 28px;
  font-weight: bold;
}
.points-per-win {
  font-weight: 300;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.points-per-win-total-points {
  margin-left: auto;
}
.total-points-text,
.points-per-win-text {
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 300;
}
.points-per-win-text {
  margin-left: 5px;
}
.team-logo {
  height: 60px;
  margin-right: 20px;
  width: 60px;
  border-radius: 30px;
  flex-shrink: 0;
  overflow: hidden;
}
.team-name {
  font-size: 22px;
  width: 180px;
  flex-shrink: 0;
}
img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
</style>
