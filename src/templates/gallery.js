import React from "react"
import "./gallery.css"

export default function Gallery({ children }) {
    return (
        <div className="galleryContainer">
            {children}
        </div>
    )
}
