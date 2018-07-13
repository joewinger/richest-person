var JSONurl = 'https://forbes400.herokuapp.com/api/forbes400/real-time?limit=1';
$.getJSON(JSONurl, (data) => {
   $('#name').text(data[0]['name']);
   $('#title').text(data[0]['title']);
   $('#info').text("Current Net Worth: $" + (Math.round(data[0]['realTimeWorth'] / 100) / 10) + " B");
   console.log(data[0]);
});