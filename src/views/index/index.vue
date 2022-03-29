<template>
  <div>
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="6">
        <el-card shadow="always" class="in">
          <div style="float: left">
            <p>本月进件</p>
            <p style="font-weight: bold">6588</p>
            <p>
              +20.12%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="out">
          <div style="float: left">
            <p>本月放款（元）</p>
            <p style="font-weight: bold">121000000</p>
            <p>
              +1.25%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-money ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allin">
          <div style="float: left">
            <p>累计进件</p>
            <p style="font-weight: bold">128700</p>
            <p>
              +11.48%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-date ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allout">
          <div style="float: left">
            <p>累计放款</p>
            <p style="font-weight: bold">923380079</p>
            <p>
              -2.06%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-coin ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="18">
        <el-card>
          <div slot="header" style="text-align:center;line-height:50px">
            <span>进件统计分析</span>
          </div>
          <div ref="analysis" style="height: 240px"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" style="text-align:center;line-height:50px">
            <span>进件产品占比</span>
          </div>
          <div ref="percent" style="height:240px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px" class="time" :gutter="24">
      <el-col :span="12">
        <el-card body-style="height:500px">
          <el-timeline style="text-align:left">
            <el-timeline-item timestamp="2020/07/01" placement="top">
              <el-card>
                <h4>审核订单</h4>
                <p>李红 操作于 08:54</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/07/01" placement="top">
              <el-card>
                <h4>新增贷款</h4>
                <p>王小虎 操作于11:24</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/07/01" placement="top">
              <el-card>
                <h4>新增渠道</h4>
                <p>张浩 操作于15:23</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card body-style="height:500px">
          <el-calendar></el-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawline();
    this.drawPie()
  },
  methods: {
    drawline() {
      //初始化容器
      var myChart = this.$echarts.init(this.$refs["analysis"]);
      //初始化图标配置选项
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["20-01", "20-02", "20-03", "20-04", "20-05", "20-06", "20-07"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [30, 84, 56, 47, 84, 61, 90],
            type: "line",
            smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4f88ff", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "white", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#4f88ff",
            },
          },
        ],
      };

      //设置成功
      myChart.setOption(option);
    },
    drawPie() {
      let myChart = this.$echarts.init(this.$refs["percent"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "房闪贷" },
              { value: 310, name: "新车贷" },
              { value: 234, name: "资金贷" },
              { value: 135, name: "合力贷" },
              { value: 1548, name: "其他" },
            ],
          },
        ],
      };
      // 绘制图表
      myChart.setOption(option);
    }
  },
};
</script>

<style  scoped>
.ico {
  float: right;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.3);
}
.in {
  background: #4f88ff;
}
p {
  line-height: 30px;
  color: #fff;
  font-size: 16px;
}
.allin {
  background: #5050ff;
}
.allout {
  background: #f49b3b;
}
.out {
  background: #f26075;
}
.time p {
  color: #666666;
}
</style>