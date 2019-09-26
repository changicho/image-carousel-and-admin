class fill_slide {
  constructor(slide_data) {
    let second_ul = document.querySelector("#compact-slider1 ul");

    slide_data.slide.reduce((pre, cur, index) => {
      second_ul.innerHTML += this._make_template(cur);
    }, 0);
  }

  _make_template(style) {
    let template = `<li class="slide"><div style = "background-image:${style.image_url}; background-color:${style.color}" OnClick="location.href ='${style.link_url}'"></div></li>`;
    return template;
  }

}
