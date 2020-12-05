export default function HeaderBlinkText({title}) {
    return (
        <a className="flex items-center text-2xl lg:text-3xl leading-none" href="/">
            <span className="text-brand-700 font-extrabold">~</span>
            <h1 className="ml-1 text-blue-100 font-bold tracking-tight">{title}</h1>
            <div className="ml-2 mt-2 w-2 lg:w-3 h-4 lg:h-6 bg-gray-100 animate-blink"/>
        </a>
    );
}
