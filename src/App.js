import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import Textbox from './componants/Textbox';
import Alert from './componants/Alert';
import React,{useState} from 'react';



function App() {
  const[mode, setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      msg:message,
    })
   setTimeout(()=>{
    setAlert(null);
   },2000);

  }
  const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
document.body.style.backgroundColor='#9e9e9e';
showAlert("success","Dark mode enabled.")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
   showAlert("success","Light mode enabled.")
  }
}
  return (
    <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
   <Alert alert={alert} />

   <div >
  <Textbox Heading="Enter Text Here" className="container" mode={mode}  showAlert={showAlert}/>
  </div>
  
    </>
  );
}

  export default App;