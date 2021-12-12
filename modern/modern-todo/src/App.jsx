import React, {useState, useEffect} from 'react';
import ColorfulMesssage from './components/ColorfulMessage'
// React 17移行ではトランスパイラによって自動追加されるためimport React from 'react'が不要に;
// .js、.jsxが指定可能
// jsx記法、ひとつの親タグにしなくてはならない
// <>または<React.Fragment>
// イベントやオブジェクト名はキャメルケース(ラクダ記法) font-size⇒fontSize
// {}はJavaScriptとして処理する。、階層１つ目はjsのオブジェクト
const App = () => {
  // ステート、左辺が値、右辺がセッター
  const [num, setNum] = useState(-1);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // 関数
  const onClickCountUp = () => setNum(num + 1);
  const onClickSwitchShowFlag = () => setFaceShowFlag(!faceShowFlag);

  //(関数,配列)
  useEffect(() => {
    if (num !== 0 && num % 3 === 0){
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMesssage color='blue'>お元気ですか？</ColorfulMesssage>
      <ColorfulMesssage color='pink'>元気です!</ColorfulMesssage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( *´艸｀)</p>}
      
    </>
  );
};

export default App;