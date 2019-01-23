//仅是新增学生集合
const student = require('../../dataBase/school/student')
exports.studentAdd = (req,res)=>{
  new student({ //修改时，只改这里的key：value
    name:req.query.name,
    age:req.query.age
  }).save((err,data)=>{
    console.log(data);
    if(err){
      res.send({
        msg:'添加失败',
        code:-1
      })
    }else{
      res.send({
        msg:'添加成功',
        code:0
      })
    }
  })
}

//仅是新增xxx集合
// const xxx = require('../../dataBase/yyy/xxx')
// exports.xxxAdd = (req,res)=>{
//   new xxx({
//     name:req.query.name,
//     age:req.query.age
//   }).save((err,data)=>{
//     console.log(data);
//     if(err){
//       res.send({
//         msg:'添加失败',
//         code:-1
//       })
//     }else{
//       res.send({
//         msg:'添加成功',
//         code:0
//       })
//     }
//   })
// }
