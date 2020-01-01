using AngularjsMvc.Models;
using System.Collections.Generic;

namespace AngularjsMvc.ViewModels
{
    public class PatientViewModel
    {
        public IEnumerable<Doctor> Doctors { get; set; }
        public Patient Patient { get; set; }
    }
}