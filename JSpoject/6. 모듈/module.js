//기본으로 내보내기
//default 키워드는 한 번만 사용 가능함
export default 123;
export const str = "hello";
export const fruits = ['사과', '딸기', '포도']
export const hap = (a, b) =>{
    return a+b;
}

export class Sonata {
  constructor(){
    this.wheelNum = 4;
    this.speed = 30;
  }

  speedUP = () =>{
    this.speed = this.speed + 1;
  }
  

}