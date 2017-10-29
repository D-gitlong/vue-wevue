<template>
	<div class="header-content">
		<wv-flex :gutter="10">
      <wv-flex-item>
        <div class="placeholder">ToTAL SALE YID:</div>
      </wv-flex-item>
      <wv-flex-item>
        <div class="placeholder">$1423325</div>
      </wv-flex-item>
    </wv-flex>
    <wv-flex :gutter="10">
      <wv-flex-item>
        <div class="placeholder">PAID:</div>
      </wv-flex-item>
      <wv-flex-item>
        <div class="placeholder">$1423325</div>
      </wv-flex-item>
    </wv-flex>
    <wv-flex :gutter="10">
      <wv-flex-item>
        <div class="placeholder">OPEN:</div>
      </wv-flex-item>
      <wv-flex-item>
        <div class="placeholder">$1423325</div>
      </wv-flex-item>
    </wv-flex>
    <wv-panel title="Top Customer"></wv-panel>
    
    <div id="charts">
      <div id="main" :style="{width:'600px',height:'400px'}"></div>
    </div>
    
	</div>
</template>

<script>
import echarts from 'echarts'
export default {
  data (){
    return {
      width: 0,
      height: 0
    }
  },
  mounted (){
    let main = document.getElementById('main');
    let myChart = echarts.init(main);
    myChart.setOption({
      tooltip: {},
      xAxis: {
          data: ["C1","C2","C3","C4","C5"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
}
</script>