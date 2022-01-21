<template>
  <div class="leaderboard-container">
    <div class="leaderboard">Leaderboard</div>
    <ul>
      <li v-for="(leader, index) in leaders" :key="leader.teamName">
        <router-link :to="'/player/' + leader.id">Hi</router-link> |
        <div class="place">{{ index + 1 }}</div>
        <div class="avatar"><img :src="leader.img" /></div>
        <div class="name">{{ leader.teamName }}</div>
        <div class="total-points">{{ leader.totalPoints }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",
  props: {
    teams: Array,
    users: Array,
  },
  computed: {
    leaders() {
      let leaders = [];
      for (let i = 0; i < this.users.length; i++) {
        let totalPoints = this.getUserPoints(this.users[i], this.teams);
        leaders.push(this.users[i]);
        leaders[i].totalPoints = totalPoints;
      }
      return leaders;
    },
  },
  methods: {
    getUserPoints(user) {
      let userPoints = 0;
      for (let i = 0; i < user.picks.length; i++) {
        userPoints += this.getTeamPoints(user.picks[i]);
      }
      return userPoints;
    },
    getTeamPoints(teamId) {
      for (let i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id == teamId) {
          return this.teams[i].wins * this.teams[i].pointsPerWin;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.leaderboard {
  background: linear-gradient(to right, red, blue);
  height: 100px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  font-size: 30px;
}
li {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
li:nth-child(2n) {
  background-color: #eee;
}
li:nth-child(2n + 1) {
  background: white;
}
.place {
  font-size: 24px;
  font-weight: 600;
  width: 30px;
  flex-shrink: 0;
}
.avatar {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border: 3px solid #ccc;
  border-radius: 30px;
}
.name {
  width: 100px;
}
</style>
