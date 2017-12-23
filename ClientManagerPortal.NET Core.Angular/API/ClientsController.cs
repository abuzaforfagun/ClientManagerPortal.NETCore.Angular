using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ClientManagerPortal.NET_Core.Angular.core.Models;

namespace ClientManagerPortal.NET_Core.Angular.API
{
    [Produces("application/json")]
    
    public class ClientsController : Controller
    {
        private List<Client> clients;
        public ClientsController()
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
        }

        [HttpGet]
        [Route("api/Clients")]
        public IActionResult GetAll()
        {
            return Ok(clients);
        }

        [HttpGet]
        [Route("api/Clients/{id}")]
        public IActionResult GetOne(int id)
        {
            Client client;
            try
            {
                client = clients.Find(c => c.Id == id);
            }

            catch(Exception ex)
            {
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
    }
}