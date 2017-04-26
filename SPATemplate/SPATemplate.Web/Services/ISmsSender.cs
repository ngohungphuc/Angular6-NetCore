using System.Threading.Tasks;

namespace SPATemplate.Web.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
