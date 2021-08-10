const xhr = new XMLHttpRequest();
xhr.open('get', 'index.js', true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 发送请求参数
xhr.send();
xhr.onreadystatechange = ()=>{
    if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
        console.log(xhr.responseXML)
        console.log(xhr.response)
        console.log(xhr.responseText)
    }
}