let card_data = {
  card: [],
  slide: []
};
let slide_data = {
  slide: []
};

fetch("/api/get_data", {
  method: "POST"
})
  .then(function(response) {
    if (response.status === 200 || response.status === 201) {
      // 성공을 알리는 HTTP 상태 코드면
      return response.json();
    } else if (response.status / 100 == 4) {
      // 400번대 에러
      console.error(response.statusText);
    } else if (response.status / 100 == 5) {
      // 500번대 에러
      console.error(response.statusText);
    }
  })
  .then(function(myJson) {
    if(myJson === undefined){
      return;
    }
    json_data = myJson;

    card_data.card = json_data.card_data.card;
    card_data.slide = json_data.card_data.slide;
    
    slide_data.slide = json_data.slide_data.slide;

    new main_script(card_data, slide_data);
  })
  .catch(err => console.error(err));
