class MyClass {
  name; // public : 클래스 내외부 어디서든 접근 가능
  #age; //private : 클래스 내부에서만 접근 가능 
  _addr; // protected : 나={}와 그리고 상속관계에서 자식 클래스들은 접근 가능, public과 실제로는 동일 기능(등록 안 됨)
  static gender = 'M';

  // 생성자 메소드
  // 'new' 키워드로 객체를 인스턴트화 할 때 딱 한 번 실행되는 메소드
  constructor(name, age, addr) {
    this.name = name;
    this.#age = age;
    this._addr = addr;
  } // 디폴트가 생략 _ 위의 constructor는 초기화 기능.


  // getter / setter
  // 메소드지만 사용할 때 프로퍼티 사용 하듯이 동작한다.
  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  // 인스턴스 메소드(=메소드)
  add(a, b) {
    return a + b;
  }
}

const myClass = new MyClass('홍길동', 20, '조선');
const myClass2 = new MyClass('갑순이', 10, '한국');
// console.log(myClass.name);
// console.log(myClass2._addr);
console.log(myClass.age);
myClass.age= 40;
console.log(myClass.age);
console.log(myClass2._addr);