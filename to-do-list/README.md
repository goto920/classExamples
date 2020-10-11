# create-react-app のサンプルからの変更

不要なファイルを削除
-- 単に消すだけでなく、git rm ファイル名

## public
  index.html -- title 変更 (My App)
     logo192.png へのlink を無効 (HTMLコメント)
  manifest.json -- favicon.ico以外を削除
  favicon.ico を自分で作ったものに入れ替え
変更なし robots.txt -- サーチ避け

## src
変更なしindex.js -- serviceWorker.register()
変更なし index.css, serviceWorker.js, setupTests.js (不要かも)

## package.json
"homepage": "予定URL", を追加

## App.js の内容

参考URL: 

A) https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning 
-- function App(props) のスタイル

B) https://qiita.com/rioc/items/8723c236e10d989e827d

プログラムのスタイルはB) の方が近い。
A) は部分的に参考にする。

===============================================
Step  1. App.jsとToDoItemの基本定義

ファイル1 App.js -- 前回と同じスタイルで

import ... 
import ToDoItem from "./ToDoItem.js";

class App extends React.Component {
  constructor(props){
    super();
  }
  
  render() {

    return (
      <div className="App">
      表示内容
      <hr />
      <ToDoItem title=... />
      <hr />
      <ToDoItem title=... />
      <hr />
      </div>
    );
    // titleなどのproperty (props) の値を仮に直接書き込む
    // <ToDo ... は次で消す
  }
}

ファイル2 ToDoItem.js -- 一つのToDo内容 (表示も込み?)

// import "./ToDoItem.css"; // cssは後で必要なら

class ToDoItem extends React.Component {
  // constructorを省略するとdefault constructorが有効になり
  // 外で与えられたpropsをthis.props.title 等で使う

  render() {
    const {     }; = this.props; 
      // いちいちthis.props.title と書かなくて済むように
      // 値を変更しないので、const

    return(
     <div>  
       propsの各値を{title} などで表示      
     </div>
    )
  }

}

=========================================
Step 2. ToDoItemの追加UI

constructor()内
  this.state = {
    toDoList: []; // ToDoの配列 (初期値は空)
    inputなどのstate定義
  }

render, returnのUI画面

<form onSubmit={this.handleAddToDo} .. 
<input type="text" ... タイトル 
<textarea /> 内容
<input type="radio" ... low, normal, high の選択 (やや難)
締切
<select ... 年、月、日を選ぶ
  <option> を31行書いてもよいが、配列を用意 (constructor()内)
以上すべて同じメソッド(関数) handleAddToDo()で処理
<input type="submit" ... 確定

 event.target.nameで振り分け

入力の処理関数 handleAddToDo(event){
   const {name,value} = event.target;
   if (name === "title") this.setState({title: value});
   .. など

   if (name === "submission") {
    // 内容はあとで
   }

}


=========================================
Step 3. 
  

以上
