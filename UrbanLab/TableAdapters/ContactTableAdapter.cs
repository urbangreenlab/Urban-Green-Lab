
using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Audit;
using UrbanLab.Responses;

namespace UrbanLab.TableAdapters
{
    public class ContactTableAdapter: BaseTableAdapter
    {
        private AuditClient auditClient;


        #region Constructor
        public ContactTableAdapter(AuditClient auditClient):base(auditClient)
        {
           
        }

        #endregion

        #region Public Methods

        public List<tblContact_Person> GetAllContacts()
        {
            misspiggyDBEntities DataContext = new misspiggyDBEntities();
            var a =  (from items in DataContext.tblContact_Person
                     select items);
            if (a != null && a.Count() > 0)
            {
                return (from items in DataContext.tblContact_Person
                        select items).ToList();
            }
            else
                return null;
        }

        public BaseResponse CreateContactPerson(ContactPerson request)
        {
            misspiggyDBEntities d = new misspiggyDBEntities();
            tblContact_Person p = new tblContact_Person();

            p.Active_Ind = request.Active_Ind;
            p.Addr_City = request.Addr_City;
            p.Addr_State = request.Addr_State;
            p.Addr_Street = request.Addr_Street;
            p.Addr_ZipCode = request.Addr_ZipCode;
            p.Create_Datetime = request.Create_Datetime;
            p.Email_Id = request.Email_Id;
            p.First_Name = request.First_Name;
            p.Intro_Contact = request.Intro_Contact;
            p.Last_Name = request.Last_Name;
            p.Modified_Datetime = request.Modified_Datetime;
            p.Name_Prefix = request.Name_Prefix;
            p.Notes = request.Notes;
            p.Org_Id = request.Org_Id;
            p.Phone_Cell = request.Phone_Cell;
            p.Phone_Work = request.Phone_Work;
            p.Related_Contact_1 = request.Related_Contact_1;
            p.Related_Contact_2 = request.Related_Contact_2;
            p.Related_Program = request.Related_Program;
            p.Title = request.Title;
            p.Active_Ind = "Y";

            d.tblContact_Person.Add(p);
            try
            {
                d.SaveChanges();
            }
            catch(Exception e)
            {

            }
            BaseResponse r = new BaseResponse();
            return r;
        }

        public BaseResponse CreateContactOrganization(ContactOrganization request)
        {
            misspiggyDBEntities d = new misspiggyDBEntities();
            tblContact_Org p = new tblContact_Org();
            p.Active_Ind = "Y";
            p.Addr_City = request.Addr_City;
            p.Addr_State = request.Addr_State;
            p.Addr_Street = request.Addr_Street;
            p.Addr_ZipCode = request.Addr_ZipCode;
            p.Create_Datetime = request.Create_Datetime;
            p.Email_Id = request.Email_Id;
            p.Modified_Datetime = request.Modified_Datetime;
            p.Org_Name = request.Org_Name;
            p.Phone_Number = request.Phone_Number;
            p.Phone_Type = request.Phone_Type;
            p.Primary_Contact = request.Primary_Contact;
            d.tblContact_Org.Add(p);
            BaseResponse r = new BaseResponse();
            try
            {
                d.SaveChanges();
                r.Success = true;
            }
            catch (Exception e)
            {
                r.Success = false;
                r.Message = e.Message;
            }          
            return r;
        }

        #endregion
    }
}