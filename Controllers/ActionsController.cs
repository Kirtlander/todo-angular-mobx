using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace todo_angular_redux.Controllers
{
    [Route("api/[controller]")]
    public class ActionsController : Controller
    {



        public async Task<IActionResult> Post([FromBody] dynamic action)
        {
            //if (action.)

            return Ok();
        }

        public async Task<IActionResult> DispatchAction([FromBody] dynamic action)
        {

            return Ok();
        }

        public async Task<IActionResult> DispatchActions([FromBody] List<dynamic> actions)
        {

            return Ok();
        }

    }
}
