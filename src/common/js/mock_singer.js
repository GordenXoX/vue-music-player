import singerData from '@/components/singer/singers_data.js'

const Mock = require('mockjs')
const domain = 'http://mockjs.com/api'
const code = 0

const postData = req =>{
  let post = []

  singerData.forEach((item,index)=>{
    let obj = {
      "country": item.country,
      "singer_id": item.singer_id,
      "singer_img": `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.singer_mid}.jpg?max_age=2592000`,
      "singer_name": item.singer_name,
    }
    let num = singerData.length;
    ssnum(obj,num,index,27)

    post.push(obj)
  })

  return {
    code,
    data: post
  }
}

Mock.mock(`${domain}/singerData`, 'get' , postData)

function ssnum( obj,num,index,cut){
  if(num/cut > index){
    obj= Object.assign(obj,{index: -100})
  } else if(num - num/cut < index){
    obj= Object.assign(obj,{index: 26})
  }else if(num - 2*(num/cut) < index){
    obj= Object.assign(obj,{index: 25})
  }else if(num - 3*(num/cut) < index){
    obj= Object.assign(obj,{index: 24})
  }else if(num - 4*(num/cut) < index){
    obj= Object.assign(obj,{index: 23})
  }else if(num - 5*(num/cut) < index){
    obj= Object.assign(obj,{index: 22})
  }else if(num - 6*(num/cut) < index){
    obj= Object.assign(obj,{index: 21})
  }else if(num - 7*(num/cut) < index){
    obj= Object.assign(obj,{index: 20})
  }else if(num - 8*(num/cut) < index){
    obj= Object.assign(obj,{index: 19})
  }else if(num - 9*(num/cut) < index){
    obj= Object.assign(obj,{index: 18})
  }else if(num - 10*(num/cut) < index){
    obj= Object.assign(obj,{index: 17})
  }else if(num - 11*(num/cut) < index){
    obj= Object.assign(obj,{index: 16})
  }else if(num - 12*(num/cut) < index){
    obj= Object.assign(obj,{index: 15})
  }else if(num - 13*(num/cut) < index){
    obj= Object.assign(obj,{index: 14})
  }else if(num - 14*(num/cut) < index){
    obj= Object.assign(obj,{index: 13})
  }else if(num - 15*(num/cut) < index){
    obj= Object.assign(obj,{index: 12})
  }else if(num - 16*(num/cut) < index){
    obj= Object.assign(obj,{index: 11})
  }else if(num - 17*(num/cut) < index){
    obj= Object.assign(obj,{index: 10})
  }else if(num - 18*(num/cut) < index){
    obj= Object.assign(obj,{index: 9})
  }else if(num - 19*(num/cut) < index){
    obj= Object.assign(obj,{index: 8})
  }else if(num - 20*(num/cut) < index){
    obj= Object.assign(obj,{index: 7})
  }else if(num - 21*(num/cut) < index){
    obj= Object.assign(obj,{index: 6})
  }else if(num - 22*(num/cut) < index){
    obj= Object.assign(obj,{index: 5})
  }else if(num - 23*(num/cut) < index){
    obj= Object.assign(obj,{index: 4})
  }else if(num - 24*(num/cut) < index){
    obj= Object.assign(obj,{index: 3})
  }else if(num - 25*(num/cut) < index){
    obj= Object.assign(obj,{index: 2})
  }else if(num - 26*(num/cut) < index){
    obj= Object.assign(obj,{index: 1})
  }
  // for(let i=0; i<cut; i++){
  //   else if(num - num/cut > index){
  //       obj= Object.assign(obj,{index: 1})
  //     }
  // }

}
