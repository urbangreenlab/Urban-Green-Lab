using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UrbanLab.Responses;
using UrbanLab.TableAdapters;

namespace UrbanLab.Logic
{
    public class ContactLogic : BaseLogic
    {
        public ContactPersonList GetContacts()
        {
            ContactPersonList response = new ContactPersonList();
            List<ContactPerson> contactsList = new List<ContactPerson>();
            var a = ContactTableAdapter.GetAllContacts();
            try
            {
                if (a != null)
                {
                    foreach (var b in a)
                    {
                        ContactPerson c = new ContactPerson();

                        c.Active_Ind = b.Active_Ind;
                        c.Addr_City = b.Addr_City;
                        c.Addr_State = b.Addr_State;
                        c.Addr_Street = b.Addr_Street;
                        c.Addr_ZipCode = b.Addr_ZipCode;
                        c.Create_Datetime = b.Create_Datetime.HasValue? b.Create_Datetime.Value: DateTime.Now;
                        c.Email_Id = b.Email_Id;
                        c.Modified_Datetime = b.Modified_Datetime.HasValue ? b.Modified_Datetime.Value : DateTime.MinValue;
                        c.Org_Id = b.Org_Id.HasValue? b.Org_Id.Value: 0;
                        c.Contact_Id = b.Contact_Id;
                        c.First_Name = b.First_Name;
                        c.Intro_Contact = b.Intro_Contact.HasValue? b.Intro_Contact.Value: 0;
                        c.Last_Name = b.Last_Name;
                        c.Name_Prefix = b.Name_Prefix;
                        c.Notes = b.Notes;
                        c.Phone_Cell = b.Phone_Cell;
                        c.Phone_Work = b.Phone_Work;
                        c.Related_Contact_1 = b.Related_Contact_1.HasValue ? b.Related_Contact_1.Value : 0;
                        c.Related_Contact_2 = b.Related_Contact_2.HasValue ? b.Related_Contact_2.Value : 0;
                        c.Related_Program = b.Related_Program;
                        c.Title = b.Title;
                        contactsList.Add(c);
                    }
                }

                response.ContactPeson = contactsList;
                response.Success = true;
                response.Message = contactsList.Count + " contacts returned.";
            }
            catch (Exception e)
            {
                response.Success = false;
                response.Message = e.Message;
            }

            return response;
        }

        public BaseResponse CreateOrganization(ContactOrganization request)
        {
            BaseResponse response = new BaseResponse();
            var a = ContactTableAdapter.CreateContactOrganization(request);
            return response;
        }

        public BaseResponse CreateContact(ContactPerson request)
        {
            BaseResponse response = new BaseResponse();
            var a = ContactTableAdapter.CreateContactPerson(request);
            return response;
        }
    }
}