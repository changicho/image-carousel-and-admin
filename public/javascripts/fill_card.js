let ul = document.querySelector(".compact-slider ul");
let indicator_box = document.querySelector(".indicator-box");

let slide_image_style = [
  {
    color: "blue",
    theme: "ship-card"
  },
  {
    color: "gold",
    theme: "ship-card"
  },
  {
    color: "orange",
    theme: "ship-card"
  },
  {
    color: "gray",
    theme: "ship-card"
  },
  {
    color: "purple",
    theme: "system-card"
  },
  {
    color: "skyblue",
    theme: "system-card"
  },
  {
    color: "red",
    theme: "system-card"
  },
  {
    color: "rosybrown",
    theme: "system-card"
  },
  {
    color: "aqua",
    theme: "system-card"
  },
  {
    color: "khaki",
    theme: "shop-card"
  },
  {
    color: "beige",
    theme: "shop-card"
  },
  {
    color: "royalblue",
    theme: "shop-card"
  },
  {
    color: "teal",
    theme: "shop-card"
  },
  {
    color: "yellowgreen",
    theme: "read-card"
  },
  {
    color: "chocolate",
    theme: "read-card"
  },
  {
    color: "coral",
    theme: "more-card"
  },
  {
    color: "crimson",
    theme: "more-card"
  }
];

function make_template(data, index) {
  let template = `<li class="slide"><div class="content">${make_template_inner(data, index)}</div></li>`;
  return template;
}

slide_image_style.reduce((pre, cur, index) => {
  ul.innerHTML += make_template(cur, index);
}, 0);

function make_template_inner(data, index) {
  let template = `
  <div class="left-content">
  <div
    class="image"
    style="background-image : url('../images/card/slide_image/${index}.png'); "
  ></div>
</div>
<div class="right-content">
  <div class="subtitle ${data.theme}">잠이 보약입니다...</div>
  
  <h1>어제 잘 주무셨나요?</h1>
  <p>
    야근을 한다거나 게임, TV 시청 등의 이유로 늦게까지 깨어있으면, 수면을 취하는
    시간이 그만큼 짧아질 수밖에 없는데요. 하루에 7시간 미만의 충분한 수면을
    취하지 못하게 되면, 아침에 일어나는 것이 매우 힘겹게 느껴질 수 있습니다.
    또한, 수면이 부족하면 과식으로 이어지고, 면역 체계가 크게 떨어지며, 여러
    건강 상 문제가 발생할 수 있습니다.
  </p>
  <a href="https://www.youtube.com/watch?v=O6w4H8tFLQ4">
    영상을 보고 기운내요!
  </a>
</div>
`;
  return template;
}