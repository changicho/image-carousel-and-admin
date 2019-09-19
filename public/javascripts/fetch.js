let json_data;
let slide_data_card;
let slide_data_second;

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

    slide_data_card = json_data.slide;
    slide_data_second = json_data.card;

    new main_script();
  })
  .catch(err => console.error(err));
