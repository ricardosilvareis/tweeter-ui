import { Sparkle } from "phosphor-react";
import './Header.css'

interface HeaderPros{
    title: string;
}

export function Header(props:HeaderPros){
    return (
        <div className="timeline-header">
        {props.title}
        <Sparkle />
      </div>
    )
}