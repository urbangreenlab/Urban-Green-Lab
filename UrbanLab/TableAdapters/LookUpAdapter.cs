
using System.Collections.Generic;
using System.Linq;
using DataAccess.Audit;
using System;

namespace UrbanLab.TableAdapters
{
    public class LookUpAdapter:BaseTableAdapter
    {


        #region Constructor
        public LookUpAdapter(AuditClient auditClient):base(auditClient)
        {

        }

        #endregion

        #region Public Methods

        public List<LU_tblContactType> GetContactType()
        {
            List<LU_tblContactType> l = new List<LU_tblContactType>();
            try
            {
                misspiggyDBEntities DataContext = new misspiggyDBEntities();
                return (from items in DataContext.LU_tblContactType
                        select items).ToList();
            }

            catch
            {
                return l;
            }
        }


        public List<LU_tblEvent_Role> GetEventRole()
        {
            List<LU_tblEvent_Role> l = new List<LU_tblEvent_Role>();
            try
            {
                misspiggyDBEntities DataContext = new misspiggyDBEntities();
                return (from items in DataContext.LU_tblEvent_Role
                        select items).ToList();
            }

            catch
            {
                return l;
            }
        }

        public List<LU_tblEventStatus> GetEventStatus()
        {
            List<LU_tblEventStatus> l = new List<LU_tblEventStatus>();
            try
            {
                misspiggyDBEntities DataContext = new misspiggyDBEntities();
                return (from items in DataContext.LU_tblEventStatus
                        select items).ToList();
            }

            catch
            {
                return l;
            }
        }


        public List<LU_tblEventType> GetEventType()
        {
            List<LU_tblEventType> l = new List<LU_tblEventType>();
            try
            {
                misspiggyDBEntities DataContext = new misspiggyDBEntities();
                return (from items in DataContext.LU_tblEventType
                        select items).ToList();
            }

            catch
            {
                return l;
            }
        }

        public List<LU_tblPgmRelationType> GetProgramRelationType()
        {
            List<LU_tblPgmRelationType> l = new List<LU_tblPgmRelationType>();
            try
            {
                misspiggyDBEntities DataContext = new misspiggyDBEntities();
                return (from items in DataContext.LU_tblPgmRelationType
                        select items).ToList();
            }

            catch
            {
                return l;
            }
        }


        #endregion

    }
}