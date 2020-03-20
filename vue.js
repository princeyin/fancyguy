https://cn.vuejs.org/
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
渲染template
  1)template: DOM 两个大括号 {{js内容}}   JS new Vue（{el:选择器,data:{变量：'xx'}})
  2)指令：v-bind:DOMattr="js变量"  v-bind:title="logo"  将一个变量绑定给 DOM属性
         v-if="true/false"  可以作为DOM的一个属性，可以控制元素的显示隐藏
         v-for="i in arr" 遍历一个数组或对象，这个属性要放在实例化元素的子元素上 new Vue({el:'#parent',data:{arr:['lol','dnf']}}) 
           <div id="parent"><div v-for="game in arr">{{game}} Vue已经将所有项放在game上，
         v-on:事件 v-on:click="handleclick"   new Vue({el: methods:{handleclick:function(){}}) 变量放在data 上 函数放在 methods上
         v-model  对表单元素输入内容 
         v-once  vue的数据改变不会再影响DOM
组件
  // 定义名为 todo-item 的新组件
  Vue.component('todo-item', { template: '<li>这是个待办项</li>'}) 然后在DOM中<todo-item></todo-item> 可以对这个元素添加属性 添加Vue的数据
