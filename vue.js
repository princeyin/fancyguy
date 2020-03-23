https://cn.vuejs.org/
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
渲染template
  1)template: DOM 两个大括号 {{js内容}}   JS new Vue（{el:选择器,data:{变量：'xx'}})
  2)指令：v-bind:DOMattr="js变量"  v-bind:title="logo"  将一个变量绑定给 DOM属性
         v-if="true/false"  可以作为DOM的一个属性，可以动态的创建和删除元素
         v-show            可以动态的显示和隐藏元素  缩写：:show
         v-for="i in arr" 遍历一个数组或对象，这个属性要放在实例化元素的子元素上 new Vue({el:'#parent',data:{arr:['lol','dnf']}})
              在这个作用域内 可以访问父元素的作用域，也就是可以访问Vue对象 的所有属性 方法
              如果 有第二个参数，代表索引  v-for="(value,index) in arr"   
              遍历对象可以有三个参数  value  name index
              v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数  v-for="item in 10"
              当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中
           <div id="parent"><div v-for="game in arr">{{game}} Vue已经将所有项放在game上，
         v-on:事件 v-on:click="handleclick"   new Vue({el: methods:{handleclick:function(){}}) 缩写：@click:
           事件修饰符： .stop 阻止事件继续传播 == event.stopPropagation()
                       .prevent  == event.preventDefault()
                       .capture  相当于 捕捉事件
                       .self 只能自身元素触发才执行函数，而不是其他元素触发执行函数
                       .once  只执行一次
                       .passive
         按键修饰码：
         v-model  对表单元素输入内容 
          text 和 textarea 元素使用 value 属性和 input 事件--改变内容，绑定的变量值也会改变
          checkbox 和 radio 使用 checked 属性和 change 事件--改变选中状态，v-model绑定的变量值(数组)会变
            为什么绑定的变量是个数组？  如果是个字符串，选中一个按钮，其他的按钮也会被选中
            如果表单没有value属性，选中任意个选项，其他选项也会别选中，因为：变量数组会被赋值为null 而null为真
         修饰符：v-model.number  v-model.trim  v-model.lazy 表单失去焦点是在触发事件 不用时时刻刻触发事件
         v-once  vue的数据改变不会再影响DOM
         v-html 可以render Vue变量中含有HTML代码  <div v-html="data">
         v-class 动态类名
         指令的动态参数：v-bind:[attr]  可以动态的绑定属性和属性值 attr的名字不能有大写字母，动态参数表达式有一些语法约束，因为某些字符，如空格和引号
         变通的办法是使用没有空格或引号的表达式
         修饰符 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定  <form v-on:submit.prevent="onSubmit">...</form> 
         指令对于触发的事件调用 event.preventDefault()
         缩写： v-bind:href-- :href  v-bind:[attr]--:[attr] 
              v-on:click -- @click   v-on:[event]--@[event]
Vue的计算属性： computed:{} 存放一些需要计算并返回值的函数 或表达式
   计算属性缓存VS方法：每次render模板，方法都会执行一次函数   
   只要每渲染一次模板时，函数返回值不会变的情况下，是不会再次执行函数，而是在缓存中获取值
   方法没有缓存， 计算属性有缓存
绑定class 和style 
  绑定多个class的对象法：v-bind:class="{active:true,'hover-n':true..}[classObj]" 类名有短线链接的要加引号 可以用Vue里面的对象直接绑定
  绑定多个class的数组方法 :class=['active','hover']|classarr
  绑定style多个属性也一样
条件渲染
  v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别
  v-else-if 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别  v-else-if 可以重复使用多个
数组更新检查 ：当对数组使用方法时，有些方法会改变原数组的数据，Vue会及时响应，而有些方法不会改变原数组的数据，也就不会改变DOM
    由于 JavaScript 的限制，Vue 不能检测以下数组的变动：
    当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue  
    应该这样 Vue.set(vm.items, indexOfItem, newValue)  或者  vm.items.splice(indexOfItem, 1, newValue)
    当你修改数组的长度时，例如：vm.items.length = newLength   应该这样 vm.items.splice(newLength)
对象变更检测注意事项  还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：
    1）可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性
    2）添加多个属性 vm.userProfile = Object.assign({}, vm.userProfile, { age: 27,favoriteColor: 'Vue Green'})
    3）排序或过滤后不改变源对象时，可用计算属性或方法来展现变更后的数据
key:跟踪每个节点的身份，从而实现重用和重新排序现有元素
   
组件
  // 定义名为 todo-item 的新组件
  Vue.component('todo-item', { template: '<li>这是个待办项</li>'}) 然后在DOM中<todo-item></todo-item> 可以对这个元素添加属性 添加Vue的数据
  这是个全局组件
  局部组件：Vue.component('todo-item',{},components:{'todochild',{template:}}  这个局部组件只能在父组件中使用
  组件的特性：
      1）父子组件的属性和方法是属于各自的，无法共享
      2）组件可以有data method computed,但是data必须是个函数
      3）props:[属性1，属性2...]这些自定义的属性 可以通过v-bind:属性1=父组件的属性值(写在DOM上，而不是component上)--相当于一个通道，接收了父组件的数据，然后子组件可以用
              属性验证类型：props:{name:string,name2:function,name3:object}
      4）子传父  通过事件template: `<div >{{myname}}<button @click="$emit('changename')">点我</button></div>`
            $emit(event[,事件执行抛出一个值]) 触发DOM中组件模板上绑定的自定义事件 这个值可通过$event取得，
            如果DOM中组件模板上绑定的自定义事件的值是个函数，可通过第一个参数传参
     5）data 必须是一个函数 data:function(){return {cc:1,nn:2}}
     6)ref传递  在父元素作用域内设置一个ref属性 ref="myname"  
         如果这个ref作用在DOM元素上 此时vm对象上的有个$refs对象，其属性$refs.myname存储的是一个DOM
         如果这个ref作用在component组件上 此时vm对象上的有个$refs对象，其属性$refs.myname存储的是component组件对象
          就可以在父对象上获取组件的数据 访问方法，也就可以像组件传参 传数据
        由于这些数据是渲染模板后 加上去的，因此要用这些数据 得去取
 切换不同的组件--点击选项卡
     1）<component v-bind:is="templatename"></component>  component内置的模板  
     当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题
     <!-- 失活的组件将会被缓存！-->
      <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    2)组件卡槽（分发内容）
        template:`<div><slot name="b"></slot>>iiiiii<slot name="a"></slot></div>`   
          <todo >
          <h1 slot="b">上面</h1>
          <h2 slot="a">下面</h2>
          </todo>
