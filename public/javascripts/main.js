
let slides = ["one", "two", "three", "four", "five"];
let slides_color = ["red", "blue", "green", "yellow", "purple"];
let ul = document.querySelector(".compact-slider");

slides.reduce((pre, cur, index) => {
  ul.innerHTML += `<li class="slide"><div style = "background:${slides_color[index]}">${cur}</div></li>`;
}, 0);

let li_dom = document.querySelectorAll("li");

const slide_width = li_dom[0].clientWidth;
let start_point = 0;
let end_point = start_point + slides.length * slide_width;
let axis_list = [];

for (let i = 0; i < li_dom.length; i++) {
  axis_list.push(start_point);
}

function movePrev() {
  Array.from(li_dom).reduce((pre, cur, index) => {
    axis_list[index] += slide_width;
    if (axis_list[index] + index * slide_width >= end_point) {
      axis_list[index] = -index * slide_width;
      cur.style.zIndex = -100;
    } else {
      cur.style.zIndex = 1;
    }
    cur.style.transform = `translate(${axis_list[index]}px, 0)`;
  }, []);
}

function moveNext() {
  Array.from(li_dom).reduce((pre, cur, index) => {
    axis_list[index] -= slide_width;
    if (axis_list[index] + index * slide_width < start_point) {
      axis_list[index] = end_point - (index + 1) * slide_width;
      cur.style.zIndex = -100;
    } else {
      cur.style.zIndex = 1;
    }
    cur.style.transform = `translate(${axis_list[index]}px, 0)`;
  }, []);
}
