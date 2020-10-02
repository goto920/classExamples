import React from 'react'; // reactの機能を取り込む (使う)
import './App.css'; // 文のおわりのセミコロンはなくてもよい

class App extends React.Component { // classを定義 (文字コードはUTF-8)

  constructor(props){
    super(); // おまじない的に必要 super(props)は古い書き方
    this.state = {tempC: 0, tempF: 32}; // 状態変数定義と初期値
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    if (event.target.name === 'tempFset'){
      console.log ('tempFSet');
      this.setState({
        tempF: event.target.value,
        tempC: (event.target.value - 32)*5/9,
      });
    }

    if (event.target.name === 'tempCset'){
      console.log ('tempCSet');
      this.setState({
        tempC: event.target.value,
        tempF: event.target.value*9/5 + 32
      });
    }
  }

  render () { // 描画処理

    const cMax = 300, cMin = -200;

    // ここから描画内容
    return (
      <div className="App">
      Ex1: US単位とメトリックの変換<hr /> {/* HTMLのbr、hrは普通に使える */}
      <input type="number" name="tempFset" 
      value={this.state.tempF}
      onInput={this.handleChange} /> F<br />

      <input type="number" name="tempCset" 
      value={this.state.tempC}
      onInput={this.handleChange} /> C<br />

      <span>
      <center>
      {cMin}(C)&nbsp;
       <input type="range" name="tempCset"
       min={cMin} max={cMax} 
       value={this.state.tempC}
       onChange={this.handleChange} /> {cMax}(C)
      </center>
      </span>

      <hr />
      </div>
      );
   }

} // class Appの終わり (セミコロンなし)

export default App; // Appを外に見せる(定形処理)
