import request from '@/utils/request'


//获取掘进参数
export function TunnellingList(data) {
  return request({
    url: 'https://ca4ed109-95eb-4baf-ba09-8d5bccc3c3c6.mock.pstmn.io/api/Tunnelling',
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
    url: 'https://ca4ed109-95eb-4baf-ba09-8d5bccc3c3c6.mock.pstmn.io/api/GradingCurve',
    method: 'get',
    data
  })
}

// 1.level 围岩级别
// 2.strength  单轴抗压强度
// 3.IntegrityCoefficient  完整性系数
// 4.GradingCurve  集配曲线
// 5.VibrationParameters  震动参数
/* {
      1.dmax
      2.cu
      3.Cc
      4.CI
  }
*/
