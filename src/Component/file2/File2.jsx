import React from 'react';
import "./file2.css"

export default function File2() {

  const Button = ({type}) =>{
    return <button className={"wegdetlgButton " + type}>{type}</button>
  }

  return (

    <div className='files2'>
        <h3 className="wegdetlgTitle">Latest Transaction</h3>
        <table className="wegdetlgtable">
          <tr className="wegdetlgtr">
            <th className="wegdetlgth">Customer</th>
            <th className="wegdetlgth">Date</th>
            <th className="wegdetlgth">Amount</th>
            <th className="wegdetlgth">Status</th>
          </tr>
          {/* 1st Customer */}
          <tr className="wegdetlgtr">
            <td className="wegdetlgUser">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" className="wegdetlgimg" />
              <span className="wegdetlgUsername">Belly Alla</span>
            </td>
            <td className="wegdetlgdate">2 july 2022</td>
            <td className="wegdetlgamount">$166.2</td>
            <td className="wegdetlgstatus"><Button type="Approved" /></td>
          </tr>

          {/* 2nd customer */}
          <tr className="wegdetlgtr">
            <td className="wegdetlgUser">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N0R6y6wmei-BaFwvP_cFq_M-4ImLLpywEeesB5V-NwuG_d1mbBRZQMhCvMeuRtCzxc8&usqp=CAU" alt="" className="wegdetlgimg" />
              <span className="wegdetlgUsername">jame </span>
            </td>
            <td className="wegdetlgdate">9 july 2022</td>
            <td className="wegdetlgamount">$156.2</td>
            <td className="wegdetlgstatus"><Button type="Declined" /></td>
          </tr>

          {/* 3rd Customer */}

          <tr className="wegdetlgtr">
            <td className="wegdetlgUser">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" className="wegdetlgimg" />
              <span className="wegdetlgUsername">joe belly</span>
            </td>
            <td className="wegdetlgdate">2 july 2022</td>
            <td className="wegdetlgamount">$166.2</td>
            <td className="wegdetlgstatus"><Button type="Approved" /></td>
          </tr>
          {/* 4th Customer */}

          <tr className="wegdetlgtr">
            <td className="wegdetlgUser">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="wegdetlgimg" />
              <span className="wegdetlgUsername">Belly Alla</span>
            </td>
            <td className="wegdetlgdate">2 july 2022</td>
            <td className="wegdetlgamount">$166.2</td>
            <td className="wegdetlgstatus"><Button type="Approved" /></td>
          </tr>
        </table>
    </div>
  )
}
