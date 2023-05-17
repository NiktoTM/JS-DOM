
function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

colours = ["green", "red", "purple", "blue", "black", "yellow"];

function change_bg(){
    document.body.style.backgroundColor = `${random_item(colours)}`;
}

function vibes(){
    document.getElementById("vibes").innerHTML = "Only good vibes here!";
}


images = ["https://cdn.britannica.com/25/160325-050-EB1C8FB7/image-instruments-Earth-satellite-NASA-Suomi-National-2012.jpg", "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg", "https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg", "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg"];


function change_img(){
    document.getElementById("mang_img").src = random_item(images);
}

function show_picture(){
    document.getElementById("mang_img").style.display = "block";
}

function hide_img(){
    document.getElementById("mang_img").style.display = "none";
}

function time(){
    document.getElementById("time").innerHTML = Date();
}

function header_set(){
    const elements = document.getElementsByClassName("top-div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "center";
      elements[i].style.alignItems = "center";
      elements[i].style.textAlign = "center";
      elements[i].style.background = "darkgray";
      elements[i].style.margin = "50px";
    }
    document.getElementById("vibes").innerHTML = "Only good vibes here!";
    document.getElementById("mang_img").src = random_item(images);
    document.getElementById("time").innerHTML = Date();
    document.getElementById("manage_img").style.display = "block";
    document.getElementById("manage_img").style.border = "10px solid cyan";
}

function header_remove(){
    const elements = document.getElementsByClassName("top-div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "left";
      elements[i].style.alignItems = "flex-start";
      elements[i].style.textAlign = "left";
      elements[i].style.background = "none";
      elements[i].style.margin = "0px";
    }
    document.getElementById("vibes").innerHTML = "";
    document.getElementById("mang_img").src = random_item(images);
    document.getElementById("time").innerHTML = "";
    document.getElementById("mang_img").style.display = "none";
    document.getElementById("mang_img").style.border = "none";
}