过渡/动画  
   1）Vue封装了一个组件<transition></transition> 来执行过渡  一个transition组件只能包含一个元素
      enter==leave-to  enter-active==leave-active  显示过渡enter/enter-active/enter-to  隐藏过渡leave/levae-active/leave-to
      类名前缀：如果transition 有name属性xx xx-enter  没有.v-enter 
     enter/leave 表示动画开始前的第一帧  active:一个动画或过渡的时间段 to:动画/过渡的最后一帧
      动画：css定义动画，在active时间段中使用动画
      上述的类名 可以自定义 
        <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
        enter-class
        enter-active-class
        enter-to-class (2.1.8+)
        leave-class
        leave-active-class
        leave-to-class
     2）持续时间：<transition v-bind:duration="{enter:100,leave:1000}"
多个元素的过渡和动画 并不是同时对多个元素进行过渡，而是通过绑定v-if v-else 才能确保transition里面只有一个元素
     1）如果v-if绑定的元素 与v-else绑定的元素一样 只是内容不同，是不会有动画的
     2）Vue的diff算法在作怪--操作DOM的时候会比较新旧节点的不同，首先比较元素值 如果元素值相同不会删除节点，只是替换内容，也就没有动画
       解决办法：加key属性，先比元素 再比key值 key值不同就要删除节点
     3）model:in-out | out-in  当显示与隐藏 同时发生时，谁先的问题
列表过渡：<transition-group>
axios and  fetch
fetch是js标准，号称ajax的替代品，但是就得浏览器不支持Promise 需要使用polyfill es6-promise
  fetch(url).then(response=>{if(response.ok){reurn response.json();}}).then(data=>console.log(data)).catch(err=>console.log(err))
                  
