using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Audit
{
    public class AuditClient
    {
        #region Public Properties
        public UrbanLab.misspiggyDBEntities DataContext { get; set; }
        #endregion

        #region Constructor
        public AuditClient()
        {
            //Initialize the data context
            DataContext = new UrbanLab.misspiggyDBEntities();
        }
        #endregion
    }
}
