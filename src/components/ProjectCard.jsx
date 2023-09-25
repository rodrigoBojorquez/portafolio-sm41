import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ link, title, image }) {
    return (
        <Link to={link}>
            <div className="h-80 bg-cyan-950 rounded-xl">
                {/* imagen de proyecto */}
                <div className="h-4/5 overflow-hidden rounded-t-xl">
                    <img src={image} alt="Project"
                        className="w-full bg-cover  transform duration-1000 hover:scale-110" />
                </div>

                {/* titulo */}
                <div className="h-1/5 flex items-center justify-center">
                    <p className="font-medium text-center text-xl text-slate-100">{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard