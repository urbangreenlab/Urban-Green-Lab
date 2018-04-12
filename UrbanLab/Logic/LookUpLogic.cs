using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UrbanLab.Responses;

namespace UrbanLab.Logic
{
    public class LookUpLogic:BaseLogic
    {
        public List<ContactTypeResponse> GetContactType()
        {
            var a =  LookUpAdapter.GetContactType();
            List<ContactTypeResponse> cl = new List<ContactTypeResponse>();
            foreach( var b in a)
            {
                ContactTypeResponse c = new ContactTypeResponse();
                c.ContactType = b.Type_Desc;
                c.ContactTypeID = b.Type_Id;

                cl.Add(c);
                
            }
            return cl;
        }
    }
}