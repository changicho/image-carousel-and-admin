let json_data;
let slide_data_card;
let slide_data_second;

fetch("/api/get_data", {
  method: "POST"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    json_data = myJson;

    slide_data_card = json_data.slide;
    slide_data_second = json_data.card;
  });
