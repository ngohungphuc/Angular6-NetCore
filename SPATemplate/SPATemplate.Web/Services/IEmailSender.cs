using System.Threading.Tasks;

namespace SPATemplate.Web.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
