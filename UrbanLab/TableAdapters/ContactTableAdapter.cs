
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
        
        #endregion
    }
}