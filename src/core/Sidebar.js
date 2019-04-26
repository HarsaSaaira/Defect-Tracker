import React from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    
      <div className="container-fluid text-left" >
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <p>DASHBOARD</p>
            {/* <ul>
              <a href="#" className="w3-bar-item w3-button">User</a>
              <p><i className='far fa-circle'></i>&nbsp; <Link path to="/AddUser">Add User</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<Link path to="/ListUser">View User</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<a href="#">Manage User</a></p>
            </ul> */}
            <ul>
              <a href="#" className="w3-bar-item w3-button">Defect</a>
              <p><i className='far fa-circle'></i>&nbsp;< Link path to="/AddDefect">Add Defect</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;< Link path to="/List">View Defect</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<a href="#">Manage Defect</a></p>
            </ul>
            <ul>
              <a href="#" className="w3-bar-item w3-button">Module</a>
              <p><i className='far fa-circle'></i>&nbsp;<Link path to="/AddModule"> Add Module</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<Link path to="/ListModule">View Module</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<a href="#">Manage Module</a></p>
            </ul>
            <ul>
              <a href="#" className="w3-bar-item w3-button">Project</a>
              <p><i className='far fa-circle'></i>&nbsp;<Link path to="/AddProject"> Add Project</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<Link path to="/ListProject">View Project</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<a href="#">Manage Project</a></p>
            </ul>
            <ul>
              <a href="#" className="w3-bar-item w3-button">Developer</a>
              <p><i className='far fa-circle'></i>&nbsp;<Link path to="/AddDeveloper"> Add Developer</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<Link path to="/ListDeveloper">View Developer</Link></p>
              <p><i className='far fa-circle'></i>&nbsp;<a href="#">Manage Developer</a></p>
            </ul>

          </div>
        </div>
      </div>
  )
}
