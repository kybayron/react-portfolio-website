import React from "react"

interface FooterSectionProps {
    children?: React.ReactNode
}

export default function FooterSection({ children }: FooterSectionProps) {
    return (
        <footer className="footer-section">
            { children }
        </footer>
    )
}