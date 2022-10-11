import React, { useState, useRef } from "react";
import {useNavigate} from "react-router-dom";
import { Toast } from 'primereact/toast';

import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";


export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const toast: any = useRef(null);
  
  const showError = () => {
    toast.current.show({severity:'error', summary: 'Login Failed', detail:'Username & Password required!', life: 5000});
}
  
  const handleLogin = () => {
    if (username !== '' && password !== '') {
        navigate("/"); 
    }else{
        showError();
    }

  }

  return (
      <div className="grid justify-content-center">
      <div className="col-12 md:col-4 text-center mt-5">
        <Toast ref={toast}></Toast>
        <Card title="MMPP Admin Panel" subTitle="User Login">
          <div>
            {/* username input  */}
            <div className="p-inputgroup mb-5">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
              />
            </div>

            {/* password input  */}
            <div className="p-inputgroup mb-5">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <Password
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-min"
                feedback={false}
              />
            </div>

           {/* login button   */}
            <Button className="w-full" label="Log In" onClick={handleLogin}/>
          </div>
        </Card>
      </div>
    </div>
  );
};
