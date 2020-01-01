using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularjsMvc.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public byte[] Prescription { get; set; }
        public Doctor Doctor { get; set; }
        public int? DoctorId { get; set; }
    }
}