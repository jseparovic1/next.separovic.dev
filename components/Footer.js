export default function Footer() {
    const links = [
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/jurica-%C5%A1eparovi%C4%87/',
        },
        {
            name: 'Github',
            url: 'https://github.com/jseparovic1',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/jseparovic1',
        },
    ];

    return (
        <footer className="p-8 flex justify-center">
            <ul className="flex space-x-6">
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <a href={link.url} className="text-large hover:underline">{link.name}</a>
                        </li>
                    )
                })}
            </ul>
        </footer>
    );
}
