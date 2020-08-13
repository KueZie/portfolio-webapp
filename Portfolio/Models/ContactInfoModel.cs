using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Portfolio.Models
{
    public class ContactInfoModel
    {
        [Display(Name = "Name")]
        [Required(ErrorMessage = "Please supply a name.")]
        public string Name { get; set; }

        [Display(Name = "Email Address")]
        [Required(ErrorMessage = "Please provide an email address I can contact you at.")]
        [EmailAddress(ErrorMessage = "Please provide a valid email address.")]
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }

        [Display(Name = "Subject")]
        [Required(ErrorMessage = "Please provide a subject line.")]
        [StringLength(50, MinimumLength = 4, ErrorMessage = "Subject line should be greater than 4 but less that 50 characters.")]
        public string Subject { get; set; }

        [Display(Name = "Message")]
        [Required(ErrorMessage = "You need a message to contact me.")]
        [StringLength(9999, MinimumLength = 10, ErrorMessage = "Your message should be longer than 10 characters.")]
        public string Message { get; set; }
    }
}