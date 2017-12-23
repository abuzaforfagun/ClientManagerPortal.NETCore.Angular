'use strict';

export const clients:any[]=[];
var client1={
    Id:1,
    Name:"Client 1",
    Projects:[
      {
        Id: 1,
        Name: "Project 1"
      },
      {
        Id: 2,
        Name: "Project 2"
      }
    ]
  };
  var client2={
    Id:2,
    Name:"Client 2",
    Projects:[
      {
        Id: 1,
        Name: "Project 1"
      },
      {
        Id: 2,
        Name: "Project 2"
      },
      {
        Id: 3,
        Name: "Project 3"
      }
    ]
  };
  clients.push(client1);
  clients.push(client2);