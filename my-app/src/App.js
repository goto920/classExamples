import React from 'react'; // reactの機能を取り込む (使う)
import './App.css'; // 文のおわりのセミコロンはなくてもよい
// このディレクトリ (フォルダ) にあるApp.css を読み込む
// cssにはAppとsliderの表示に関する指示がある

class App extends React.Component { // classを定義 (文字コードはUTF-8)

  render () { // 描画処理
    // 描画時の再計算処理など
    // divタグの中にHTMLを拡張した記法 (JSX)、
    // HTMLフォームの拡張とそれ以外の独自コンポーネント
    // returnの中ではHTMLのコメントは使えないが
    // {/* から */} でコメントが入れられる
    // classNameには、cssにある定義を適用
    const cMax = 300, cMin = -200;

    // ここから描画内容
    return (
      <div className="App">
      Ex1: US単位とメトリックの変換<hr /> {/* HTMLのbr、hrは普通に使える */}
      <input type="number" /> F<br />
      <input type="number" /> C<br />
      <span>
      <center>
      {cMin}(C)&nbsp;
       <input type="range" min={cMin} max={cMax} /> {cMax}(C)
      </center>
      </span>
      <hr />
      </div>
      );

   }


} // class Appの終わり (セミコロンなし)

export default App; // Appを外に見せる(定形処理)