import React from 'react'
import "./Style_sidebar.css"

//MaterialUi Icons Use 
import { LineStyle, AttachMoney, Timeline, Person, Storefront, BarChart, AccountBalance, Mail, Feedback, Message, WorkOutline, Report} from '@material-ui/icons';

export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Dashboard</h3>

          {/* List of DashBoard */}
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon' />
              Home
            </li>

            <li className="sidebarListItem">
             <Timeline className='sidebarIcon' />
              Analytics
            </li>

            <li className="sidebarListItem">
             <AttachMoney className='sidebarIcon'/>
              Sales
            </li>
          </ul>
        </div>
                {/* Quick Menu  */}
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Quick Menu</h3>
         
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className='sidebarIcon' />
              User
            </li>

            <li className="sidebarListItem">
             <Storefront className='sidebarIcon' />
              Product
            </li>
            <li className="sidebarListItem">
             <AccountBalance className='sidebarIcon'/>
              Transactions
            </li>
            <li className="sidebarListItem">
             <BarChart className='sidebarIcon'/>
              Report
            </li>
          </ul>
        </div>

        {/* Notifications */}

        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className='sidebarIcon' />
              Mail
            </li>
            <li className="sidebarListItem">
             <Feedback className='sidebarIcon' />
              Feedback
            </li>

            <li className="sidebarListItem">
             <Message className='sidebarIcon'/>
              Message
            </li>
          </ul>
        </div>

        {/* Staff */}

        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className='sidebarIcon' />
              Manage
            </li>
            <li className="sidebarListItem">
             <Timeline className='sidebarIcon' />
              Analytics
            </li>

            <li className="sidebarListItem">
             <Report className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}
