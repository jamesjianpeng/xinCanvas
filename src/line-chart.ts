// import { Params, VL, HL, EL } from '../type.d'

export type VL = string | number
export type HL = string

export interface Params {
  el: HTMLElement,
  VLine: VL[],
  HLine: HL[]
}

export default class XinCanvas {
    el: HTMLElement;
    VLine: VL[]
    HLine: HL[]

    constructor(data: Params) {
      console.log(data)
      this.el = data.el
      this.VLine = data.VLine
      this.HLine = data.HLine
      this.init()
    }

    init() {
      const canvas: HTMLCanvasElement = document.createElement('canvas')
      if (!canvas || !canvas.getContext) {
        return
      }
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'green'
      ctx.strokeStyle = 'red'
      ctx.lineWidth = 2
      ctx.beginPath();
      //定义直线的起点坐标为(10,10)
      ctx.moveTo(0, 0)

      ctx.lineTo(100, 100)
      ctx.stroke();
      ctx.fill();
      //关闭当前的绘制路径
      ctx.closePath();

      this.el.appendChild(canvas)
    }

}
