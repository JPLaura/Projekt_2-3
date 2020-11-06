
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";


 
Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://be.ta19heinsoo.itmajakas.ee/api/"
 
export default new Vuex.Store({
 state: {
     rooms: [],
     teachers: [],
     weeks: [],
     groups: [],
     lessons: [],
 },
 getters: {
     getValid: state => {
         return state.lessons.filter(items => items.nameEt != null)
     }
 },
 mutations: {
     updateRooms: (state, payload) => {
         state.rooms = payload;
     },
     updateTeachers: (state, payload) => {
         state.teachers = payload;
     },
     updateWeeks: (state, payload) => {
         state.weeks = payload;
     },
     updateGroups: (state, payload) => {
         state.groups = payload;
     },
     updateLessons: (state, payload) => {
            state.lessons = payload;
     },
 },
 actions: {
     async getRooms({state, commit}) {
         if (state.rooms.length) return;
         try {
             const payload = await Vue.axios.get('rooms').then(result =>result.data);
             console.log(payload)
             commit('updateRooms', payload);
         }  catch (err){
             console.log(err);
         }
     },
     async getTeachers({state, commit}) {
         if (state.rooms.length) return;
         try {
             const payload = await Vue.$axios.get('teachers').then(resuslt =>resuslt.data);
             commit('updateTeachers', payload);
         }  catch (err){
             console.log(err);
         }
     },
     async getWeeks({state, commit}) {
         if (state.rooms.length) return;
         try {
             const payload = await this.$axios.get('weeks').then(resuslt =>resuslt.data);
             commit('updateWeeks', payload);
         }  catch (err){
             console.log(err);
         }
     },
     async getGroups({state, commit}) {
         if (state.rooms.length) return;
         try {
             const payload = await this.$axios.get('groups').then(resuslt =>resuslt.data);
             commit('updateGroups', payload);
         }  catch (err){
             console.log(err);
         }
     },
     async getLessons({state, commit}) {
         if (state.lessons.length) return;
         try {
             const payload = await Vue.axios.get('lessons/rooms=4356&weeks=9').then(resuslt =>resuslt.data.timetableEvents)
               commit('updateLessons', payload);
         }  catch (err){
             console.log(err);
         }
     },
 }
});