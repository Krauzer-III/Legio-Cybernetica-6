using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;

namespace WebApi_Moscow.Models
{
    public class DataContext : DbContext
    {
        public DataContext() : base("DataWoscow2021Connection") 
        {
            /*Database.SetInitializer(new DbDataInitializer(this));
            Database.Initialize(true);      */

        }

        public DbSet<FinalData> FinalDatas { get; set; }
    }


    public class DbDataInitializer : CreateDatabaseIfNotExists<DataContext>
    {
        /*public DbDataInitializer(DataContext context) 
        {
            Seed(context);
        }     */

        protected override void Seed(DataContext context)
        {
            DataTable dt = new DataTable();
            using (StreamReader sr = new StreamReader(System.Configuration.ConfigurationManager.AppSettings["CSV_File"]))
            {
                var headers = sr.ReadLine().Split('|');
                
                foreach (var item in headers)
                {
                    dt.Columns.Add(item);
                }

                while (!sr.EndOfStream)
                {
                    var row = sr.ReadLine().Split('|');
                    DataRow dr = dt.NewRow();
                    for (int i = 0; i < row.Length; i++)
                    {
                        dr[i] = row[i];
                    }
                    dt.Rows.Add(dr);
                }
            }

            foreach(var dr in dt.Rows.Cast<DataRow>())
            {
                var geo = geomerty(dr["geometry"].ToString());
                var result = new FinalData
                {
                    cell_zid = dr["cell_zid"].ToString(),
                    adm_zid = dr["adm_zid"].ToString(),
                    adm_name = dr["adm_name"].ToString(),
                    okrug_name = dr["okrug_name"].ToString(),
                    sub_ter = dr["sub_ter"].ToString(),
                    okrug_id = dr["okrug_id"].ToString(),
                    area = dr["area"].ToString(),
                    customers_cnt_home = dr["customers_cnt_home"].ToString(),
                    customers_cnt_job = dr["customers_cnt_job"].ToString(),
                    customers_cnt_day = dr["customers_cnt_day"].ToString(),
                    customers_cnt_move = dr["customers_cnt_move"].ToString(),
                    served = dr["served"].ToString(),
                    geometry_1 = geo[0],
                    geometry_2 = geo[1]
                };
                context.FinalDatas.Add(result);
            }
            context.SaveChanges();


            string[] geomerty(string s)
            {
                s = s.Replace("POLYGON ((", "");
                s = s.Replace("))", "");

                List<string> l = s.Split(',').ToList();
                l.RemoveAt(4);
                l.RemoveAt(3);
                l.RemoveAt(1);

                l[0] = FormatForYandex(l[0].Trim());
                l[1] = FormatForYandex(l[1].Trim());

                return l.ToArray();

                string FormatForYandex(string c)
                {
                    var tmp = c.Split(' ');
                    return tmp[1] + ", " + tmp[0];
                }
            }
        }
    }


}