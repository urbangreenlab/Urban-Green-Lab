using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UrbanLab.Responses;
using UrbanLab.TableAdapters;

namespace UrbanLab.Logic
{
    public class ContactLogic:BaseLogic
    {
        public List<ContactPerson> GetContacts()
        {
            List<ContactPerson> contactsList = new List<ContactPerson>();
            var a  = ContactTableAdapter.GetAllContacts();

            foreach(var b in a)
            {
                ContactPerson c = new ContactPerson();
               
                c.Active_Ind = b.Active_Ind;
                c.Addr_City = b.Addr_City;
                c.Addr_State = b.Addr_State;
                c.Addr_Street = b.Addr_Street;
                c.Addr_ZipCode = b.Addr_ZipCode;
                c.Create_Datetime = b.Create_Datetime.Value;
                c.Email_Id = b.Email_Id;
                c.Modified_Datetime = b.Modified_Datetime.Value;
                c.Org_Id = b.Org_Id.Value;
                c.Contact_Id = b.Contact_Id;
                c.First_Name = b.First_Name;
                c.Intro_Contact = b.Intro_Contact.Value;
                c.Last_Name = b.Last_Name;
                c.Name_Prefix = b.Name_Prefix;
                c.Notes = b.Notes;
                c.Phone_Cell = b.Phone_Cell;
                c.Phone_Work = b.Phone_Work;
                c.Related_Contact_1 = b.Related_Contact_1.Value;
                c.Related_Contact_2 = b.Related_Contact_2.Value;
                c.Related_Program = b.Related_Program;
                c.Title = b.Title;
                contactsList.Add(c);
            }

            return contactsList;
        }
    }
}