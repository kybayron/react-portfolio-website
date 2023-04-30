interface ClickableCardProps {
    imageSrc: string,
    label: string, 
    url: string
}

export default function ClickableCard ({ imageSrc, label, url }: ClickableCardProps) {

    const handleClick = () => {
        window.open(url, '_blank', 'noopener noreferrer');
    }
    return (
        <a className="clickable-link" href={url} target="_blank" rel="noopener noreferrer">
            <button type="button" className='card clickable' onClick={handleClick} onKeyDown={handleClick}>
                <img className="clickable-image" src={imageSrc} alt="clickable" />
                <p className="clickable-label">{label}</p>
            </button>
        </a>
    )
}