// const slide_size = 17
// 총 17개의 슬라이드를 만들어야 한다.

let ul = document.querySelector(".compact-slider ul");
let indicator_box = document.querySelector(".indicator-box");

let slide_image_style = [
  {
    color: "blue"
  },
  {
    color: "gold"
  },
  {
    color: "orange"
  },
  {
    color: "gray"
  },
  {
    color: "purple"
  },
  {
    color: "skyblue"
  },
  {
    color: "red"
  },
  {
    color: "rosybrown"
  },
  {
    color: "aqua"
  },
  {
    color: "khaki"
  },
  {
    color: "beige"
  },
  {
    color: "royalblue"
  },
  {
    color: "teal"
  },
  {
    color: "yellowgreen"
  },
  {
    color: "chocolate"
  },
  {
    color: "coral"
  },
  {
    color: "crimson"
  }
];

function make_template(data) {
  let template = `<li class="slide"><div style="background-color:${
    data.color
  };">${make_template_inner(data)}</div></li>`;
  return template;
}

slide_image_style.reduce((pre, cur, index) => {
  ul.innerHTML += make_template(cur);
}, 0);

function make_template_inner(data) {
  let template = `<div class="content">
  <h1>당신의 희생은</h1>
  <h1>가치있습니다.</h1>
  <p>
    내 삶의 목적이 잘먹고 잘 사는 사람은 보통 사람이라는 거에요. 왜냐. 내가
    잘 먹고 잘살려면 남의 것 뜯어 먹고 남 괴롭히고, 이런 거밖에 없으니까요.
    그런데 영웅이란, 다른 사람들을 위해 사는 사람이라는 거죠. 그리고
    (보통사람들)보다 숭고한 목적과, 숭고한 삶을 추구한다는 거에요.
  </p>
  <a href="https://www.youtube.com/watch?v=DnkN5Oh0mPA"
    >영상을 보고 함께해요 ></a
  >
</div>`;
  return template;
}
