var JSONurl = 'https://forbes400.herokuapp.com/api/forbes400/real-time?limit=1';

var app = new Vue({
   el: '#app',
   data: {
      name: "",
      title: "",
      worth: ""
   }
});

$.getJSON(JSONurl, (data) => {
   var name = data[0]['name'];
   var title = data[0]['title'];
   var worth = "$" + (Math.round(data[0]['realTimeWorth'] / 100) / 10) + " B";

   Vue.set(app, 'name', name);
   Vue.set(app, 'title', title);
   Vue.set(app, 'worth', worth);

   console.log(data[0]);
});