<template>
  <v-app>
    <v-app-bar app color="primary">Melodies Center St. Baldrick’s Fundraiser 2020</v-app-bar>

    <v-content>
      <v-row>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col>Shavee Batting Order:</v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col>
          <shavee-list msg="Welcome to Your Vue.js App" />
        </v-col>
        <v-col>
          <logos />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="banner">
          <img src="/stbaldricks.png" class="banner" style="height:120px;" />
        </v-col>
        <v-col>
          <total />
        </v-col>
        <v-col>
          <img src="/Melodies.png" class="banner" style="hight:120px;" />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import ShaveeList from "./components/ShaveeList.vue";
import Total from "./components/Total";
import Logos from "./components/Logos";
export default {
  name: "App",
  components: {
    ShaveeList,
    Total,
    Logos
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.banner {
  vertical-align: bottom;
}
</style>