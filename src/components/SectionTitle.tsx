interface SectionTitleProps {
    text: string
}

export default function SectionTitle({ text }: SectionTitleProps) {
    return (
        <div className="section-title">
            <h2 className="section-title-text">{ text }</h2>
        </div>
    )
}