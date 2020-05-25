import React from 'react';
import { useState, useEffect } from 'react';

export const HooksTutorial: React.FC = () => {
  const [count, setCount] = useState(0);
  const [changeTitle, setChangeTitle] = useState(false);

  // ChangeTitleボタンを押した時だけタイトル変更する
  useEffect(() => {
    document.title = `You clicked ${count} times` ;
  }, [changeTitle]);

  return(
    <div>
      <p>You clicked { count } times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
      <button onClick={() => setChangeTitle(!changeTitle)}>
        Change Title!
      </button>
    </div>
  );
}
