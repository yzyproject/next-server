import Link from 'next/link';
import Router from 'next/router';
import React, {useState} from 'react';
import axios from 'axios';
import { withRouter} from 'next/router';
const page1 = function({router,list1}){
    function gotoPage2(){
        Router.push("/page2");
    }

    //关键代码----------start-------
    const [color,setColor] = useState('blue');
    const [num,setNum] = useState(0);
    const [list, setList] = useState([0]);
    const changeColor=()=>{
        setColor(color=='blue'?'red':'blue')
    }
    const changeNum=()=>{
        setNum(num+1);
    }
    const changeList=()=>{
        setList([0,1,2,3]);
    }
     //关键代码----------end-------

    return (
        <span>
            <div className="p1">第一个页面</div>
            <Link href="/"><a>首页</a></Link>
            <Link href="/page2?name=yzy"><a>page2</a></Link>
            <button onClick={gotoPage2}>跳转到page2页面</button>
            <button onClick={changeColor}>改变颜色</button>
            <div >{list}</div>
            <button onClick={changeNum}>changeNum</button>
            <button onClick={changeList}>changeList</button>
            <style jsx>
                {`
                    .p1 { color:${color};}
                `}
            </style>
        </span>
    );
}
page1.getInitialProps = async ()=>{


   return {};
}
export default withRouter(page1);