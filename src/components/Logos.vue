<template>
  <div>
    <v-carousel cycle :show-arrows="false" :hide-delimiters="true">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <img :src="item.src" :style="item.style" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/Melodies.jpg",
          style: "height:auto;width:500px;float:right;"
        },
        {
          src: "/whalen.jpg",
          style: "height:auto;width:500px;float:right;"
        }
      ]
    };
  }
};
</script>

<style scoped>
.st {
}
</style>