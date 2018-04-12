using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using UrbanLab.Logic;
using UrbanLab.Responses;

namespace UrbanLab.Controllers
{
    public class LookUpController: ApiController
    {
        public LookUpController()
        {
        }

        [HttpGet]
        [Route("GetContactType")]
        public List<ContactTypeResponse> GetContacts()
        {           
            LookUpLogic ll = new LookUpLogic();
            return ll.GetContactType();
        }
    }
}