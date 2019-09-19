class fill_slide {
  constructor(data) {
    let second_ul = document.querySelector("#compact-slider1 ul");

    function make_template(style) {
      let template = `<li class="slide"><div style = "background-image:${style.url}; background-color:${style.color}" OnClick="location.href ='${style.link}'"></div></li>`;
      return template;
    }

    data.reduce((pre, cur, index) => {
      second_ul.innerHTML += make_template(cur);
    }, 0);
  }
}

new fill_slide(slide_data_second);
