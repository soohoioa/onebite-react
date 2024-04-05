function task() {
  setTimeout(() => {
    console.log("안녕하세요!");
  }, 3000);
};
task();

function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
};
add(1, 2);

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
};
add(1, 2, (value) => {
  console.log(value);
});

//비동기작업의 결과값을 함수 외부에서 이용하고 싶다면 콜백함수를 사용해서 비동기함수 안에 콜백함수를 호출하도록 설정한다.


// 예제
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
};

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
};

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
}); // 비동기 결과의 작업을 또 다른 비동기 작업의 인수로 전달 가능 
