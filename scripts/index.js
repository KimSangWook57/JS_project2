// 각 이미지별로 표시하는 함수.
/*
const showFlower = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", "./images/cityFlower.png");
    imgViewText.innerHTML = "동백꽃";
    txtWrap.style.display = "block";

}

const showBird = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");
    
    imgView1.setAttribute("src", "./images/cityBird.png");
    imgViewText.innerHTML = "갈매기";
    txtWrap.style.display = "block";
}

const showFish = () => {
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", "./images/cityFish.png");
    imgViewText.innerHTML = "고등어";
    txtWrap.style.display = "block";
}
*/

// 하나의 함수로 통합해서 처리.

const show = (idx) => {
    const pngName = ['cityFlower', 'cityBird', 'cityFish'];
    const txt = ['동백꽃', '갈매기', '고등어'];
    
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", `./images/${pngName[idx]}.png`);
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display = "block";
}



// DOM이 로드되면...
document.addEventListener("DOMContentLoaded", () => {
    /*
    // 쿼리는 ID임을 알려주기 위해 #을 붙여야 한다.
    const icon1 = document.querySelector("#imgIcon1");
    // 겟 아이디는 #을 붙일 필요가 없다.
    const icon2 = document.getElementById("imgIcon2");
    const icon3 = document.querySelector("#imgIcon3");

    icon1.addEventListener("mouseover", () => show(0));
    icon2.addEventListener("mouseover", () => show(1));
    icon3.addEventListener("mouseover", () => show(2));
    */

    const imgIconItems = document.querySelectorAll(".imgIconItem");
    console.log(imgIconItems);

    for (let [k, item] of imgIconItems.entries()) {
        console.log(item, k);
        item.addEventListener("mouseover", () => show(k));
    }

})