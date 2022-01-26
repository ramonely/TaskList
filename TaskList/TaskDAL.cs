using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskList
{
    public class TaskDAL
    {
        public List<Task> SearchTask(string name)
        {
            string sql = $"select * from TaskList where (OwnerName like '%{name}%')";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Task> t = connect.Query<Task>(sql).ToList();
                connect.Close();

                return t;
            };

        }

        public List<Task> GetTask()
        {
            string sql = $"select * from TaskList";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Task> t = connect.Query<Task>(sql).ToList();
                connect.Close();

                return t;
            };

        }
        public void NewTask(Task t)
        {
            string sql = $"insert into TaskList (id, ownerName, details, dueDate, completed) values (0,'{t.OwnerName}','{t.Details}','{t.DueDate}', '{t.Completed}')";

            using (var connect = new MySqlConnection(Secret.Connection))

            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }

        }

        public void DeleteTask(int id)
        {
            string sql = $"delete from tasklist where id ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }
        }

        public void EditTask(Task t)
        {
            string sql = $"update TaskList set ownerName = '{t.OwnerName}', details = '{t.Details}', dueDate = '{t.DueDate}', completed = '{t.Completed}' where id ={t.Id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }
        }

    }
}
