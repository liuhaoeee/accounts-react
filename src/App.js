import React, { Component } from 'react';

import CapitalList from './capital_list'

class App extends Component {
  render() {
    const test_data = {
      "data": [
          {
              "amount": 10.16,
              "type": "gain",
              "time": "2018-12-18T07:06:30.445Z",
              "order": "ORD20181211134005OALNDR"
          },
          {
              "amount": 50,
              "type": "gain",
              "time": "2018-12-18T07:06:30.409Z",
              "order": "ORD20180918100101uFTqiK"
          },
          {
              "amount": 5,
              "type": "gain",
              "time": "2018-12-18T07:06:12.711Z",
              "order": "ORD20181218093613VCPHJD"
          },
          {
              "amount": 15,
              "type": "gain",
              "time": "2018-12-18T07:06:12.446Z",
              "order": "ORD20181218093613SXSJMC"
          },
          {
              "amount": 15,
              "type": "gain",
              "time": "2018-12-18T07:06:11.406Z",
              "order": "ORD20181218093613ICCJZL"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-18T01:36:14.118Z",
              "order": "ORD20181218093613ICCJZL"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-18T01:36:13.950Z",
              "order": "ORD20181218093613VCPHJD"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-18T01:36:13.777Z",
              "order": "ORD20181218093613SXSJMC"
          },
          {
              "amount": 15,
              "type": "gain",
              "time": "2018-12-17T07:06:27.538Z",
              "order": "ORD20181214144527URMXGH"
          },
          {
              "amount": 5,
              "type": "gain",
              "time": "2018-12-17T03:36:12.698Z",
              "order": "ORD20181214180513BDAWLB"
          },
          {
              "amount": 5,
              "type": "gain",
              "time": "2018-12-17T03:36:12.423Z",
              "order": "ORD20181214180514GFPPSO"
          },
          {
              "amount": 5,
              "type": "gain",
              "time": "2018-12-17T03:36:11.854Z",
              "order": "ORD20181214180514TCHSLV"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-14T10:05:14.401Z",
              "order": "ORD20181214180514GFPPSO"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-14T10:05:14.236Z",
              "order": "ORD20181214180514TCHSLV"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-14T10:05:14.046Z",
              "order": "ORD20181214180513BDAWLB"
          },
          {
              "amount": 5,
              "type": "gain",
              "time": "2018-12-14T07:06:10.939Z",
              "order": "ORD20181214093500AXZCOC"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-14T06:45:25.158Z",
              "order": "ORD20181214144527URMXGH"
          },
          {
              "amount": 5,
              "type": "gain",
              "time": "2018-12-14T03:36:12.438Z",
              "order": "ORD20181213180513YBQZXD"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-14T01:35:04.685Z",
              "order": "ORD20181214093500AXZCOC"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-13T10:05:14.042Z",
              "order": "ORD20181213180513YBQZXD"
          },
          {
              "amount": 5,
              "type": "gain",
              "time": "2018-12-13T07:06:13.358Z",
              "order": "ORD20181213100214xOTWqb"
          },
          {
              "amount": 5,
              "type": "gain",
              "time": "2018-12-13T07:06:12.951Z",
              "order": "ORD20181213093611PUTVRL"
          },
          {
              "amount": 15,
              "type": "gain",
              "time": "2018-12-13T03:36:11.997Z",
              "order": "ORD20181212180512LBQQKI"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-13T02:02:17.304Z",
              "order": "ORD20181213100214xOTWqb"
          },
          {
              "amount": 10,
              "type": "buy",
              "time": "2018-12-13T01:36:11.418Z",
              "order": "ORD20181213093611PUTVRL"
          }
      ],
      "total": 682,
      "message": "以下是近30天的明细"
  }
    return (
      <div>
          <CapitalList data={test_data.data}></CapitalList>
      </div>
    );
  }
}

export default App;
