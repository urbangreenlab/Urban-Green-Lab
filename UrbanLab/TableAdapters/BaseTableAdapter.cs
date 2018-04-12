using DataAccess.Audit;

namespace UrbanLab.TableAdapters
{
    public class BaseTableAdapter
    {
        private AuditClient AuditClient;
        #region Protected Properties
      //  protected UrbanLab.misspiggyDBEntities AuditClient { get; set; }

        protected UrbanLab.misspiggyDBEntities DataContext
        {
            get
            {
                return AuditClient.DataContext;
            }
        }
        #endregion

        #region Constructor
       
        public BaseTableAdapter(AuditClient auditClient)
        {
            AuditClient = auditClient;
        }
        #endregion
    }
}

