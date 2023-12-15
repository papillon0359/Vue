<template>
  <ContentBase>
    <el-form ref="form" :model="form" label-width="100px" title="实时掘进参数">
        <el-form-item label="实时掘进参数"></el-form-item>
        <el-form-item label="推进速度: ">
          <el-text>{{form.AdvanceSpeed}}</el-text>
        </el-form-item>
        <el-form-item label="总推力:">
          <el-text >{{form.TotalThrust}}</el-text>
        </el-form-item>
        <el-form-item label="刀盘转速:">
          <el-text>{{ form.KnifeSpeed }}</el-text>
        </el-form-item>
        <el-form-item label="刀盘扭矩:">
          <el-text >{{ form.KnifeTorque}}</el-text>
        </el-form-item>
        <el-form-item label="灌入度:">
          <el-text >{{ form.PenetrationRate }}</el-text>
        </el-form-item>
        <el-form-item label="里程:">
          <el-text>{{ form.mileage}}</el-text>
        </el-form-item>
      </el-form>
      <div id="chart" style="width:800px;height:560px;"></div>

      <el-form ref="form" :model="form1" label-width="150px">
        <el-form-item label="围岩级别: ">
          <el-text>{{form1.level}}</el-text>
        </el-form-item>
        <el-form-item label="单轴抗压强度:">
          <el-text >{{form1.strength}}</el-text>
        </el-form-item>
        <el-form-item label="完整性系致:">
          <el-text>{{ form1.IntegrityCoefficient }}</el-text>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="GradingParameters" label-width="100px" >
        <el-form-item label="渣土级配信息"></el-form-item>
        <el-form-item label="dmax: ">
          <el-text>{{GradingParameters.dmax}}</el-text>
        </el-form-item>
        <el-form-item label="cu:">
          <el-text >{{GradingParameters.cu}}</el-text>
        </el-form-item>
        <el-form-item label="Cc:">
          <el-text>{{ GradingParameters.Cc}}</el-text>
        </el-form-item>
        <el-form-item label="CI:">
          <el-text >{{ GradingParameters.CI}}</el-text>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="VibrationParameters" label-width="100px" >
        <el-form-item label="震动信息"></el-form-item>
        <el-form-item label="PPV: ">
          <el-text>{{VibrationParameters.PPV}}</el-text>
        </el-form-item>
        <el-form-item label="Ve:">
          <el-text >{{VibrationParameters.Ve}}</el-text>
        </el-form-item>
        <el-form-item label="Va:">
          <el-text>{{VibrationParameters.Va}}</el-text>
        </el-form-item>
        <el-form-item label="RMS:">
          <el-text >{{VibrationParameters.RMS}}</el-text>
        </el-form-item>
      </el-form>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';
import { TunnellingList } from "@/api/getdata";
import { SurroundingRock } from "@/api/getdata";
import * as echarts from 'echarts';

export default {
  name: 'HomeView',
  components: {
    ContentBase,
  },
  data() {
      return {
        form:{
          AdvanceSpeed: '', // 列表
          TotalThrust: '',
          KnifeSpeed:'',
          KnifeTorque:'',
          PenetrationRate:'',
          mileage:'',
        },
        form1:{
          level: '', // 列表
          strength: '',
          IntegrityCoefficient:'',
        },
        GradingParameters:{
        },
        VibrationParameters:{
        },
        GradingCurve: [],
        ids: [],
      };
    },
    created() {
      // 生命周期函数
      this.CourseList();
      this.GetSurroundingRock1();
      // this.getmain2();
    },
    mounted() {
      this.GetSurroundingRock();
  },
    methods: {
      CourseList() {
        TunnellingList()
            .then((res) => {
              console.log(res.data)
              this.form.AdvanceSpeed= res.data.AdvanceSpeed
              this.form.TotalThrust= res.data.TotalThrust
              this.form.KnifeSpeed= res.data.KnifeSpeed
              this.form.KnifeTorque= res.data.KnifeTorque
              this.form.PenetrationRate= res.data.PenetrationRate
              this.form.mileage= res.data.mileage
            })
            .catch((err) => {
              console.log(err);
            });
      },
      GetSurroundingRock1(){
        SurroundingRock().then((res) => {
              console.log(res.data)
              this.form1.level= res.data.level
              this.form1.strength= res.data.strength
              this.form1.IntegrityCoefficient= res.data.IntegrityCoefficient
              this.GradingParameters=res.data.GradingParameters
              this.VibrationParameters=res.data.VibrationParameters
            })
            .catch((err) => {
              console.log(err);
            })
      },
      GetSurroundingRock(){
        SurroundingRock().then((res) => {
              console.log(res.data)
              // console.log(res.data.GradingCurve)
              for(var i =0 ;i< res.data.GradingCurve.length;i++)
              {
                this.GradingCurve.push(res.data.GradingCurve[i]);
              }
              // this.GradingCurve=res.data.GradingCurve
              // console.log(this.GradingCurve)
            })
            .catch((err) => {
              console.log(err);
            }).finally(() => {
              const myChart = echarts.init(document.getElementById('chart'))
            // 指定图表的配置项和数据
              const option = {
                title: {
                  text: '渣土级配曲线'
                },
                tooltip: { trigger: 'axis' },
                xAxis: {
                  type: 'value',
                  min: 0,
                  max: 30,
                  axisTick: { show: false }, // 隐藏刻度线
                  splitLine: { show: false }, // 隐藏分割线
                  axisLabel: { show: false }, // 隐藏刻度值
                },
                yAxis: [{ type: 'value' }],
                series: [
                  {
                    name: 'Fake Data',
                    type: 'line',
                    smooth: true,
                    data: [
                      [0, 0],
                      [2, this.GradingCurve[0]],
                      [4, this.GradingCurve[1]],
                      [6, this.GradingCurve[2]],
                      [8, this.GradingCurve[3]],
                      [10, this.GradingCurve[4]],
                      [15, this.GradingCurve[5]],
                      [20, this.GradingCurve[6]],
                      [30, this.GradingCurve[7]],
                    ],
                    markLine: {
                      symbol: false, // 取消箭头
                      silent: true, // 取消鼠标hover事件
                      label: {
                        position: 'start', // 改变label位置
                        formatter: obj => obj.value, // 格式化标签文本
                      },
                      lineStyle: { color: '#ddd', type: 'solid' },
                      data: [2, 4, 6, 8, 10, 15, 20, 30].map(val => {
                        return {
                          xAxis: val,
                        };
                      }),
                    },
                    z: 10, // markLine应该有一个默认的z,但是不能修改，这里控制曲线z > markLine层级，保证markLine在曲线下方。
                  },
                ],
              };
              myChart.setOption(option);
            });
      }
    },
}
</script>

<style scoped>
.container{
  margin-top: 20px
}
</style>