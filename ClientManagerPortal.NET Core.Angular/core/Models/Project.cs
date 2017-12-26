using System.Collections.Generic;

namespace ClientManagerPortal.NET_Core.Angular.core.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ProjectType ProjectType { get; set; }
        public List<Technology> Technologies { get; set; }
        public Client Client { get; set; }
    }
}