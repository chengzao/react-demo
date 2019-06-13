import { fromJS } from 'immutable'

const obj = { 'name': "xiaoming", 'age': 12 }

const map = fromJS(obj)

console.log(map.get('name'))
