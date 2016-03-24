/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

var targetTable=document.getElementById('aqi-table');

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
   var aqicity=document.getElementById('aqi-city-input').value;
   var aqivalue=document.getElementById('aqi-value-input').value;
   var city=aqicity.trim();
   var value=aqivalue.trim();
   if(!(/^[a-zA-Z\u4e00-\u9fa5]+$/.test(city))){
      alert("城市名为中文或英文");
      return;
    }
      if(!(/^(100|[1-9]\d|\d)$/.test(value))){
      	alert('质量値请输入正整数');
      	return;
      }
      aqiData[city]=value;
   
};

/**
 * 渲染aqi-table表格
 */

function renderAqiList() {
	
    var tab="<tr><td>城市名</td><td>空气质量</td><td>操作</td></tr>";

    	for(var city in aqiData){
       tab+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button onclick=\"delBtnHandle(\'"+city+"\')\">删除</button></td></tr>";
       }
     targetTable.innerHTML=city?tab:"";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var atn=document.getElementById('add-btn');
    atn.addEventListener("click", addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
   
}

init();
