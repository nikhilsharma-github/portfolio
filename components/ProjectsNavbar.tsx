
import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem:FunctionComponent<{value:Category |'All', handlerFilterCategory:Function
  active:string
}> = ({value,handlerFilterCategory,active}) => {

        let className ="cursor-pointer hover:text-blue-700 capitalize dark:hover:text-blue-400";
        
        if(active===value){
             className=className+" text-greenCustom dark:text-pinkCustom text-lg  underline "
        }
    return (
        <li  className={className}
          onClick={()=>handlerFilterCategory(value)}
        >
            {value}
        </li>
    )
}

const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function,active:string}> = (props) => {
    return (
        <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto"> 
                <NavItem value="All"  {...props}/>
                <NavItem value="React"  {...props}/>
                <NavItem value="Node"  {...props}/>
                <NavItem value="Express"  {...props}/>
                <NavItem value="Minor"  {...props}/>
                
        </div>
    )
}

export default ProjectsNavbar
