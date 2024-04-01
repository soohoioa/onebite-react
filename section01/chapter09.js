// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
    // console.log("num은 10 이상입니다.");
    // console.log("조건이 참 입니다!");
} else if (num >= 5) {
    // console.log("num은 5 이상입니다.");
} else {
    // console.log("조건이 거짓입니다!");
} // 조건이 거짓일때 실행할 코드 작성
/**
() : 조건식
{} : 조건식을 만족하면 수행할 코드 작성
반드시 if로 시작해서 else 로 끝나야 한다. 또는 if로 시작해서 else 없이 끝나야 한다.
 */

// 2. Switch 문
// -> if문과 기능 자체는 동일하다
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.


let animal = "cat";

switch (animal) {// 비교하고 싶은 변수의 값을 넣어준다 
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case "snake": {
        console.log("뱀");
        break;
    }
    case "tiger": {
        console.log("호랑이");
        break;
    }
    default: {
        console.log("그런 동물은 전 몰라요.");
    }
}
/**
 * 변수의 값을 기준으로 각각의 다른 코드를 실행시키고 싶다면 Switch 문을 이용한다.
 * 복잡한 여러개의 조건을 이용하고 싶다면 if 문을 이용한다.
 */