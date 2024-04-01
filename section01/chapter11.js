// 함수선언
function greeting () {
    console.log("안녕하세요");
} // 함수 선언 : 함수를 새롭게 만드는 행위

console.log("호출 전");
greeting(); // 함수선언 후 함수를 호출한다.
// 함수호출시 ()도 같이 사용해주어야 한다.
console.log("호출 후");


// 직사각형의 넓이를 구하는 함수
function getArea (width, height) { // 매개변수
    let area = width * height;
    //console.log(area);
    return area; // 반환값
    // 함수가 return 문을 만나면 값을 반환 후 함수를 종료시킨다. 
    console.log("hello!"); // 그래서 return 문 밑에 콘솔을 작성해도 수행되지 않는다.
}

let area1 = getArea(10, 20); // 인수
console.log(area1);

getArea(20, 30);

// JS는 함수 안에 또 다른 함수 호출이 가능하다.
function getArea1 (width, height) {
    function another() { // 중첩함수
        console.log("another");
    }
    another();
    let area = width * height;

    return area;
}

// 호이스팅 -> 끌어올리다 라는 뜻
// 선언문을 호출문보다 아래에 두어도 내부적으로 알아서 끌어올려 실행한다.
// 장점 : 무조건 위에 있지 않아도 되기 때문에 유연하게 코드를 만들 수 있다.