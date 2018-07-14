var JSONurl = 'https://forbes400.herokuapp.com/api/forbes400/real-time?limit=1';
$.getJSON(JSONurl, (data) => {
   var name = data[0]['name'];
   var title = data[0]['title'];
   var worth = "$" + (Math.round(data[0]['realTimeWorth'] / 100) / 10) + " B";
   $('#name').text(name);
   $('#title').text(title);
   $('#info').text("Current Net Worth: " + worth);
   console.log(data[0]);
});