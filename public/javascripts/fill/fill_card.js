class fill_card {
  constructor(card_data) {
    let card_container = document.querySelector(".card-ui-upside");
    let slider_ul = document.querySelector(".compact-slider ul");

    card_data.card.reduce((pre, cur, index) => {
      card_container.innerHTML += this._make_template_card(cur);
    }, []);

    card_data.slide.reduce((pre, cur, index) => {
      slider_ul.innerHTML += this._make_template_slide(cur, index);

      let target = card_container.querySelector(`.${cur.theme}`);
      let slide_indicator = target.parentNode.querySelector(".slide-indicator");
      slide_indicator.innerHTML += this._make_template_indicator(index);
    }, []);

    // add focus, seleted class
    let first_card = card_container.querySelector('.card');

    first_card.querySelector('.card-content').classList.add('focus');
    first_card.querySelector('.slide-indicator').classList.remove('hidden');
    first_card.querySelector('.indicator').classList.add('selected');
    
    // end of constructor
  }

  _make_template_card(data, index) {
    let template = `
<div class="card">
  <div class="card-content ${data.theme}">
    <div class="card-title"><p>${data.title}</p></div>
  </div>
  <div class="slide-indicator hidden">
  </div>
</div>
`;
    return template;
  }

  _make_template_indicator(index) {
    let template = `
<div class="indicator" data-page="${index}"></div>
`;
    return template;
  }

  _make_template_slide(data, index) {
    let template = `
<li class="slide">
<div class="content">
  <div class="left-content">
    <div class="image" style="background-image : url(${data.image_url}); "></div>
  </div>
  <div class="right-content">
    <div class="subtitle ${data.theme}">${data.keyword}</div>
    <h1>${data.title}</h1>
    <p>${data.content}</p>
    <a href="${data.link}">${data.link_text}</a>
  </div>
</div>
</li>
`;
    return template;
  }
}
