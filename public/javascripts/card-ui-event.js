let my_card_container = new card_container();
let my_compact_slider = new compact_slider();

let div_compact_slider = document.querySelector(".card-ui");

div_compact_slider.addEventListener("click", evt => {
  let target_type = evt.target.classList[0];

  if (target_type === "indicator") {
    indicator_event(evt);
    return;
  }

  if (target_type === "button_icon") {
    slide_button_event(evt);
    return;
  }
});

function unselect_all_indicator() {
  let indicator_list = div_compact_slider.querySelectorAll(".indicator");

  Array.from(indicator_list).reduce((pre, cur) => {
    cur.classList.remove("selected");
  }, []);
}

function select_indicator_by_index(index) {
  let indicator_list = div_compact_slider.querySelectorAll(".indicator");

  Array.from(indicator_list).reduce((pre, cur) => {
    if (cur.dataset.page === index + "") {
      let slide_indicator = cur.parentNode;
      let card_content = slide_indicator.parentNode.querySelector(
        ".card-content"
      );

      my_card_container.fucus_out_all_card();

      card_content.classList.add("focus");
      slide_indicator.classList.remove("hidden");
      cur.classList.add("selected");
    }
  }, []);
}

function indicator_event(event) {
  my_compact_slider.move_to(event.target.dataset.page);

  unselect_all_indicator();
  event.target.classList.add("selected");
}

function slide_button_event(event) {
  let current_index = my_compact_slider.current_index;

  unselect_all_indicator();
  select_indicator_by_index(current_index);
}
