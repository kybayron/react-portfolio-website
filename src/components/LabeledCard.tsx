interface LabeledCardProps {
    imageSrc: string,
    label: string
}

export default function LabeledCard ({ imageSrc, label }: LabeledCardProps) {

    return (
        <div className='card labeled-card'>
            <img className="card-image" src={imageSrc} alt="card" />
            <p className="card-label">{label}</p>
        </div>
    )
}