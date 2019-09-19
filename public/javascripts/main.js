class main_script {
  constructor(params) {
    new fill_card(slide_data_card);
    new fill_slide(slide_data_second);

    let my_card_container = new card_container();
    let upside_slider = new compact_slider("#compact-slider_card");

    new card_ui(my_card_container, upside_slider);

    let downside_slider = new compact_slider("#compact-slider1");
    downside_slider.auto();
  }
}