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
        // GET: MoscowData
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            if (MainData.dt == null)
            {
                MainData.GetALL_JSON();
            }

            var dt = MainData.dt;
            var result = new List<FinalData>();

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                var dr = dt.Rows[i];
                var geo = geomerty(dr["geometry"].ToString());
                result.Add( new FinalData
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
                });
            }




            return Json(result, JsonRequestBehavior.AllowGet);


            string[] geomerty(string s)
            {
                s = s.Replace("POLYGON ((", "");
                s = s.Replace("))", "");

                List<string> l = s.Split(',').ToList();
                l.RemoveAt(3);
                l.RemoveAt(1);
                return l.ToArray();
            }
        }

        [HttpGet]
        public string GetAllTest()
        {
            MainData.GetALL_JSON();
            var dt = MainData.dt;
            string result = "";
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    result += dt.Rows[i][j].ToString();
                    result += " | ";
                }
                result += "\n";
            }
            return result; // Json(coord, JsonRequestBehavior.AllowGet);
        }

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
                geometry_1 = geo[0],
                geometry_2 = geo[1]
            };

            return Json(result, JsonRequestBehavior.AllowGet);

            string[] geomerty(string s)
            {
                s = s.Replace("POLYGON ((", "");
                s = s.Replace("))", "");

                List<string> l = s.Split(',').ToList();
                l.RemoveAt(3);
                l.RemoveAt(1);
                return l.ToArray();
            }
        }
    }
}