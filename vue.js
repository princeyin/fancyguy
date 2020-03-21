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
           <div id="parent"><div v-for="game in arr">{{game}} Vue已经将所有项放在game上，
         v-on:事件 v-on:click="handleclick"   new Vue({el: methods:{handleclick:function(){}}) 缩写：@click:
         v-model  对表单元素输入内容 
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
    当你修改数组的长度时，例如：vm.items.length = newLength
组件
  // 定义名为 todo-item 的新组件
  Vue.component('todo-item', { template: '<li>这是个待办项</li>'}) 然后在DOM中<todo-item></todo-item> 可以对这个元素添加属性 添加Vue的数据
