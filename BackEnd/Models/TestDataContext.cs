using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApi_Moscow.Models
{
    public class TestDataContext_model
    {
        [Key]
        public int field1 { get; set; }
        public int field2 { get; set; }
    }

    public class TestDataContext : DbContext
    {
        public TestDataContext() : base("TestDataWoscow2021Connection") { }

        public DbSet<TestDataContext_model> Model { get; set; }


    }

    public class DbTestDataInitializer : CreateDatabaseIfNotExists<TestDataContext>
    {
        protected override void Seed(TestDataContext context)
        {
            context.Model.Add(new TestDataContext_model { field1 = 0, field2=1 });
            context.Model.Add(new TestDataContext_model { field1 = 3, field2= 4 });
        }
    }
}