/* 
  객체를 쉽게 만드는 템플릿
  고전적 방법 - 생성자 함수라고 함
  클래스 - ES6
*/

class Fruit {
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 내 함수 선언시 function 예약어 사용불가
  display = () =>{
    console.log(`${this.name} : ${this.emoji}`);
  }
}

const kiwi = new Fruit("kiwi", "icon");
const tomato = new Fruit("tomato", "img");

console.log(kiwi);
console.log(kiwi['name']);
console.log(kiwi.name);
tomato.display();
kiwi.display();