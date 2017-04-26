using System.ComponentModel.DataAnnotations;

namespace $safeprojectname$.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
