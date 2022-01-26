using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskList.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class TaskController
    {
        TaskDAL db = new TaskDAL();

        [HttpGet("Search/{name}")]
        public List<Task> SearchTasks(string name)
        {
            return db.SearchTask(name);
        }

        [HttpGet]
        public List<Task> GetTasks()
        {
            return db.GetTask();
        }

        [HttpPost("New")]
        public void NewTasks(Task t)
        {
            db.NewTask(t);
        }
        [HttpDelete("Delete/{id}")]
        public void DeleteTasks(int id)
        {
            db.DeleteTask(id);
        }

        [HttpPut("Edit")]
        public void EditTasks(Task t)
        {
            db.EditTask(t);
        }

    }
}

