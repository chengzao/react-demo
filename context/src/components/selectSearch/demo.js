import React, { Component } from 'react'
import PinYin1 from './select'

var options = [
  { "value": "110100", "label": "北京市" },
  { "value": "120100", "label": "天津市" },
  { "value": "130100", "label": "石家庄市" },
  { "value": "130200", "label": "唐山市" },
  { "value": "130300", "label": "秦皇岛市" },
  { "value": "130400", "label": "邯郸市" },
  { "value": "130500", "label": "邢台市" },
  { "value": "130600", "label": "保定市" },
  { "value": "130700", "label": "张家口市" },
  { "value": "130800", "label": "承德市" },
  { "value": "130900", "label": "沧州市" },
  { "value": "131000", "label": "廊坊市" },
  { "value": "131100", "label": "衡水市" },
  { "value": "140100", "label": "太原市" },
  { "value": "140200", "label": "大同市" },
  { "value": "140300", "label": "阳泉市" },
  { "value": "140400", "label": "长治市" }
];


export default class Select1 extends Component {

  handleChange(val) {
    console.log('选择了：', val);
  }
  render() {
    return (
      <div style={{ width: 300 }}>
        <PinYin1
          name="cityName"
          // value="110100"
          options={options}
          onChange={this.handleChange}
          menuPositionunion='absolute'
          menuShouldBlockScroll={true}
        >
        </PinYin1>
      </div>
    )
  }
}
