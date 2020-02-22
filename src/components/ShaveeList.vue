<template>
  <div>
    <div>
      <div>
        <v-simple-table v-if="parse_csv">
          <template v-slot:default>
            <thead>
              <tr>
                <th v-for="(header, i) in parse_header" :key="i">{{ header }}</th>
              </tr>
            </thead>
            <tr v-for="(csv, i) in parse_csv" :key="i">
              <td>{{formatTime(csv['Shave Time'])}}</td>
              <td>{{csv['Last Name']}}</td>
              <td>{{csv['First Name']}}</td>
              <td>{{csv['Team Name']}}</td>

              <!-- <td v-for="key in parse_header" :key="key">{{csv[key]}} - {{key}}</td> -->
            </tr>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import _ from "lodash";
import axios from "axios";

export default {
  name: "ShaveeList",
  mounted() {
    this.getCVS();

    setInterval(
      function() {
        this.getCVS();
      }.bind(this),
      30000
    );
  },
  data() {
    return {
      channel_name: "",
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders: {},
      sortKey: ""
    };
  },
  methods: {
    getCVS() {
      axios({
        url: "https://stbaldricks.s3.amazonaws.com/Melodies.csv",
        method: "GET",
        accepts: "text",
        responseType: "text"
      }).then(response => {
        var vm = this;
        //console.log(response.data);
        //console.log(typeof response.data);
        vm.parse_csv = vm.csvJSON(response.data);
        //console.log(vm.parse_csv);
      });
    },
    csvJSON(csv) {
      var vm = this;
      var shaveTime = "Shave Time";
      var lines = csv.split("\n");
      var result = [];
      var times = new Set();
      var headers = lines[0].split(",");
      vm.parse_header = lines[0].split(",");
      lines[0].split(",").forEach(function(key) {
        vm.sortOrders[key] = 1;
      });

      lines.map(function(line, indexLine) {
        if (indexLine < 1) return; // Jump header line

        var obj = {};
        var currentline = line.split(",");
        if (currentline[0] == "") {
          return;
        }
        times.add(currentline[0]);

        headers.map(function(header, indexHeader) {
          obj[header] = currentline[indexHeader];
        });

        result.push(obj);
      });

      result.pop(); // remove the last item because undefined values
      result = _.remove(result, function(n) {
        let time = n[shaveTime];
        let timesArray = [...times];

        if (moment().isSameOrBefore(moment(time, "LT"))) {
          if (time == timesArray[0]) {
            return true;
          }
        }
        if (
          moment().isBetween(
            moment(time, "LT"),
            moment(time, "LT")
              .add(9, "minutes")
              .add(59, "seconds")
          )
        ) {
          return true;
        }

        if (moment().isSameOrAfter(moment(time, "LT"))) {
          if (time == timesArray[timesArray.length]) {
            return true;
          }
        }
      });
      return result; // JavaScript object
    },
    formatTime(date) {
      //console.log(date);
      if (date.trim() == "" || date == undefined) {
        return "";
      }
      var time = moment(date, "LT").format("LT");

      return time;
    }
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>