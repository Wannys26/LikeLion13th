// 플러스 버튼 ID로 선택
const plusButton = document.getElementById("plusButton");
// 마이너스 버튼 ID로 선택
const minusButton = document.getElementById("minusButton");
// 광진구 집 숙박비 ID로 선택
const card1Value = document.getElementById("card1Value");

// HTML에 저장된 광진구 집 숙박비 값 문자열 -> 정수로 변경
let value = Number(card1Value.textContent);

// HTML에 저장된 광진구 집 숙박비 값 toLocaleString 처리
function makeLocaleString(){
    card1Value.textContent = value.toLocaleString();
}

makeLocaleString();

// 플러스 버튼 눌렀을 때 광진구 집 숙박비 값 +10,000원
plusButton.addEventListener("click", ()=>{
    value+=10000;
    card1Value.textContent = value;
    makeLocaleString();
})

// 마이너스 버튼 눌렀을 때 광진구 집 숙박비 값 -10,000원
minusButton.addEventListener("click", ()=>{
    value -=10000;
    card1Value.textContent = value;
    makeLocaleString();s
})

