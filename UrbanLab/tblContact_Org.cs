//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace UrbanLab
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblContact_Org
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tblContact_Org()
        {
            this.tblContact_Person = new HashSet<tblContact_Person>();
        }
    
        public long Org_Id { get; set; }
        public string Org_Name { get; set; }
        public string Email_Id { get; set; }
        public Nullable<long> Primary_Contact { get; set; }
        public string Addr_Street { get; set; }
        public string Addr_City { get; set; }
        public string Addr_State { get; set; }
        public string Addr_ZipCode { get; set; }
        public string Phone_Number { get; set; }
        public string Phone_Type { get; set; }
        public string Active_Ind { get; set; }
        public string Kindful_Contact_Id { get; set; }
        public string SalesForce_Contact_Id { get; set; }
        public string Addr_Country { get; set; }
        public Nullable<System.DateTime> Modified_Datetime { get; set; }
        public Nullable<System.DateTime> Create_Datetime { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblContact_Person> tblContact_Person { get; set; }
        public virtual tblContact_Person tblContact_Person1 { get; set; }
    }
}
