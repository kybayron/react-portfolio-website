import React from "react"

interface HeaderSectionProps {
    children?: React.ReactNode
}

export default function HeaderSection({ children }: HeaderSectionProps) {
    return (
        <header className="header-section">
            { children }
        </header>
    )
}