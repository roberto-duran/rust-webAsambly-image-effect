use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::{ decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn img_effect(encode_file: &str, effect: &str) -> String {
    log(&"Grayscale called".into());
    let base64_to_vector = decode(encode_file).unwrap();
    log(&"Image decoded".into());

    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded".into());


    img = match effect {
        "blur" => img.blur(1.5),
        "flipv" => img.flipv(),
        "fliph" =>  img.rotate90(),
        _ => img.grayscale()
    };

    log(&"Grayscale effect applied".into());
    log(&effect.into());

    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image writen".into());

    let encoded_img = encode(&buffer);
    let data_url = format!(
        "data:image/png;base64,{}",
        encoded_img
    );

    data_url
}
