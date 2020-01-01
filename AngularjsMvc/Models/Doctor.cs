using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace AngularjsMvc.Models
{
    public class Doctor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public byte[] Document { get; set; }
    }
}