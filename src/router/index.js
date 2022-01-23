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
    pointsPerWin: 1.1,
    wins: 10,
    id: 1,
  },
  {
    name: "Saskatchewan",
    subName: "Barker",
    image: "saskatchewan.png",
    pointsPerWin: 1.1,
    wins: 1,
    id: 2,
  },
  {
    name: "Manitoba",
    subName: "Zacharias",
    image: "manitoba.png",
    pointsPerWin: 1.1,
    wins: 3,
    id: 3,
  },
  {
    name: "British Columbia",
    subName: "Arsenault",
    image: "bc.png",
    pointsPerWin: 1.5,
    wins: 1,
    id: 4,
  },
  {
    name: "Nunavut",
    subName: "MacPhail",
    image: "nunavut.png",
    pointsPerWin: 3.1,
    wins: 5,
    id: 5,
  },
  {
    name: "Wild Card 1",
    subName: "Fleury",
    image: "wc1.png",
    pointsPerWin: 1,
    wins: 11,
    id: 6,
  },
  {
    name: "Wild Card 2",
    subName: "Carey",
    image: "wc2.png",
    pointsPerWin: 1.1,
    wins: 7,
    id: 7,
  },
  {
    name: "Wild Card 3",
    subName: "Miskew",
    image: "wc3.png",
    pointsPerWin: 1.1,
    wins: 11,
    id: 8,
  },
  {
    name: "NWT",
    subName: "Galusha",
    image: "nwt.png",
    pointsPerWin: 3.2,
    wins: 3,
    id: 9,
  },
  {
    name: "Yukon",
    subName: "Birnie",
    image: "yukon.png",
    pointsPerWin: 16.1,
    wins: 0,
    id: 10,
  },
  {
    name: "Ontario",
    subName: "Duncan",
    image: "ontario.png",
    pointsPerWin: 2.0,
    wins: 5,
    id: 11,
  },
  {
    name: "Quebec",
    subName: "St-Georges",
    image: "quebec.png",
    pointsPerWin: 3,
    wins: 5,
    id: 12,
  },
  {
    name: "New Brunswick",
    subName: "Crawford",
    image: "new-brunswick.png",
    pointsPerWin: 6,
    wins: 11,
    id: 13,
  },
  {
    name: "Nova Scotia",
    subName: "Black",
    image: "nova-scotia.png",
    pointsPerWin: 3,
    wins: 1,
    id: 14,
  },
  {
    name: "PEI",
    subName: "Birt",
    image: "pei.png",
    pointsPerWin: 3,
    wins: 1,
    id: 15,
  },
  {
    name: "Northern Ontario",
    subName: "McCarville",
    image: "northern-ontario.jpg",
    pointsPerWin: 3,
    wins: 1,
    id: 16,
  },
  {
    name: "Newfoundland",
    subName: "Hill",
    image: "newfoundland.png",
    pointsPerWin: 3,
    wins: 1,
    id: 17,
  },
  {
    name: "Canada",
    subName: "Einarson",
    image: "canada.png",
    pointsPerWin: 1.1,
    wins: 8,
    id: 18,
  },
];
const users = [
  {
    teamName: "The Teddy Bears",
    realName: "Brad Thiessen",
    picks: [1, 2, 3, 4],
    img: "rock.png",
    id: 1,
  },
  {
    teamName: "Curl Power",
    realName: "Alison Thiessen",
    picks: [1, 2, 3, 5],
    img: "broom.png",
    id: 2,
  },
  {
    teamName: "The Short and Curlers",
    realName: "Alison Thiessen",
    picks: [18, 2, 3, 11],
    img: "house.png",
    id: 3,
  },
  {
    teamName: "The Sheet Stains",
    realName: "Alison Thiessen",
    picks: [1, 2, 8, 16],
    img: "a.png",
    id: 4,
  },
  {
    teamName: "Ready to Rock!",
    realName: "Alison Thiessen",
    picks: [1, 2, 4, 5],
    img: "a.png",
    id: 5,
  },
  {
    teamName: "Sheep Sweep",
    realName: "Alison Thiessen",
    picks: [1, 3, 4, 10],
    img: "a.png",
    id: 6,
  },
  {
    teamName: "The Powerpuff Girls",
    realName: "Alison Thiessen",
    picks: [1, 6, 7, 5],
    img: "a.png",
    id: 7,
  },
  {
    teamName: "Game of Stones",
    realName: "Alison Thiessen",
    picks: [1, 2, 11, 5],
    img: "a.png",
    id: 8,
  },
  {
    teamName: "The Fantastic Four",
    realName: "Alison Thiessen",
    picks: [1, 2, 14, 5],
    img: "a.png",
    id: 9,
  },
  {
    teamName: "Hack Ups",
    realName: "Alison Thiessen",
    picks: [1, 2, 4, 15],
    img: "a.png",
    id: 10,
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
