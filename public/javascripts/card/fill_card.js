class fill_card {
  constructor(data) {
    let ul = document.querySelector(".compact-slider ul");

    function make_template(data, index) {
      let template = `<li class="slide"><div class="content">${make_template_inner(
        data,
        index
      )}</div></li>`;
      return template;
    }

    data.reduce((pre, cur, index) => {
      ul.innerHTML += make_template(cur, index);
    }, 0);

    function make_template_inner(data, index) {
      let template = `
<div class="left-content">
  <div
    class="image"
    style="background-image : url(${data.image_url}); "
  ></div>
</div>
<div class="right-content">
  <div class="subtitle ${data.theme}">${data.keyword}</div>
  <h1>${data.title}</h1>
  <p>${data.content}</p>
  <a href="${data.link}">${data.link_text}</a>
</div>
`;
      return template;
    }
  }
}

// export default fill_card;