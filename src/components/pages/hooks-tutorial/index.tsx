import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const HooksTutorial: React.FC = () => {
  const history = useHistory()
  const [count, setCount] = useState(0);
  const [changeTitle, setChangeTitle] = useState(false);
  const [text, setText] = useState('');

  const alertHello = () => alert('hello!')
  // 配列の型定義…変数名: 型タイプ[]
  const buttonTexts: {text: string}[] = [
    {
      text: "おはようございます"
    },
    {
      text: "こんにちは"
    },
    {
      text: "こんばんは"
    }
  ]

  const changeText = (buttonText: string) => {
    setText(buttonText)
  }

  // ChangeTitleボタンを押した時だけタイトル変更する
  useEffect(() => {
    document.title = ` ${count} times you clicked now` ;
  }, [changeTitle]);

  return(
    <>
      <div>
        <p>You clicked { count } times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me!
        </button>
        <button onClick={() => setChangeTitle(!changeTitle)}>
          Change Title!
        </button>
        <button onClick={() => history.goBack()}>
          Go back
        </button>
      </div>

      <div>
        <p>↓アロー関数の実験</p>
        {/* 引数なしのアロー関数をeventhandleに渡す */}
        <button onClick={alertHello}>
          Helloアラートボタン
        </button>

        {/* 引数ありのアロー関数をeventhandleに渡す */}
        <div>{text}</div>
        {buttonTexts.map((buttonText, index) => {
          return(
            <button key={index} onClick={() => changeText(buttonText.text)}>
              {buttonText.text}
            </button>
          )})
        }
      </div>
    </>
  );
}
