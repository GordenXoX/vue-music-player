// import datajsons from '@/components/recommend/recommend_data.json'
import datajsons from '@/components/recommend/recommend_data_qing.json'
const Mock = require('mockjs')
// const Random = Mock.Random
const domain = 'http://mockjs.com/api'
const code = 200


const postData = req => {

  let posts = []
  // posts.push(datajsons)

  return {datajsons}
}

Mock.mock(`${domain}/recommendData`,'get',postData);
