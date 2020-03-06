<template>
  <v-carousel cycle :show-arrows="false" :hide-delimiters="true" :height="300">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <img :src="item.src" :style="item.style" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/Melodies.jpg",
          style: "width:450px;vertical-align:center;float:center"
        },
        {
          src: "/whalen.jpg",
          style: "width:450px;vertical-align:center;float:center"
        }
      ]
    };
  }
};
</script>

