const JSONurl = 'https://forbes400.herokuapp.com/api/forbes400/real-time?limit=1';


Vue.createApp({
   data() {
      return {
         name: localStorage['name'] || "",
         source: localStorage['source'] || "",
         worth: localStorage['worth'] || ""
      }
   },
   async created() {
      const response = await fetch(JSONurl);
      let data = await response.json();
      data = data[0];
      this.name = data['personName'];
      this.source = data['source'];
      this.worth = "$" + (Math.round(data['finalWorth'] / 100) / 10) + "B";

      localStorage['name'] = this.name;
      localStorage['source'] = this.source;
      localStorage['worth'] = this.worth;
   }
}).mount('#app');