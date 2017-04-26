using Microsoft.AspNetCore.Mvc;

namespace SPATemplate.Web.Controllers.SPA
{
    public class PartialController : Controller
    {
        public IActionResult App() => PartialView("~/Views/Partial/App.cshtml");
    }
}