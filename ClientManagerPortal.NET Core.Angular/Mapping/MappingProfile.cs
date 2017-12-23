using AutoMapper;
using ClientManagerPortal.NET_Core.Angular.core.Models;
using ClientManagerPortal.NET_Core.Angular.Presistance;
using System.Collections.Generic;

namespace ClientManagerPortal.NET_Core.Angular.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile(){
            CreateMap<Client, ClientPresistance>()
                .ForMember(cp => cp.Projects, opt => opt.MapFrom(c=>c.Projects.Count));
            
        }
    }
}