class Mammal {
  _name;
  _residence;

  constructor(name, residence) {
    this._name = name;
    this._residence = residence;
  }

  breath() {
    console.log(`${this._name}가 폐호흡합니다.`)
  }
}


class Whale extends Mammal {
  constructor(name, residence) {
    super(name, residence);
  }
// 오버라이딩(부모상속 마음에 안 들시)
  breath() {
    console.log(`눈누난나`);
  }

  swimming() {
    console.log(`${this._name}가 헤험칩니다.`)
  }
}

class FlyingSquirrel extends Mammal {
  constructor(name, residence) {
    super(name, residence);
  }
  flying() {
    console.log(`${this._name}가 날아갑니다.`)
  }
}

const whale = new Whale('고래', '바다');
whale.breath();

