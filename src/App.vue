<template>
  <div id="app">
    <h1>Hello Vuex</h1>
    <p>{{count}}</p>
    <p>
      <button @click="jia">+</button>
      <button @click="jian">-</button>
    </p>
    <p>
      <button @click="jiaplus">+</button>
      <button @click="jianplus">-</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default{
  name: 'app',
  // data (){
  //   return{
  //     count: 0
  //   }
  // },
  // computed: {
  //   count(){
  //     return this.$store.state.count
  //   }
  // }
  computed: {
    ...mapState([
      "count"
    ]),
    ...mapGetters([
      "count"
    ])
  },

  methods: {
    ...mapMutations([
          "jia",
          "jian"
      ]),
    ...mapActions([
          "jiaplus",
          "jianplus"
      ]),
   }

}
</script>
