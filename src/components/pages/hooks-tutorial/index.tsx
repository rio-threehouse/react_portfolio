import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const HooksTutorial: React.FC = () => {
  const history = useHistory()
  const [count, setCount] = useState(0);
  const [changeTitle, setChangeTitle] = useState(false);

  // ChangeTitleボタンを押した時だけタイトル変更する
  useEffect(() => {
    document.title = ` ${count} times you clicked now` ;
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
      <button onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
