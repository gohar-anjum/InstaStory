var arr = [
    {dp:"https://images.unsplash.com/photo-1690179756660-2ad2cd03bca1?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , mstory:"https://images.unsplash.com/photo-1690179701535-946b154f1c66?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1699530159392-ebbe8848e155?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , mstory:"https://images.unsplash.com/photo-1697525509916-12a65834432b?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1670006626907-83c7d89e320f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , mstory:"https://images.unsplash.com/photo-1533933269825-da140ad3132f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1678889284814-be932734a596?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" , mstory:"https://images.unsplash.com/photo-1695469956732-642c7f6f5ecc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1653216863169-de57952bb463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" , mstory:"https://plus.unsplash.com/premium_photo-1668485967906-7fd0d52d1407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBvcnRyYWl0JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"}
    
]
var clutter = ""
arr.forEach(function(val, index){
    clutter += `<div class="story">
                    <img id="${index}" src="${val.dp}" alt="">
                </div>`;
})

document.querySelector("#stories").innerHTML=clutter;
var grow=0
//click event
document.querySelector("#stories").addEventListener("click", function(funcval){
        document.querySelector("#storyopened").style.display="initial"
        document.querySelector("#storyopened").style.backgroundImage= `url("${arr[funcval.target.id].mstory}")`

        setTimeout(function(){
            document.querySelector("#storyopened").style.display=`none`  
        },3000)

        if(grow<100)
        {
            setInterval(function(){
                document.querySelector(".bar").style.width= `${grow}%`
                grow++
            },30)
        }else{
            grow=0
        }
    })