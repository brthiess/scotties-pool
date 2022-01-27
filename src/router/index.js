import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Rules from "../views/Rules.vue";
import Stats from "../views/Stats.vue";

Vue.use(VueRouter);

const teams = [
  {
    name: "Alberta",
    subName: "Walker",
    image: "alberta.png",
    pointsPerWin: 1.2,
    wins: 0,
    id: 1,
  },
  {
    name: "Saskatchewan",
    subName: "Barker",
    image: "saskatchewan.png",
    pointsPerWin: 2.5,
    wins: 0,
    id: 2,
  },
  {
    name: "Manitoba",
    subName: "Zacharias",
    image: "manitoba.png",
    pointsPerWin: 1.8,
    wins: 0,
    id: 3,
  },
  {
    name: "British Columbia",
    subName: "Arsenault",
    image: "bc.png",
    pointsPerWin: 3.0,
    wins: 0,
    id: 4,
  },
  {
    name: "Nunavut",
    subName: "MacPhail",
    image: "nunavut.png",
    pointsPerWin: 12,
    wins: 0,
    id: 5,
  },
  {
    name: "Wild Card 1",
    subName: "Fleury",
    image: "wc1.png",
    pointsPerWin: 1.1,
    wins: 0,
    id: 6,
  },
  {
    name: "Wild Card 2",
    subName: "Carey",
    image: "wc2.png",
    pointsPerWin: 1.4,
    wins: 0,
    id: 7,
  },
  {
    name: "Wild Card 3",
    subName: "Miskew",
    image: "wc3.png",
    pointsPerWin: 1.3,
    wins: 0,
    id: 8,
  },
  {
    name: "NWT",
    subName: "Galusha",
    image: "nwt.png",
    pointsPerWin: 3.0,
    wins: 0,
    id: 9,
  },
  {
    name: "Yukon",
    subName: "Birnie",
    image: "yukon.png",
    pointsPerWin: 11,
    wins: 0,
    id: 10,
  },
  {
    name: "Ontario",
    subName: "Duncan",
    image: "ontario.png",
    pointsPerWin: 1.9,
    wins: 0,
    id: 11,
  },
  {
    name: "Quebec",
    subName: "St-Georges",
    image: "quebec.png",
    pointsPerWin: 2.0,
    wins: 0,
    id: 12,
  },
  {
    name: "New Brunswick",
    subName: "Crawford",
    image: "new-brunswick.png",
    pointsPerWin: 2.7,
    wins: 0,
    id: 13,
  },
  {
    name: "Nova Scotia",
    subName: "Black",
    image: "nova-scotia.png",
    pointsPerWin: 4.5,
    wins: 0,
    id: 14,
  },
  {
    name: "PEI",
    subName: "Birt",
    image: "pei.png",
    pointsPerWin: 2.6,
    wins: 0,
    id: 15,
  },
  {
    name: "Northern Ontario",
    subName: "McCarville",
    image: "northern-ontario.jpg",
    pointsPerWin: 1.7,
    wins: 0,
    id: 16,
  },
  {
    name: "Newfoundland",
    subName: "Hill",
    image: "newfoundland.png",
    pointsPerWin: 5.0,
    wins: 0,
    id: 17,
  },
  {
    name: "Canada",
    subName: "Einarson",
    image: "canada.png",
    pointsPerWin: 1,
    wins: 0,
    id: 18,
  },
];
const users = [
  {
    teamName: "The Sheetheads",
    realName: "",
    picks: [6, 11, 16, 8, 1, 14],
    img: "rock.png",
    id: 1,
  },
];

const routes = [
  {
    path: "/",
    name: "Leaderboard",
    component: Home,
    props: { users, teams },
  },
  {
    path: "/player/:id",
    name: "Player",
    component: About,
    props: { users, teams },
  },
  {
    path: "/stats/",
    name: "Stats",
    component: Stats,
    props: { users, teams },
  },
  {
    path: "/rules/",
    name: "Rules",
    component: Rules,
    props: { users, teams },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
