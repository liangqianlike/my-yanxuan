import ajax from './ajax'

const BASE = '/api'

//首页数据
export const reqMockHome = () => ajax('/mock/home')