import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./routes/routes"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import VueWriter from "vue-writer"

import { OhVueIcon, addIcons } from "oh-vue-icons"

import { GiArtificialIntelligence,FiHk,FaFlag, RiZhihuFill, MdDesignservicesRound, SiSqlite, SiAdobephotoshop,SiPhp,LaLanguageSolid, GiCommercialAirplane, BiCamera2, GiRallyTheTroops,GiSoccerBall,SiAntdesign, SiYoutubegaming, RiMusic2Fill, PxMenu, CoGithub, BiLinkedin, BiWhatsapp, CoInstagram,BiFacebook, HiDownload, FaFirefoxBrowser,FaVrCardboard, SiStrapi, FaPhoneAlt,HiSolidMail,MdLocationon              } from "oh-vue-icons/icons";

addIcons(GiArtificialIntelligence,FaFlag, RiZhihuFill,FiHk, MdDesignservicesRound, SiSqlite, SiAdobephotoshop,SiPhp,LaLanguageSolid,GiCommercialAirplane, BiCamera2,GiRallyTheTroops, GiSoccerBall,SiAntdesign, SiYoutubegaming,RiMusic2Fill,PxMenu, CoGithub,BiLinkedin, BiWhatsapp, CoInstagram,BiFacebook,HiDownload, FaFirefoxBrowser,FaVrCardboard, SiStrapi, FaPhoneAlt,HiSolidMail,MdLocationon          );




createApp(App)
.component("v-icon", OhVueIcon)
.use(router)
.use(VueWriter)
.mount('#app')
