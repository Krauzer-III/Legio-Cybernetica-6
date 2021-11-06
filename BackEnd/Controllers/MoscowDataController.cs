using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using WebApi_Moscow.Models;

namespace WebApi_Moscow.Controllers
{
    public class MoscowDataController : Controller
    {
        [HttpGet]
        public JsonResult GetByID(int id)
        {
            if (MainData.dt == null)
            {
                MainData.GetALL_JSON();
            }

            var dt = MainData.dt;

            string ID = id.ToString();

            DataRow dr = null;

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                if (dt.Rows[i][0].ToString() == ID)
                {
                    dr = dt.Rows[i];
                    break;
                }
            }


            if (dr == null)
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
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
                predictions = dr["predicted"].ToString(),
                geometry_1 = geo[0],
                geometry_2 = geo[1]
            };

            return Json(result, JsonRequestBehavior.AllowGet);

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


        [HttpGet]
        public JsonResult Get50(int i)
        {
            const int count = 50;
            if (MainData.dt == null)
            {
                MainData.GetALL_JSON();
            }
            FinalData[] result = new FinalData[count];



            var arr = MainData.listresult.ToArray();
            if (i * count < arr.Length)
            {
                try
                {
                    Array.Copy(arr, count * i, result, 0, count);
                }
                catch
                {

                    Array.Copy(arr, count * i, result, 0, arr.Length - 1 - count * i);
                }
            }


            return Json(result, JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public JsonResult Get100(int i)
        {
            const int count = 100;
            if (MainData.dt == null)
            {
                MainData.GetALL_JSON();
            }
            FinalData[] result = new FinalData[count];




            var arr = MainData.listresult.ToArray();
            if (i * count < arr.Length)
            {
                try
                {
                    Array.Copy(arr, count * i, result, 0, count);
                }
                catch
                {

                    Array.Copy(arr, count * i, result, 0, arr.Length - 1 - count * i);
                }
            }


            return Json(result, JsonRequestBehavior.AllowGet);

        }

        [HttpGet]
        public JsonResult Get500(int i)
        {
            const int count = 500;
            if (MainData.dt == null)
            {
                MainData.GetALL_JSON();
            }
            FinalData[] result = new FinalData[count];




            var arr = MainData.listresult.ToArray();
            if (i * count < arr.Length)
            {
                try
                {
                    Array.Copy(arr, count * i, result, 0, count);
                }
                catch
                {

                    Array.Copy(arr, count * i, result, 0, arr.Length - 1 - count * i);
                }
            }


            return Json(result, JsonRequestBehavior.AllowGet);

        }


        [HttpGet]
        public JsonResult GetAllMini()
        {
            if (MainData.dt == null)
            {
                MainData.GetALL_JSON();
            }
            miniFinalData[] result = new miniFinalData[MainData.listresult.Count];

            for (int i = 0; i < MainData.listresult.Count; i++)
            {
                result[i] = new miniFinalData
                {
                    ID = i,
                    geometry_1 = MainData.listresult[i].geometry_1,
                    geometry_2 = MainData.listresult[i].geometry_2,
                    predictions = MainData.listresult[i].predictions
                };
            }


            return Json(result, JsonRequestBehavior.AllowGet);

        }




        public class miniFinalData
        {
            public int ID { get; set; }
            public string geometry_1 { get; set; }//координаты
            public string geometry_2 { get; set; }//координаты
            public string predictions { get; set; }//вероятность
        }


    }
}