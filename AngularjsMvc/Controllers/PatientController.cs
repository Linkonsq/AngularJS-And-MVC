using AngularjsMvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularjsMvc.Controllers
{
    public class PatientController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PatientController()
        {
            _context = new ApplicationDbContext();
        }
        // GET: Patient
        public JsonResult Index()
        {
            var patients = _context.Patients.ToList();
            return Json(patients, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var patient = _context.Doctors.Find(id);
            return Json(patient, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Patient patient)
        {
            _context.Patients.Add(patient);
            _context.SaveChanges();
            return Json(null);
        }
    }
}