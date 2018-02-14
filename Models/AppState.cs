using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todo_angular_redux.Models
{
    public class AppState
    {

        public ICollection<Todo> Todos { get; set; }

        public DateTime LastUpdate { get; set; }
    }
}
