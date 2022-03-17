import './App.css';
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
// const LazyComponent = React.lazy(()=>import('./Son'));
// import Son from './Son'

let ConsumerDemo = React.memo((props)=>{
  useEffect(()=>{
    return ()=>{
      console.log('卸载')
    }
  },[]);
  useEffect(()=>{
    console.log('更新')
  },[props])
  let { contextValue,setContextValue } = React.useContext(ThemeContext);
  let {color,background} = contextValue;
  let [num,setNum] = useState(0);
 return <> <div style={{ color,background } } >消费者</div> 
 <button onClick={ ()=> {num==0?setNum(1):setNum(0); setContextValue(num==0?{ color:'#fff' , background:'blue' }:{  color:'#ccc', background:'pink' })  }} >切换主题</button>
 </>
});
let Son = ()=>{ 
  return <div>
    hahahahah 
  </div>
}
const ThemeContext = React.createContext(null);
const ThemeProvider = ThemeContext.Provider //提供者
export default function App(){
 const [ contextValue , setContextValue ] = React.useState({  color:'#ccc', background:'pink' });

// 子组件
 return <div>
     <ThemeProvider value={ {contextValue,setContextValue} } >
    <ConsumerDemo/>
    <Suspense fallback={<div>loading...</div>}>
      <Son></Son>
    </Suspense>
     </ThemeProvider>
 </div>
}

