using System.Collections.Generic;

namespace ClientManagerPortal.NET_Core.Angular.core.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Project> Projects { get; set; }
        public Client()
        {
            Projects = new List<Project>();
        }
    }
}