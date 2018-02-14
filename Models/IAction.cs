using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todo_angular_redux.Models
{
    public interface IAction
    {
        string Type { get; set; }
    }
}
