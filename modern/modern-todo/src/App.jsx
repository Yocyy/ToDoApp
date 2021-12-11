import React from 'react';
// React 17移行ではトランスパイラによって自動追加されるためimport React from 'react'が不要に;
// .js、.jsxが指定可能
// jsx記法、ひとつの親タグにしなくてはならない
// <>または<React.Fragment>
// イベントやオブジェクト名はキャメルケース(ラクダ記法) font-size⇒fontSize
// {}はJavaScriptとして処理する。、階層１つ目はjsのオブジェクト
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;