using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todo_angular_redux.Models
{
    public class Todo
    {

        //id: number;
        //description: string;
        //responsible: string;
        //priority: string;
        //isCompleted: boolean;

        public int Id { get; set; }

        public string Description { get; set; }

        public string Responsible { get; set; }

        /// <summary>
        /// Gets or sets the priority (high, medium, low)
        /// </summary>
        public string Priority { get; set; }

        public bool IsCompleted { get; set; }
    }
}
