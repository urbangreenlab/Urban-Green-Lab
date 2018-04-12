using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UrbanLab.Responses
{
    public class ContactOrganization
    {
        public long Org_Id { get; set; }
        public string Org_Name { get; set; }
        public string Email_Id { get; set; }
        public long Primary_Contact { get; set; }
        public string Addr_Street { get; set; }
        public string Addr_City { get; set; }
        public string Addr_State { get; set; }
        public string Addr_ZipCode { get; set; }
        public string Phone_Number { get; set; }
        public string Phone_Type { get; set; }
        public DateTime Create_Datetime { get; set; }
        public DateTime Modified_Datetime { get; set; }
        public string Active_Ind { get; set; }
    }


    public class ContactPerson
    {
        public long Contact_Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Name_Prefix { get; set; }
        public string Email_Id { get; set; }
        public string Addr_Street { get; set; }
        public string Addr_City { get; set; }
        public string Addr_State { get; set; }
        public string Addr_ZipCode { get; set; }
        public string Phone_Work { get; set; }
        public string Phone_Cell { get; set; }
        public long Related_Contact_1 { get; set; }
        public long Related_Contact_2 { get; set; }
        public long Intro_Contact { get; set; }
        public string Title { get; set; }
        public string Related_Program { get; set; }
        public string Notes { get; set; }
        public DateTime Create_Datetime { get; set; }
        public DateTime Modified_Datetime { get; set; }
        public string Active_Ind { get; set; }
        public long? Org_Id { get; set; }
    }

    public class ContactPersonList : BaseResponse
    {
        public List<ContactPerson> ContactPeson { get; set; }
    }

    public class ContactOrganizationList : BaseResponse
    {
        public List<ContactOrganization> ContactOrganization { get; set; }
    }

    public class ContactTypeResponse
    {
        public string ContactType { get; set; }
        public int ContactTypeID { get; set; }
    }

    public class BaseResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; }
    }
}