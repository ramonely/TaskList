using System;
using System.ComponentModel.DataAnnotations;

namespace TaskList
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        public string OwnerName { get; set; }
        public string Details { get; set; }
        public string DueDate { get; set; }
        public string Completed { get; set; }
    public Task(string owner, string details, string dueDate, string completed)
        {
            this.OwnerName = owner;

            this.Details = details;

            this.DueDate = dueDate;

            this.Completed = completed;
        }

        public Task()
        {

        }

    }
}

