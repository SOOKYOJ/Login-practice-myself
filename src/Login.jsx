import { useEffect, useState } from 'react';
import './App.css';

function Login() {
  const user = { id: 'abc123123', pw: '!abcd1234' };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const accept = () => {
    if (id === user.id && pw === user.pw) {
      alert('환영합니다');
    } else {
      alert('다시 로그인 해주세요');
    }
  };

  return (
    <div className="page">
      <input placeholder="아이디를 입력해주세요" type="text" value={id} onChange={handleId}></input>
      <br />
      <input placeholder="비밀번호를 입력해주세요" type="password" value={pw} onChange={handlePw}></input>
      <br />
      <button onClick={accept}>확인</button>
    </div>
  );
}

export default Login;
