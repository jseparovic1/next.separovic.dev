export default function Header({left, right}) {
    return (
        <header className="max-w-3xl px-4 mx-auto pt-6">
            <div className="flex justify-between items-center">
                {left}
                {right}
            </div>
        </header>
    );
}
