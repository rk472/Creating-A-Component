import React from 'react';

function Component4() {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [visibility, setVisibility] = React.useState(false);
    const [userNameError, setUserNameError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [successMsg, setSuccessMsg] = React.useState('');
    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleShowPassword = () => {
        setVisibility(!visibility);
    }
    const handleSaveData = () => {
        if(userName === ''){
            setUserNameError('Username can\'t be empty.');
        }else{
            setUserNameError('');
        }
        if(password === ''){
            setPasswordError('Password can\'t be empty.');
        }else{
            setPasswordError('');
        }
        if(userName === 'demo@gmail.com' && password === '12345'){
            setSuccessMsg('Login Successful');
        }else {
            setSuccessMsg('Invalid Username or Password');
        }
    }
  return (
    <div style={{display: 'flex',
            flexDirection: 'column', 
            background: 'white', 
            alignItems: 'center',
            justifyContent: 'center',
            height: '-webkit-fill-available'
         }} >
        <div style={{display: 'flex',
            flexDirection: 'column',
            padding: 30,
            borderRadius: 5,
            width: 600,
            boxShadow: 'rgba(0, 0, 0, 0.6) 8px 8px 45px -13px',
            alignItems: 'center',
            background: 'orange'
           }}>
            <h2>Login</h2>
            <input type='text' style={{
                width: 400,
                height: 30,
                fontSize: 20
                }} placeholder="UserName" value={userName} onChange={handleChangeUserName}/>
            <p>{userNameError}</p>
            <input type={visibility ? 'text' : 'password'} style={{
                width: 400,
                height: 30,
                fontSize: 20,
                }} placeholder="Password" value={password} onChange={handleChangePassword}/>
            <p>{passwordError}</p>
            <div style={{display: 'flex', margin: 20}}><input type="checkbox" onClick={handleShowPassword} /> Show Password</div>
            <button style={{width: 200, height: 30}} onClick={handleSaveData}> Login </button>
            <p>{successMsg}</p>
        </div>
    </div>
  );
}

export default Component4;