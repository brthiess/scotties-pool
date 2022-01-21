import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const teams = [
  {
    name: "Alberta",
    image: "alberta.png",
    pointsPerWin: 1.1,
    wins: 10,
    id: 1,
  },
  {
    name: "Saskatchewan",
    image: "saskatchewan.png",
    pointsPerWin: 1.1,
    wins: 1,
    id: 2,
  },
  {
    name: "Manitoba",
    image: "manitoba.png",
    pointsPerWin: 1.1,
    wins: 3,
    id: 3,
  },
  {
    name: "British Columbia",
    image: "bc.png",
    pointsPerWin: 1.5,
    wins: 1,
    id: 4,
  },
  {
    name: "Nunavut",
    image: "nunavut.png",
    pointsPerWin: 3.1,
    wins: 5,
    id: 5,
  },
];
const users = [
  {
    teamName: "Home Sweep",
    realName: "Brad Thiessen",
    picks: [1, 2, 3, 4],
    img: "b.png",
    id: 1,
  },
  {
    teamName: "Away Sweep",
    realName: "Alison Thiessen",
    picks: [1, 2, 3, 5],
    img: "a.png",
    id: 2,
  },
  {
    teamName: "Super long Team Name",
    realName: "Alison Thiessen",
    picks: [4, 2, 3, 5],
    img: "a.png",
    id: 3,
  },
  {
    teamName: "Shortname",
    realName: "Alison Thiessen",
    picks: [1, 2, 4, 5],
    img: "a.png",
    id: 4,
  },
];

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { users, teams },
  },
  {
    path: "/player/:id",
    name: "Player",
    component: About,
    props: { users, teams },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
