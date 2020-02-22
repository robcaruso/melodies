<template>
  <div class="money">
    <div class="total">{{total}}</div>
    <div>of</div>
    <div class="goal">$100,000</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "total",
  mounted() {
    this.getTotal();
    setInterval(
      function() {
        this.getTotal();
      }.bind(this),
      100000
    );
  },
  data() {
    return {
      total: ""
    };
  },
  methods: {
    getTotal() {
      axios({
        url: "https://xgbxor9a70.execute-api.us-east-1.amazonaws.com/default/total",
        method: "GET",
        responseType: "text"
      }).then(response => {
        console.log(response.data);
        this.total = response.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.money {
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 3em;
  font-weight: bolder;
  color: #63883d;
}
</style>