import Link from 'next/link';

export default function Clickable({ content, link, show }) {
    if (!link) return content;
    if (link.startsWith('http')) {
        return <Link 
                    href={link}
                    className={ show ? 'hyper' : '' }
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                >
                    {content}
                </Link>
    }

    return (
        <Link 
            href={link}
            className={ show ? 'hyper' : '' }
        >
            {content}
        </Link>
    )
}