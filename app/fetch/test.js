/**
 * Created by wangqiang on 2017/9/7.
 */

import 'whatwg-fetch';
import 'es6-promise';

export function getData() {
    var result = fetch('/api/1',{
        credentials:'include',
        header:{
            'Accept':'application/json,text/plain,*/*'
        }
    });
    result.then(res=>{
        return res.text()
    }).then(text=>{
        console.log(text);
    })
    var result1 = fetch('/api/2',{
        credentials:'include',
        header:{
            'Accept':'application/json,text/plain,*/*'
        }
    });
    result1.then(res=>{
        return res.json()
    }).then(json=>{
        console.log(json);
    })
}

export function postData() {
    var result = fetch('/api/post',{
        method:'POST',
        credentials:"include",
        header:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-url-urlencoded'
        },
        body:"a=100&b=2000"
    });
    result.then(res=>{
        return res.json();
    }).then(json=>{
        console.log(json);
    })
}