using AngularjsMvc.Models;
using AngularjsMvc.ViewModels;
using System.Linq;
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
            var patient = _context.Patients.Find(id);
            return Json(patient, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Edit(int id)
        {
            var patient = _context.Patients.Find(id);

            var viewModel = new PatientViewModel()
            {
                Patient = patient,
                Doctors = _context.Doctors.ToList()
            };

            return Json(viewModel, JsonRequestBehavior.AllowGet);
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