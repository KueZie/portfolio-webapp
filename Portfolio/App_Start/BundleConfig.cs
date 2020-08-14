using System.Web;
using System.Web.Optimization;

namespace Portfolio
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = true;

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/vendor/jquery/jquery.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-easing").Include(
                      "~/Scripts/vendor/jquery.easing/jquery.easing.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-validate").Include(
                      "~/Scripts/vendor/jquery.validate/jquery.validate.min.js",
                      "~/Scripts/vendor/jquery.validate/jquery.validate.unobtrusive.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/vendor/js/bootstrap.bundle.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/waypoints").Include(
                      "~/Scripts/vendor/waypoints/jquery.waypoints.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/counterup").Include(
                      "~/Scripts/vendor/counterup/counterup.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/isotope-layout").Include(
                      "~/Scripts/vendor/isotope-layout/isotope.pkgd.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/venobox").Include(
                      "~/Scripts/vendor/venobox/venobox.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/owlcarousel").Include(
                      "~/Scripts/vendor/owl.carousel/owl.carousel.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/typedjs").Include(
                      "~/Scripts/vendor/typed.js/typed.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/aos").Include(
                      "~/Scripts/vendor/aos/aos.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                      "~/Content/vendor/bootstrap/css/bootstrap.min.css",
                      "~/Content/vendor/bootstrap/css/bootstrap.min.css.map",
                      "~/Content/vendor/bootstrap/css/bootstrap.css.map",
                      "~/Content/css/style.css",
                      "~/Content/vendor/venobox/venobox.css",
                      "~/Content/vendor/owl.carousel/assets/owl.carousel.min.css",
                      "~/Content/vendor/aos/aos.css",
                      "~/Content/vendor/icofont/icofont.min.css",
                      "~/Content/vendor/icofont/fonts/icofont.woff",
                      "~/Content/vendor/icofont/fonts/icofont.woff2"));

            bundles.Add(new StyleBundle("~/bundles/errpage-css").Include(
                "~/Content/css/error-page-style.css"));
        }
    }
}
