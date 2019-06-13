import React from 'react'
import xtend from 'xtend'
import pinyinlite from 'pinyinlite'
import Select from 'react-select'

export default props => {
  const passProps = () => {
    const propsWithPinyin = xtend(
      {
        filterOption: (op, filterValue) => {
          var valueText = String(op.data.value),
            labelText = String(op.data.label),
            pinyinText = String(op.data.pinyin),
            pyText = String(op.data.py)

          let ret = !filterValue
            ? pinyinText.substr(0, filterValue.length) === filterValue ||
              pyText.substr(0, filterValue.length) === filterValue ||
              valueText.toLowerCase().substr(0, filterValue.length) ===
                filterValue ||
              labelText.toLowerCase().substr(0, filterValue.length) ===
                filterValue
            : pinyinText.indexOf(filterValue.toLowerCase()) >= 0 ||
              pyText.indexOf(filterValue.toLowerCase()) >= 0 ||
              valueText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0 ||
              labelText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0

          // console.log('ret', ret)

          return ret
        },
        noResultsText: '找不到结果，请重新搜索',
        clearAllText: '清除所有已选',
        clearValueText: '清除已选',
        placeholder: '请选择...',
        searchPromptText: '请输入搜索',
      },
      props,
    )
    if (propsWithPinyin.options.length === 0) {
      propsWithPinyin.value = ''
    }
    propsWithPinyin.options.map(option => {
      option.pinyin = pinyinlite(option.label)
        .join('')
        .toLowerCase()
      option.py = pinyinlite(option.label)
        .map(label => label.toString().substr(0, 1))
        .join('')
        .toLowerCase()
      return option
    })
    return propsWithPinyin
  }
  return <Select {...passProps()} />
}
