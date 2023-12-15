import request from '@/utils/request'


//获取掘进参数
export function TunnellingList(data) {
  return request({
    url: 'https://feb5595f-266f-4a74-bd65-8dc489977261.mock.pstmn.io/api/Tunnelling',
    method: 'get',
    data
  })
}

// 1.AdvanceSpeed 推进速度
// 2.TotalThrust 总推力
// 3.KnifeSpeed 刀盘转速
// 4.KnifeTorque 刀盘扭矩
// 5.PenetrationRate 灌入度
// 6.mileage 里程

//围岩感知信息
export function SurroundingRock(data) {
  return request({
    url: 'https://feb5595f-266f-4a74-bd65-8dc489977261.mock.pstmn.io/api/GradingCurve',
    method: 'get',
    data
  })
}

// 1.level 围岩级别
// 2.strength  单轴抗压强度
// 3.IntegrityCoefficient  完整性系数
// 4.GradingCurve  级配曲线
// 5.GradingParameters  级配参数
/* {
      1.dmax
      2.cu
      3.Cc
      4.CI
  }
  6.VibrationParameters  震动参数
  {
    1.PPV
    2.Ve
    3.Va
    4.RMS
  }
*/
