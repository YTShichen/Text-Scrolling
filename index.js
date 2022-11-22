


  var container = document.querySelector('.container')
  var title = document.querySelector(".title")
  var ulList = document.querySelector(".ulList")

   function cloneFirstItem(){
    var firstItem = ulList.children[0]
    var clone = firstItem.cloneNode(true)
    ulList.appendChild(clone)
    
  }
  cloneFirstItem();

  var duration = 2000
  setInterval(moveNext,duration)
  // 当前显示的例子的下标
  var curIndex = 0;
  // 变化的高度
  var changeTop = 30


  function moveNext(){
    
    var begin = curIndex * changeTop;
    curIndex++
    var end = curIndex * changeTop
    //变化的总时间
    var endTime = 300;
    

    // 动画的间隔时间
    var duration = 10
    // 变化的次数

    var times = endTime/duration;

    var dis = (end - begin)/times
    // 动画，让每一个列表项 慢慢变化

    // 慢慢变化：在一段时间内，每隔一小段时间变化一点点
   var timeId = setInterval(function(){
     begin+=dis;
     if(begin >= end){
       clearInterval(timeId) //停止计时器
      // 如果滚动完成，如果是最后一项
       if(curIndex === ulList.children.length-1){
        curIndex = 0;
        begin=0;

       }
     }
      ulList.scrollTop = begin
   },duration)

 
  }



