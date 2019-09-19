class card_container {
  constructor() {
    this.card_container = document.querySelector(".card-ui-upside");
    this.card_list = this.card_container.querySelectorAll(".card");

    this.bind_event();
  }
  bind_event() {
    this.bind_card_event();
    this.bind_indicator_event();
  }
  bind_card_event() {
    Array.from(this.card_list).reduce((pre, cur) => {
      cur.addEventListener("click", evt => {
        this.fucus_out_all_card();

        let current_card_content = evt.currentTarget.querySelector(
          ".card-content"
        );
        let current_slide_indicator = evt.currentTarget.querySelector(
          ".slide-indicator"
        );
        let current_first_indicator = current_slide_indicator.querySelector(
          ".indicator"
        );

        current_card_content.classList.add("focus");
        current_slide_indicator.classList.remove("hidden");

        if (
          evt.target.className !== "indicator" &&
          evt.target.className !== "indicator selected"
        ) {
          current_first_indicator.click();
        }
      });
    }, []);
  }
  bind_indicator_event() {
    this.card_container.addEventListener("click", evt => {
      let target_type = evt.target.classList[0];

      if (target_type === "indicator") {
        
        // 이 부분에 슬라이드 이동 부분을 추가하면 된다.
        // slide_index = evt.target.dataset.page (integer)
        // console.log(evt.target.dataset.page);

        this.unselect_all_indicator();
        evt.target.classList.add("selected");
        return;
      }
    });
  }
  fucus_out_all_card() {
    let card_content_list = this.card_container.querySelectorAll(
      ".card-content"
    );

    Array.from(card_content_list).reduce((pre, cur) => {
      cur.classList.remove("focus");
      let slide_indicator = cur.parentNode.querySelector(".slide-indicator");
      slide_indicator.classList.add("hidden");
    }, []);
  }
  unselect_all_indicator() {
    let indicator_list = this.card_container.querySelectorAll(".indicator");

    Array.from(indicator_list).reduce((pre, cur) => {
      cur.classList.remove("selected");
    }, []);
  }
}
