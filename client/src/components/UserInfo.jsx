export function UserInfo({classes, active, onClick}) {
    return (
        <li className={`flex flex-col items-tart gap-4 w-full ${classes}`} onClick={onClick}>
            <ul className={`rounded-lg p-4 w-full ${active ? 'bg-green-100' : ''}`}>
                <li className={'flex flex-row items-center justify-start	 gap-2'}>
                    <div className={'w-2 h-0.5 rounded-full bg-slate-500 inline-block'}></div>
                    <span>[status]</span>
                    <span className={'text-sm font-bold text-green-500'}>online</span>
                </li>
                <li className={'flex flex-row items-center justify-start	 gap-2'}>
                    <div className={'w-2 h-0.5 rounded-full bg-slate-500 inline-block'}></div>
                    <span>[Devices]</span>
                    <span className={'text-sm font-medium'}>Iphone 14 promax</span>
                </li>
                <li className={'flex flex-row items-center justify-start	 gap-2'}>
                    <div className={'w-2 h-0.5 rounded-full bg-slate-500 inline-block'}></div>
                    <span>[Location]</span>
                    <span className={'text-sm font-medium'}>Ha noi, Vietnam</span>
                </li>
                <li className={'flex flex-row items-center justify-start	 gap-2'}>
                    <div className={'w-2 h-0.5 rounded-full bg-slate-500 inline-block'}></div>
                    <span>[Platform]</span>
                    <span className={'text-sm font-medium'}>Chrome/111.0.0.0</span>
                </li>
                <li className={'flex flex-row items-center justify-start	 gap-2'}>
                    <div className={'w-2 h-0.5 rounded-full bg-slate-500 inline-block'}></div>
                    <span>[Active session]</span>
                    <span className={'text-sm font-medium'}>12 minutes ago</span>
                </li>
            </ul>
            <button
                className="hover:bg-red-400 group gap-2 flex items-center rounded-md max-w-[250px] bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-log-out">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                {active ? "Terminate all orther sessions" : 'Terminate'}
            </button>
        </li>
    )
}