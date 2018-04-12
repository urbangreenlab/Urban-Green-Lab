using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using UrbanLab.Logic;
using UrbanLab.Responses;

namespace UrbanLab.Controllers
{
    public class ContactController : ApiController
    {

        public ContactController()
        {
        }

        [HttpGet]
        [Route("GetContact")]
        public ContactPersonList GetContacts()
        {
            ContactLogic cl = new ContactLogic();
            return cl.GetContacts();
        }

        [HttpPost]
        [Route("CreateContact")]
        public BaseResponse CreateContact(ContactPerson request)
        {
            ContactLogic cl = new ContactLogic();
            return cl.CreateContact(request);
        }

        [HttpPost]
        [Route("CreateOrganization")]
        public BaseResponse CreateOrganization(ContactOrganization request)
        {
            ContactLogic cl = new ContactLogic();
            return cl.CreateOrganization(request);
        }


        [HttpGet]
        [Route("GetOrganization")]
        public ContactOrganizationList GetOrganizations()
        {
            ContactLogic cl = new ContactLogic();
            return cl.GetOrganizations();
        }
    }
}