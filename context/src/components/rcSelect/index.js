/* eslint no-console: 0 */

import React from 'react'
// import Select, { Option } from 'rc-select'
// import 'rc-select/assets/index.css'
import Select, { Option } from '../../rcSelect/index'
// import '../../rcSelect/index.css'
// import pinyin from 'pinyin'
// import pinyinlite from 'pinyinlite/index_full'
import pinyinlite from '../../pinyinLite/index'
// require('string_score')

// console.log('aaaa', pinyinlite('增长-渝北'))

// console.log('hello world'.score('he'))

function onChange(value) {
  console.log(`change ${value}`)
}

function onSearch(value) {
  console.log(`selected ${value}`)
}

// console.log(
//   pinyin('增长-渝北', { heteronym: true, style: pinyin.STYLE_NORMAL }),
// )

function charToPinyin(txt) {
  // return pinyin(txt, { heteronym: true, style: pinyin.STYLE_NORMAL }).join(' ')
  return pinyinlite(txt).join(' ')
}

// function cartesianProductOf() {
//   return Array.prototype.reduce.call(
//     arguments,
//     function(a, b) {
//       var ret = []
//       a.forEach(function(a) {
//         b.forEach(function(b) {
//           ret.push(a.concat([b]))
//         })
//       })
//       return ret
//     },
//     [''],
//   )
// }

// let res = cartesianProductOf(['1', '3'], ['a', 'b'])

// console.log('res', res)

let arr = ['中心', '多音字', '模式', '北京', '重庆', '地球']

const RcSelect = () => (
  <div>
    <h2>Select optionFilterProp</h2>
    <div style={{ width: 100 }}>
      <Select
        defaultValue="张三"
        style={{ width: '100%' }}
        placeholder="placeholder"
        optionFilterProp="desc"
        onChange={onChange}
        onSearch={onSearch}
        dropdownStyle={{ maxHeight: '100px', overflow: 'auto' }}
      >
        <Option value="张三" desc="张三 zhang san">
          张三
        </Option>
        <Option value="李四" desc="李四 li si">
          李四
        </Option>
        <Option value="王五" desc="王五 wang wu">
          王五
        </Option>
        {arr.map((item, index) => {
          let _pinyin = charToPinyin(item)
          return (
            <Option key={index} desc={`${item} ${_pinyin}`} value={item}>
              {item}
            </Option>
          )
        })}
      </Select>
    </div>
  </div>
)

export default RcSelect
