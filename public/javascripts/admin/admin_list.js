let _json_data = {
	upcard_card: [],
	upcard_slide: [],
	down_slide: [],
};

function fill_all(data) {
	let json_data = data;

	let _user_container;
	let _upcard_card_container;
	let _upcard_slide_container;
	let _down_slide_container;

	let _user_tbody;
	let _upcard_card_tbody;
	let _upcard_slide_tbody;
	let _down_slide_tbody;

	_user_container = document.querySelector("#user_container");
	_upcard_card_container = document.querySelector("#upcard_card_container");
	_upcard_slide_container = document.querySelector("#upcard_slide_container");
	_down_slide_container = document.querySelector("#down_slide_container");

	_user_tbody = _user_container.querySelector("tbody");
	_upcard_card_tbody = _upcard_card_container.querySelector("tbody");
	_upcard_slide_tbody = _upcard_slide_container.querySelector("tbody");
	_down_slide_tbody = _down_slide_container.querySelector("tbody");

	json_data.user.reduce((pre, cur) => {
		_user_tbody.innerHTML += template_user(cur);
	}, []);

	json_data.upcard_card.reduce((pre, cur) => {
		_upcard_card_tbody.innerHTML += template_upcard_card(cur);
	}, []);

	json_data.upcard_slide.reduce((pre, cur) => {
		_upcard_slide_tbody.innerHTML += template_upcard_slide(cur);
	}, []);

	json_data.down_slide.reduce((pre, cur) => {
		_down_slide_tbody.innerHTML += template_down_slide(cur);
	}, []);
}

/**
 *
 */
fetch("/api/get_admin_list", {
	method: "POST",
})
	.then(function(response) {
		if (response.status === 200 || response.status === 201) {
			// 성공을 알리는 HTTP 상태 코드면
			return response.json();
		}

		if (response.status / 100 == 4) {
			// 400번대 에러
			console.error(response.statusText);
		}

		if (response.status / 100 == 5) {
			// 500번대 에러
			console.error(response.statusText);
		}
	})
	.then(function(json_data) {
		// _json_data = json_data;
		fill_all(json_data);
	})
	.catch(err => console.error(err));

/**
 *
 * @param {*} data
 */
function template_user(data) {
	let template = `<tr>
  <td>${data.id}</td>
  <td>${data.admin}</td>
</tr>`;
	return template;
}

/**
 *
 * @param {*} data
 */
function template_upcard_card(data) {
	let template = `<tr>
  <td>${data.card_index}</td>
  <td>${data.theme}</td>
  <td>${data.title}</td>
</tr>`;
	return template;
}

/**
 *
 * @param {*} data
 */
function template_upcard_slide(data) {
	let template = `<tr>
  <td>${data.card_index}</td>
  <td>${data.theme}</td>
  <td>${data.keyword}</td>
  <td>${data.title}</td>
  <td>${data.image_url}</td>
</tr>`;
	return template;
}

/**
 *
 * @param {*} data
 */
function template_down_slide(data) {
	let template = `<tr>
  <td>${data.color}</td>
  <td>${data.image_url}</td>
  <td>${data.link_url}</td>
</tr>`;
	return template;
}
