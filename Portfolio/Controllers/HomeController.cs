using Portfolio.Models;
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using DataLibrary;
namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(ContactInfoModel model)
        {
            if (ModelState.IsValid)
            {
                JsonKeyReader reader = new JsonKeyReader(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "secrets.json"));
                //SendGridClient client = new SendGridClient(
                //    reader.LoadJsonKey(
                //        "SendGridServiceAPIKey", (Exception e) => Console.WriteLine(e.Message)
                //        )
                //    );

                SendGridClient client = new SendGridClient(
                    reader.LoadJsonKey(
                        "SendGridServiceAPIKey", (Exception e) => Console.WriteLine(e.Message)
                        )
                    );
                EmailAddress from = new EmailAddress("portfolioemailer@gmail.com", "Portfolio Emailer");
                EmailAddress to = new EmailAddress("huntergoram2@gmail.com");

                SendGridMessage msg = MailHelper.CreateSingleEmail(
                    from, to, model.Subject,
                    model.Message + "\n\n" + model.EmailAddress,
                    ""
                );
                client.SendEmailAsync(msg);

                return RedirectToAction("Index");
            }

            return View();
        }
    }
}