import React from 'react'
import pinyin from 'pinyin'

import Select from 'react-select'

import xtend from 'xtend'

export default class PinYin1 extends React.Component {
  getProps() {
    var props = xtend({
      filterOption: function (op, filterValue) {
        // Forked from Select.js
        var valueText = String(op.data.value),
          labelText = String(op.data.label),
          pinyinText = String(op.data.pinyin),
          pyText = String(op.data.py);

        let ret = !filterValue ? (
          pinyinText.substr(0, filterValue.length) === filterValue ||
          pyText.substr(0, filterValue.length) === filterValue ||

          valueText.toLowerCase().substr(0, filterValue.length) === filterValue ||

          labelText.toLowerCase().substr(0, filterValue.length) === filterValue
        ) : (
            pinyinText.indexOf(filterValue.toLowerCase()) >= 0 ||
            pyText.indexOf(filterValue.toLowerCase()) >= 0 ||

            valueText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0 ||

            labelText.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0
          )

        // console.log('ret', ret)

        return ret;
      },
      noOptionsMessage: () => '不到结果，请重新搜索',
      clearAllText: '清除所有已选',
      clearValueText: '清除已选',
      placeholder: '请选择...',
      searchPromptText: '请输入搜索',
      maxMenuHeightnumber: '100px'
    }, this.props);
    if (props.options.length === 0) {
      props.data.value = '';
    }
    props.options.forEach(function (option) {
      option.pinyin = pinyin(option.label, {
        style: pinyin.STYLE_NORMAL
      }).join('').toLowerCase();
      option.py = pinyin(option.label, {
        style: pinyin.STYLE_FIRST_LETTER
      }).join('').toLowerCase();
      return option;
    });
    return props;
  }
  render() {
    return <Select {...this.getProps()} />;
  }
}
