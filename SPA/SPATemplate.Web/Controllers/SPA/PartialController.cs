using Microsoft.AspNetCore.Mvc;

namespace $safeprojectname$.Controllers.SPA
{
    public class PartialController : Controller
    {
        public IActionResult App() => PartialView("~/Views/Partial/App.cshtml");
    }
}