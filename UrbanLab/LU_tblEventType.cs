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
    
    public partial class LU_tblEventType
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LU_tblEventType()
        {
            this.tblEvent_Info = new HashSet<tblEvent_Info>();
            this.tblEvent_Info1 = new HashSet<tblEvent_Info>();
        }
    
        public int Type_Id { get; set; }
        public string Category_Desc { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblEvent_Info> tblEvent_Info { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblEvent_Info> tblEvent_Info1 { get; set; }
    }
}
