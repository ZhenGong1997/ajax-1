let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n+1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            // 把JSON字符串变成JSON数组
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent  = item.id
                xxx.appendChild(li)
                // console.log(item)
            });
            n += 1
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "5.json")
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            const obj = JSON.parse(request.response)
            console.log(obj)
            myName.textContent = obj.name
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())

        }
    }
    request.send()
}
getHTML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html")
    request.onload = () =>{
        const html = document.createElement('html')
        html.innerHTML = request.response
        document.body.appendChild(html);
    }
    request.onerror = () => {
    }
    request.send()
}

getJS.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js")
    request.onload = () =>{
        const script = document.createElement('script')
        const code = document.createTextNode(request.response)
        script.appendChild(code)
        document.body.appendChild(script);
    }
    request.onerror = () => {
        console.log("2.js失败")
    }
    request.send()
}

// AJAX 加载CSS
getCSS.onclick = () =>{
    // 创建HttpRequest对象
    const request = new XMLHttpRequest();
    // 调用对象的open方法
    request.open("GET", "/style.css")
    request.onreadystatechange = () => {
        console.log(request.readyState)
        // 下载完成但不知道是成功2xx 还是失败 4xx 5xx
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                // 创建style标签，填写内容并插入head
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)           
            } else {
               alert('CSS加载失败')
            }  
        }   
    }
    request.send() 
}

