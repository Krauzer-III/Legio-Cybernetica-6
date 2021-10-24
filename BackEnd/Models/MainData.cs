using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace WebApi_Moscow.Models
{
    public static class MainData
    {
        public static DataTable dt = null;

        public static void GetALL_JSON()
        {
            using (StreamReader sr = new StreamReader(ConfigurationManager.AppSettings["CSV_File"]))
            {
                var headers = sr.ReadLine().Split('|');
                dt = new DataTable();
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
        }
    }


    public class FinalData
    {
        public string cell_zid { get; set; }//ID ячейки 500х500 
        public string adm_zid { get; set; }//ID административного деления  
        public string adm_name { get; set; }//название района  
        public string okrug_name { get; set; }//навзание округа 
        public string sub_ter { get; set; }//Старая/Новая Москва 
        public string okrug_id { get; set; }//ID округа
        public string area { get; set; }//площадь района
        public string customers_cnt_home { get; set; }//Количество человек, проживающих на территории сектора  
        public string customers_cnt_job { get; set; }//Количество человек, работающих на территории сектора  
        public string customers_cnt_day { get; set; }//Количество человек, которые находились на территории сектора по будням в дневное время чаще, чем в любых других секторах, в рассматриваемый месяц   
        public string customers_cnt_move { get; set; }//Количество человек, проживающих на территории сектора и имеющих разъездную работу   
        public string served { get; set; }//обслуживается ли поликлинникой(искомый признак)
        public string geometry_1 { get; set; }//координаты
        public string geometry_2 { get; set; }//координаты
    }


}