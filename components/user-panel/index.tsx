export default function UserPanel() {
    return (
        <div className="flex flex-col gap-y-20">
            <ul className="flex flex-col gap-y-4 max-w-[24rem]">
                <li className="p-2 text-center bg-slate-200 hover:bg-slate-400 hover:cursor-pointer transition-colors uppercase">Notifications</li>
                <li className="p-2 text-center bg-slate-200 hover:bg-slate-400 hover:cursor-pointer transition-colors uppercase">Exchange</li>
                <li className="p-2 text-center bg-slate-200 hover:bg-slate-400 hover:cursor-pointer transition-colors uppercase">I have to return</li>
                <li className="p-2 text-center bg-slate-200 hover:bg-slate-400 hover:cursor-pointer transition-colors uppercase">Returned to me</li>
            </ul>
            <li className="p-2 text-center bg-slate-200 hover:bg-slate-400 hover:cursor-pointer transition-colors uppercase">My books</li>
        </div>
    )
}