import React from 'react';
import "./file1.css"
import { Visibility } from '@mui/icons-material'

export default function File1() {
    return (
        <div className='files1'>
            <span className="wetgettitle">New Job Members</span>
            <ul className="wetgetlist">
                <li className="wetgetitem">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" className="wetgetimg" />
                    <div className="wetgetuser">
                        <span className="wetgedusername">Belly Alla</span>
                        <span className="wetgetusertitle">Software Engineer</span>
                    </div>
                    <button className="wetgetButton">
                        <Visibility className='wetgetIcons'/>
                        Display
                    </button>
                </li>

                <li className="wetgetitem">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="wetgetimg" />
                    <div className="wetgetuser">
                        <span className="wetgedusername">Belly Alla</span>
                        <span className="wetgetusertitle">Software Engineer</span>
                    </div>
                    <button className="wetgetButton">
                        <Visibility className='wetgetIcons'/>
                        Display
                    </button>
                </li>

                <li className="wetgetitem">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="wetgetimg" />
                    <div className="wetgetuser">
                        <span className="wetgedusername">Belly Alla</span>
                        <span className="wetgetusertitle">Software Engineer</span>
                    </div>
                    <button className="wetgetButton">
                        <Visibility className='wetgetIcons'/>
                        Display
                    </button>
                </li>

                <li className="wetgetitem">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="wetgetimg" />
                    <div className="wetgetuser">
                        <span className="wetgedusername">Belly Alla</span>
                        <span className="wetgetusertitle">Software Engineer</span>
                    </div>
                    <button className="wetgetButton">
                        <Visibility className='wetgetIcons'/>
                        Display
                    </button>
                </li>

                <li className="wetgetitem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N0R6y6wmei-BaFwvP_cFq_M-4ImLLpywEeesB5V-NwuG_d1mbBRZQMhCvMeuRtCzxc8&usqp=CAU" alt="" className="wetgetimg" />
                    <div className="wetgetuser">
                        <span className="wetgedusername">Belly Alla</span>
                        <span className="wetgetusertitle">Software Engineer</span>
                    </div>
                    <button className="wetgetButton">
                        <Visibility className='wetgetIcons'/>
                        Display
                    </button>
                </li>

            </ul>
        </div>
    )
}
