//原型链继承
// function Animal(){
// 	this.eat = function(){
// 		console.log('eat')
// 	}
// }

// function Dog(){
// 	this.bark = function(){
// 		console.log('Dog barks !')
// 	}
// }

// Dog.prototype = new Animal()

// var hashiqi = new Dog()
// hashiqi.bark()

//封装DOM查询（原型链继承）
// function Elem(id){
// 	this.elem = document.getElementById(id)
// }

// Elem.prototype.html = function(val){
// 	var elem = this.elem
// 	if(val){
// 		elem.innerHTML = val
// 		return this  //链式操作
// 	}else{
// 		return elem.innerHTML
// 	}
// }

// Elem.prototype.on = function(type, fn){
// 	var elem = this.elem
// 	elem.addEventListener(type, fn)
// 	return this
// }

// var div1 = new Elem('post_content_118581962526')
// // console.log(div1.html())
// div1.html('<h2 style="color:#e23a6e;font-size:160%;">牧场物语</h2>').on('click',function(){
	
// 	div1.html('<p>done</p>')
// 	alert("textChange")
// 	// JS 和浏览器渲染共用一个线程，JS 执行的时候浏览器的
// 	// 渲染是等待、卡顿的，因此要等到 JS 执行完了浏览器才
// 	// 会渲染，才会出现我们肉眼看到的页面内容的变化，因此
// 	// 只能看到最后的结果。
// 	//例如此处，JS运行，运行到div1.html('<p>done</p>')的时
// 	//候，JS还没运行完，这句代码就是让浏览器渲染，改变div1
// 	//的内容，但是当前JS占用线程，故往下执行alert。所以在页
// 	//面上的结果是先弹窗再发生文本改变。
// })

//闭包
// function F1(){
// 	var a = 100;
// 	return function(){
// 		console.log(a);
// 	}
// }

// var f1 = F1();
// var a = 200;
// f1();
//某个函数【需要用到的变量在外层的函数里】，这个函数就拉着这个变量组成了闭包。

//闭包题目
// function trust(n,o){
//     console.log(o);
//     return {
//         trust:function(m){
//             return trust(m,n)
//         }
//     }
// }
// var a = trust(0); a.trust(1); a.trust(2); // undefined 0 0
// var b = trust(0).trust(1);b.trust(2);// undefined 0 1
// var c = trust(0).trust(1).trust(2) // undefined 0 1


//生成十个a标签，点击对应a标签弹出序号
//法一，给a添加index属性，弹出时弹出index
// var i
// var a
// for ( i=0; i<10; i++){
// 	a = document.createElement('a');
// 	a.innerHTML = i;
// 	a.index = i;
// 	a.addEventListener('click',function(){
// 		alert(this.index)
// 	});
// 	document.body.appendChild(a);
// }
//法2，使用闭包，创建自执行函数，i作为参数传递，创建十个闭包，每次
//循环中，i去对应的当前闭包中寻找值
// var i
// var a
// for(i=0;i<10;i++){
// 	(function(x){
// 	a = document.createElement('a');
// 	a.innerHTML = x;
// 	a.addEventListener('click',function(){
// 		alert(x)
// 	});
// 	document.body.appendChild(a);
// 	})(i)
// }


//闭包实例
// function isFirstLoad(){
// 	var _list = [];
// 	return function(el){
// 		if(_list.indexOf(el)>=0){//数组indexOf的功能：如果不存在，索引值是-1.如果存在，入数组，索引加一
// 			console.log(_list.indexOf(el))
// 			return false
// 		} else {
// 			console.log(_list.indexOf(el))
// 			_list.push(el);
// 			return true
// 		}
// 	}
// }

// var isFirstLoad = isFirstLoad()
// isFirstLoad(1);
// isFirstLoad(1);


//异步
// console.log(1)
// setTimeout(function(){
// 	console.log(2)
// },2000)//写0等于不写
// console.log(3)
// setTimeout(function(){
// 	console.log(4)
// },1000)
// console.log(5)
// 1 3 5 2 4


//打印当前日期，用-隔开
// function getT(d){
// 	var year = d.getFullYear();
// 	var month = d.getMonth() + 1;
// 	var day = d.getDate();
// 	month = month<10?('0' + month):month;
// 	day = day<10?('0' + day):day;
// 	return year+'-'+month+'-'+day;
// }
// var d = new Date()
// var t = getT(d);
// console.log(t);


// //生成随机数，每个数的位数都是一致的
// var random = Math.random()
// var random = random + '0000000000'
// var random = random.slice(0, 10)//小数点也算一位
// console.log(random)


// 加载一个资源的过程
// 1、浏览器根据DNS服务器得到域名的IP地址
// 2、向这个IP的机器发送http请求
// 3、服务器收到、处理并返回http请求
// 4、浏览器得到返回内容

// //浏览器渲染页面的过程
// 1、根据HTML结构生成DOM Tree
// 2、根据CSS生成CSSOM
// 3、将DOM和CSSOM整合形成RenderTree
// 4、根据RenderTree开始渲染和展示
// 5、遇到script时，会执行xxxxxxxxxc并阻塞渲染





