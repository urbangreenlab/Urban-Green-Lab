using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using UrbanLab.Logic;
using UrbanLab.Responses;

namespace UrbanLab.Controllers
{
    public class ContactController:ApiController
    {

        public ContactController()
        {
        }


        [HttpGet]
        [Route("GetContact")]
        public List<ContactPerson> GetContacts()
        {
            

            ContactLogic cl = new ContactLogic();
            return cl.GetContacts();
        }
    }
}