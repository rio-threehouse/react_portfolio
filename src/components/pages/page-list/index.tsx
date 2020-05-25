import React from 'react';
import { Link } from 'react-router-dom';

export const PageList: React.FC = () => {
  return(
    <>
      <div>Top Page</div>
      <Link to="/hooks-tutorial">Hooksチュートリアル</Link>
    </>
  )
}