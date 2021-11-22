import data from './data.json';
import './style.css';
import './wow.less';

const a = 2;

function add(x, y) {
  return x + y;
}

async function hmr() {
  // 正常加载: 所有资源并行加载
  // 懒加载: 文件需要使用时才加载
  // 预加载: 等其他资源加载完毕, 浏览器空闲了, 再加载
  const res = await import(/* webpackChunkName: 'hmr', webpackPrefetch: true */"./hmr");
  console.log(res);
  console.log(res.default());
}


hmr();
console.log(data);
console.log(add(a, 2));

// if (module.hot) {
//   // 一旦module.hot.accept为true, 说明开启了HMR功能
//   module.hot.accept("./hmr.js", function () {
//     // 方法会监听print.js文件的变化, 一旦发生变化, 其他默认不会重新打包构建
//     // 会执行后面的回调函数
//   })
// }