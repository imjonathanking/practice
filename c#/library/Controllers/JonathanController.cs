using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using library.Models;

namespace library.Controllers
{
    public class JonathanController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}