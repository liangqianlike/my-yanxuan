import ajax from './ajax'

const BASE = '/api'

//首页数据
export const reqMockHome = () => ajax('/mock/home')

//分类数据
export const reqMockClassify = () => ajax('/mock/category')

//获取搜索关键字
export const reqSearchComplete = (data) => ajax(`${BASE}/xhr/search/searchAutoComplete.json?keywordPrefix=${data}`)
// reqSearchComplete('a').then(result=>{
//   console.log(result)
// })

//获取热门搜索的关键字
export const reqHotSearch = ()=> ajax(`${BASE}/xhr/search/init.json`)
// reqSearchHot().then(result=>{
//   console.log(result)
// })