using AngularjsMvc.Models;
using System.Linq;
using System.Web.Mvc;
using System.Data.Entity;

namespace AngularjsMvc.Controllers
{
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UserController()
        {
            _context = new ApplicationDbContext();
        }

        public JsonResult Index()
        {
            var users = _context.Users.ToList();
            return Json(users, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var user = _context.Users.Find(id);
            return Json(user, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Edit(User user)
        {
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Create(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var user = _context.Users.Find(id);
            _context.Users.Remove(user);
            _context.SaveChanges();
            return Json(null);
        }
    }
}