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
// 撒大声地ad

//添加集配曲线
export function GradingCurve(data) {
  return request({
    url: 'https://ca4ed109-95eb-4baf-ba09-8d5bccc3c3c6.mock.pstmn.io/api/GradingCurve',
    method: 'get',
    data
  })
}

// Curve

