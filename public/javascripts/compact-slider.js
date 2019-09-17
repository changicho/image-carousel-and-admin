class compact_slider {
  constructor() {
    this.div_slider = document.querySelector(".compact-slider");
    this.slide_container = this.div_slider.querySelector("ul");

    this.slide_width = this.div_slider.clientWidth;
    this.slide_height = this.div_slider.clientHeight;

    this.slide_list = this.slide_container.querySelectorAll("li");

    this.start_point = 0;
    this.end_point =
      this.start_point + this.slide_list.length * this.slide_width;

    this.axis_list = [];

    this.fill_axis_list(this.slide_list.length);
    this.fill_event();
  }
  fill_axis_list(size) {
    for (let i = 0; i < size; i++) {
      this.axis_list.push(this.start_point);
    }
  }
  fill_event() {
    this.fill_button_event();
    this.fill_interval_event();
  }
  fill_button_event() {
    let button_prev = this.div_slider.querySelector("#button_prev");
    let button_next = this.div_slider.querySelector("#button_next");

    button_prev.addEventListener("click", () => {
      this.move_prev();
    });
    button_next.addEventListener("click", () => {
      this.move_next();
    });
  }

  fill_interval_event() {
    this.interval = setInterval(() => {
      this.move_next();
    }, 4000);
  }

  move_prev() {
    let slide_width = this.slide_width;
    Array.from(this.slide_list).reduce((pre, cur, index) => {
      this.axis_list[index] += slide_width;
      if (this.axis_list[index] + index * slide_width >= this.end_point) {
        this.axis_list[index] = -index * slide_width;
        cur.style.zIndex = -100;
      } else {
        cur.style.zIndex = 1;
      }
      cur.style.transform = `translate(${this.axis_list[index]}px, 0)`;
    }, []);
    clearInterval(this.interval);
    this.fill_interval_event();
  }
  move_next() {
    let slide_width = this.slide_width;
    Array.from(this.slide_list).reduce((pre, cur, index) => {
      this.axis_list[index] -= slide_width;
      if (this.axis_list[index] + index * slide_width < this.start_point) {
        this.axis_list[index] = this.end_point - (index + 1) * slide_width;
        cur.style.zIndex = -100;
      } else {
        cur.style.zIndex = 1;
      }
      cur.style.transform = `translate(${this.axis_list[index]}px, 0)`;
    }, []);
    clearInterval(this.interval);
    this.fill_interval_event();
  }
}
