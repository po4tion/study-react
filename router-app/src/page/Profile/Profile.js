import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from '../../hoc/WithRouterSample';

const data = {
  po4tion: {
    name: '김동규',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '아버지를 아버지라 부르지 못하는',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
