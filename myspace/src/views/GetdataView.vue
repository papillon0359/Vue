<template v-slot:dorpdown>
    <ContentBase>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="推进速度">
          <el-input v-model="form.AdvanceSpeed"></el-input>
        </el-form-item>
        <el-form-item label="总推力">
          <el-input v-model="form.TotalThrust"></el-input>
        </el-form-item>
        <el-form-item label="刀盘转速">
          <el-input v-model="form.KnifeSpeed"></el-input>
        </el-form-item>
        <el-form-item label="刀盘扭矩">
          <el-input v-model="form.KnifeTorque"></el-input>
        </el-form-item>
        <el-form-item label="灌入度">
          <el-input v-model="form.PenetrationRate"></el-input>
        </el-form-item>
        <el-form-item label="里程">
          <el-input v-model="form.mileage"></el-input>
        </el-form-item>
      </el-form>
    </ContentBase>
    
</template>

<script>
import ContentBase from '../components/ContentBase';
import { TunnellingList } from "@/api/getdata";

export default {
  name: 'GetdataView',
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
        ids: [],
      };
    },
    created() {
      // 生命周期函数
      this.CourseList();
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
              console.log(this.form.mileage)
            })
            .catch((err) => {
              console.log(err);
            });
      },
    },
}
</script>

<style scoped>
.container{
  margin-top: 20px
}
</style>