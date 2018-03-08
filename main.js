var JSONurl = 'https://forbes400.herokuapp.com/api/forbes400/real-time';
$.getJSON(JSONurl, (data) => {
   $('#name').text(data[0]['name']);
   $('#title').text(data[0]['title']);
   //console.log(data[0]);
});