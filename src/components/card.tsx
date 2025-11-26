export function Card({title,children}:any){
    return(
        <div className="bg-white p-5 rounded-xl shadow-sm mb-4">
            <h2 className="font-semibold mb-4">{title}</h2>
            {children}
        </div>
    );
}