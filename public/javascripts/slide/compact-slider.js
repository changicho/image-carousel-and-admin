/**
 *
 */
class compact_slider {
  constructor(query) {
    this.div_slider = document.querySelector(query);
    this.slide_container = this.div_slider.querySelector("ul");

    this.slide_width = this.div_slider.clientWidth;
    this.slide_height = this.div_slider.clientHeight;

    this.slide_list = this.slide_container.querySelectorAll("li");

    this.start_point = 0;
    this.end_point =
      this.start_point + this.slide_list.length * this.slide_width;

    this.axis_list = [];

    this.auto_slide = false;
    this.auto_slide_tile = 0;

    this.fill_axis_list(this.slide_list.length);
    this.fill_event();
    this.set_first_slide();
  }

  set_first_slide() {
    let current_index = parseInt(this.slide_list.length / 2);
    this.current_index = current_index;

    Array.from(this.slide_list).reduce((pre, cur) => {
      cur.style.left = `-${this.slide_width * this.current_index}px`;
    }, []);

    for (let i = 0; i < current_index; i++) {
      this.move_prev();
    }
  }

  fill_axis_list(size) {
    for (let i = 0; i < size; i++) {
      this.axis_list.push(this.start_point);
    }
  }
  fill_event() {
    this.fill_button_event();
    this.fill_interval_event();
    this.fill_transitionend_event();
  }
  fill_button_event() {
    this.animation_end = true;
    let button_prev = this.div_slider.querySelector("#prev");
    let button_next = this.div_slider.querySelector("#next");

    button_prev.addEventListener("click", () => {
      if (this.animation_end) {
        this.animation_end = false;
        this.move_prev();
      }
    });
    button_next.addEventListener("click", () => {
      if (this.animation_end) {
        this.animation_end = false;
        this.move_next();
      }
    });
  }

  fill_interval_event() {
    if (this.auto_slide) {
      this.interval = setInterval(() => {
        this.move_next();
      }, 3000);
    }
  }

  fill_transitionend_event() {
    this.div_slider.addEventListener("transitionend", evt => {
      evt.target.style.transition = "all 0.5s ease-in-out";
      evt.target.style.zIndex = "1";
      this.animation_end = true;
    });
  }
  move_prev() {
    let slide_width = this.slide_width;

    Array.from(this.slide_list).reduce((pre, cur, index) => {
      this.axis_list[index] += slide_width;

      if (this.axis_list[index] + index * slide_width >= this.end_point) {
        this.axis_list[index] = -index * slide_width;
        cur.style.zIndex = -100;
      }

      cur.style.transform = `translate(${this.axis_list[index]}px, 0)`;
    }, []);

    this.current_index =
      (this.current_index - 1 + this.slide_list.length) %
      this.slide_list.length;

    this.reset_interval();
  }
  move_next() {
    let slide_width = this.slide_width;

    Array.from(this.slide_list).reduce((pre, cur, index) => {
      this.axis_list[index] -= slide_width;

      if (this.axis_list[index] + index * slide_width < this.start_point) {
        this.axis_list[index] = this.end_point - (index + 1) * slide_width;
        cur.style.zIndex = -100;
      }

      cur.style.transform = `translate(${this.axis_list[index]}px, 0)`;
    }, []);

    this.current_index =
      (this.current_index + 1 + this.slide_list.length) %
      this.slide_list.length;

    this.reset_interval();
  }

  reset_interval() {
    clearInterval(this.interval);
    this.fill_interval_event();
  }

  move_to(destination_index) {
    let slide_size = this.slide_list.length;
    let current_index = this.current_index;

    let diff_next =
      (destination_index - current_index + slide_size) % slide_size;
    let diff_prev =
      (current_index - destination_index + slide_size) % slide_size;

    if (diff_next > diff_prev) {
      diff_next = 0;
    } else {
      diff_prev = 0;
    }

    for (let i = 0; i < diff_next; i++) {
      this.move_next();
    }
    for (let i = 0; i < diff_prev; i++) {
      this.move_prev();
    }
  }

  auto(miliseconds) {
    this.auto_slide = true;
    this.auto_slide_tile = miliseconds || 3000;
    this.reset_interval();
  }

  stop(){
    this.auto_slide = false;
    this.reset_interval();
  }
}

// export default compact_slider;