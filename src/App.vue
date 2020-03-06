<template>
  <v-app>
    <v-app-bar app color="primary">Melodies Center St. Baldrick’s Fundraiser 2020</v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col class="header-text">Shavee Batting Order:</v-col>
          <v-col class="header-text">Thank You To Our Sponsors:</v-col>
        </v-row>
        <v-row align="center" align-content="center">
          <v-col>
            <shavee-list />
          </v-col>
          <v-col align-self="center">
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
      </v-container>
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
  vertical-align: top;
}
.header-text {
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 3em;
  font-weight: bolder;
  color: #63883d;
}
</style>