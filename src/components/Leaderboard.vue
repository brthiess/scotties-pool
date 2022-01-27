<template>
  <div class="leaderboard-container">
    <div class="leaderboard">
      <div class="logo">
        <div class="top">&#9825;</div>
        <div class="right">&#9825;</div>
        <div class="bottom">&#9825;</div>
        <div class="left">&#9825;</div>
      </div>
      <div class="text">
        <span class="scotties">Scotties Pool</span>
        <span class="leaderboard-text">Leaderboard</span>
      </div>
    </div>
    <div class="header">
      <div class="place-header">Place</div>
      <div class="team-name-header">Team Name</div>
      <div class="points-header">Points</div>
    </div>
    <ul>
      <li v-for="(leader, index) in leaders" :key="leader.teamName">
        <router-link class="link" :to="'/player/' + leader.id"></router-link>
        <div class="place">{{ index + 1 }}</div>
        <div class="avatar-name">
          <div class="name">{{ leader.teamName }}</div>
        </div>
        <div class="total-points">
          {{ Math.round(leader.totalPoints * 10) / 10 }}
        </div>
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
      return leaders.sort((a, b) => (a.totalPoints < b.totalPoints ? 1 : -1));
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
.leaderboard-container {
  max-width: 600px;
  margin: auto;
  margin-bottom: 100px;
}
@media only screen and (min-width: 700px) {
  .leaderboard-container {
    margin-top: 50px;
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.3);
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.logo {
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.top,
.right,
.left,
.bottom {
  position: absolute;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.533);
}
.top {
  top: -17px;
}
.right {
  transform: rotate(90deg);
  top: 0px;
  left: 17px;
}
.bottom {
  top: 17px;
  transform: rotate(180deg);
}
.left {
  transform: rotate(-90deg);
  top: 0px;
  left: -17px;
}
.leaderboard {
  background: linear-gradient(to right, #f40e04, #f40e04);
  height: 100px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  font-size: 30px;
  padding: 0 40px 0 60px;
}
.text {
  display: flex;
  flex-flow: column;
  text-transform: uppercase;
}
.scotties {
  font-size: 22px;
}
.leaderboard-text {
  font-size: 23.8px;
}
.header {
  text-transform: uppercase;
  background: #666;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}
li {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
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
  flex-shrink: 0;
  color: blue;
  width: 100px;
}
.avatar-name {
  display: flex;
  align-items: center;
}
.avatar {
  width: 50px;
  height: 50px;
  margin-right: 20px;
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
  width: 160px;
  font-weight: bold;
}
.link {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.total-points {
  font-weight: 500;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
