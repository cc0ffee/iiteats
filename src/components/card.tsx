interface LocationCardProps {
    name: string,
    label: string,
    color: string

}

export default function Card({name, label, color}: LocationCardProps) {
    return (
        <div className="block">
            <h5 className="text-2xl font-bold">{name}</h5>
            <p className={`${color == "green" ? "text-green-500" : "text-red-500"}`}>{label}</p>
        </div>
    )
}
