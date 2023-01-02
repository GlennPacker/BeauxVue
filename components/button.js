
import Link from 'next/link';

export default function Button({text, link}) {
    
    return (
        link ?    
        <Link href={link}>
            <div className="button">
                {text}
            </div>
        </Link>:
        <div className="button">
            {text}
        </div>
    );
}