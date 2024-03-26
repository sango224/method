/* 1.プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。

プロパティ:
オブジェクトやクラスの特性やデータを表すものであり、名前と値の組み合わせ。
プロパティは単純に値を持っているだけであり、関数ではない。
オブジェクトやクラスの状態を表すために使用される。

メソッド:
オブジェクトやクラスに紐付いている関数であり、特定の動作や処理を行うもの。
メソッドはオブジェクトやクラスの振る舞いを定義し、操作するために使用される。
オブジェクトやクラスの状態を変更したり、特定の計算や処理を行ったりする。*/

const teacher = {
  name: "山田",
  subject: "数学",
  profile: function () {
    console.log("担当教科は数学です");
  },
};
teacher.profile();

const member = {
  name: "高橋",
  position: "キーパー",
  profile: function () {
    console.log("ポジションはキーパーです");
  },
};
member.profile();

const person = {
  firstName: "Sango",
  lastName: "Takahashi",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.getFullName());

function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。";
  return result;
}
const fruitInfo = fruit("りんご", 100);
console.log(fruitInfo);

function addTax(price, func) {
  const taxPrice = Math.round(price * 1.1);
  func(taxPrice);
}
function displayTomatoPrice(price) {
  console.log(`トマトの税込み価格は ${price} 円です。`);
}
function displayOnionPrice(price) {
  console.log(`玉ねぎの税込み価格は ${price} 円です。`);
}
/*トマトの税込み価格を表示*/
addTax(100, displayTomatoPrice);
/*玉ねぎの税込み価格を表示*/
addTax(80, displayOnionPrice);
