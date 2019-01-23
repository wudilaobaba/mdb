//所有集合的 删-改-查  通用！！！

//增：看createData.js

//删(单个删除和批量删除)
exports.delData = (dataBase,collection)=>{
  let coll =  require(`../../dataBase/${dataBase}/${collection}`)
  let fun = (req,res)=>{
    if(req.query.id[0]!=='['){
      coll.remove({'_id':req.query.id},(err,data)=>{
        if(err){
          res.send({
            msg:'删除失败',
            code:-1
          })
        }else{
          if(data.n===0){
            res.send({
              msg:'删除失败',
              code:-1
            })
          }else{
            res.send({
              msg:'删除成功',
              data,
              code:0
            })
          }
        }
      })
    }else{
      let flagArr = [];
      let errId = [];
      JSON.parse(req.query.id).map((item,index)=>{
        coll.remove({'_id':item},(err,data)=>{ //此处是异步代码！！！！！！！！！！！！！
          flagArr.push({id:item,type:data.n});
        })
      })
      setTimeout(()=>{
        flagArr.map((item,index)=>{
          if(item.type===0){
            errId.push(item.id)
          }
        })
        console.log(errId);
        res.send({
          msg:errId.length===0?'删除成功':'删除异常',
          errId,
          code:errId.length===0?0:-1,
        })
      },500)
    }
  }
  return fun;
}

//改(单个修改)
exports.editData = (dataBase,collection)=>{
  let coll =  require(`../../dataBase/${dataBase}/${collection}`)
  let fun = (req,res)=>{
    let id = req.query.id;
    delete req.query['id']
    if(!id){
      res.send({
        msg:'修改失败',
        code:-1
      });
    }else{
      coll.eidt({'_id':id}, req.query, {}, ()=>{//callback没有参数
        res.send({
          msg:'修改成功',
          code:0
        });
      })
    }
  }
  return fun;
}

//普通查询 req.query为查询条件
exports.getData = (dataBase,collection)=>{
  let coll =  require(`../../dataBase/${dataBase}/${collection}`)
  let fun = (req,res)=>{
    let searchObj = JSON.parse(JSON.stringify(req.query).replace(/id/g,'_id'));
    coll.getNormal(searchObj,(err,data)=>{
      res.send(data);
    })
  }
  return fun;
}

//分页查询
exports.getByPage = (dataBase,collection)=>{
  let coll =  require(`../../dataBase/${dataBase}/${collection}`)
  let fun = (req,res)=>{
    coll.getByPage(req.query, (err,data)=>{
      if(err){
        res.send({
          msg:err,
          code:-1
        })
      }else{
        res.send({
          data,
          code:0
        })
      }
    })
  }
  return fun;
}
