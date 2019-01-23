import React, {Component,Fragment} from 'react'
import {BASEURL,GETHEADERS,POSTHEADERS} from './api'
import {getReq,postReq} from 'network-request-bywhj'
import {transferDatas} from 'js-fun-bywhj'
class Test extends Component{
  constructor(props,context){
    super(props,context);
    //性能优化
    this.getData = this.getData.bind(this);
    this.addData = this.addData.bind(this);
    this.delData = this.delData.bind(this);
    this.editData = this.editData.bind(this);
    this.getByPage = this.getByPage.bind(this);
  }
  addData(){
    getReq(transferDatas(`${BASEURL}/addData`, {
      name: 'Chuncki s',
      age: 55
    }, 'get'), GETHEADERS, (responseData) => {
      console.log(responseData);
    })
  }
  delData(){//单个或批量删除
    let idArr = JSON.stringify([
      "5c45ba9586ab071ff89396c1",
      "5c45ba9586ab071ff89396bf"
    ])
    getReq(transferDatas(`${BASEURL}/delData`, {
      id: idArr
    }, 'get'), GETHEADERS, (responseData) => {
      console.log(responseData);
    })
  }
  editData(){
    getReq(transferDatas(`${BASEURL}/editData`, {
      id:"5c46b041dd57fd6da0e5b875",
      name:"查查查",
      hobby:'["xxx","yyy","zzz"]',
    }, 'get'), GETHEADERS, (responseData) => {
      console.log(responseData);
    })
  }
  getData(){
    getReq(transferDatas(`${BASEURL}/getData`, {}, 'get'), GETHEADERS, (responseData) => {
      console.log(responseData);
    })
  }
  getByPage(){
    getReq(transferDatas(`${BASEURL}/getByPage`, {
      pageSize: 10,
      pageNum:1,
      id:'5c45ba9686ab071ff89396c5'
    }, 'get'), GETHEADERS, (responseData) => {
      console.log(responseData);
    })
  }
  render(){
    return(
      <Fragment>
        <button onClick={this.addData}>增</button>
        <button onClick={this.delData}>删</button>
        <button onClick={this.editData}>改</button>
        <button onClick={this.getData}>查</button>
        <button onClick={this.getByPage}>分页查</button>
      </Fragment>
    )
  }
}
export default Test
