using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ClientManagerPortal.NET_Core.Angular.core.Models;
using AutoMapper;
using ClientManagerPortal.NET_Core.Angular.Presistance;

namespace ClientManagerPortal.NET_Core.Angular.API
{
    [Produces("application/json")]
    
    public class ClientsController : Controller
    {
        private List<Client> clients;
        private readonly IMapper mapper;
        public ClientsController(IMapper mapper)
        {
            clients = new List<Client>()
            {
                new Client()
                {
                    Id=1, 
                    Name="Client 1",
                    Projects={
                        new Project(){Id=1, Name="Project 1"},
                        new Project(){Id=2, Name="Project 2",},
                        new Project(){Id=3, Name="Project 3"},
                    }
                    
                },

                new Client()
                {
                    Id=2, 
                    Name="Client 2",
                    Projects={
                        new Project(){Id=1, Name="Project 1"},
                        new Project(){Id=2, Name="Project 2",},
                        new Project(){Id=3, Name="Project 3"},
                        new Project(){Id=4, Name="Project 4"},
                    }
                    
                },
                new Client()
                {
                    Id=3, 
                    Name="Client 3",
                    Projects={
                        new Project(){Id=1, Name="Project 1"},
                        new Project(){Id=2, Name="Project 2",},
                        new Project(){Id=3, Name="Project 3"},
                    }
                    
                },new Client()
                {
                    Id=4, 
                    Name="Client 4",
                    Projects={
                        new Project(){Id=1, Name="Project 1"},
                        new Project(){Id=2, Name="Project 2",},
                        new Project(){Id=3, Name="Project 3"},
                    }
                    
                },
            };
            this.mapper = mapper;
        }

        [HttpGet]
        [Route("api/Clients")]
        public IActionResult GetAll()
        {
            List<ClientPresistance> res = mapper.Map<List<Client>, List<ClientPresistance>>(clients);
            return Ok(res);
        }

        [HttpGet]
        [Route("api/Clients/{id}")]
        public IActionResult GetOne(int id)
        {
            Client client;
            client = clients.SingleOrDefault(c=>c.Id==id);
            if(client==null){
                return NotFound();
            }
                
            return Ok(client);
        }

        [HttpDelete]
        [Route("api/Clients/{id}")]
        public IActionResult Delete(int id)
        {
          //TODO: Implement Realistic Implementation
          var c = this.clients.Find(obj=>obj.Id==id);
          this.clients.Remove(c);
          return Ok();
        }

        [HttpPost]
        [Route("api/Clients")]
        public IActionResult Add(ClientPresistance client)
        {
            var c = mapper.Map<Client>(client);
            c.Id = clients.Last().Id+1;
            this.clients.Add(c);
            return Ok(c);
        }
    }
}