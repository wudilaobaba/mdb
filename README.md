###看server中的app.js 来指导前端传参

###以后会升级用一个超类来让所有类似student的集合来继承  敬请期待！！

####01.查询出的集合中的每一条对象都是一个实例，都可以使用类的实例方法，改了自己以后要记得this.save();每个实例都有自己的save()方法
####02.
```javascript
function test() {
	let y = new student({   //这样y就是一个对象了，也就是一个实例{name:"MMM"},这个实例就可以使用实例方法了
  	  name:"MMM"
	})
	new student() //是一个特殊的实例，相当于他这个对象中只有一个id属性
}
```
####03.mongoose  (集合名、集合js文件名、实例化集合的名字 三者要一致)
 01.使用mongoose创建集合的时候，集合名字要小写切且不要用复数
 02.集合的js文件命名要与集合名字一致
 03.使用集合js的时候，new的实例也要小写，且与集合名字一致
