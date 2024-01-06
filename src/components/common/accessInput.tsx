import Image from "next/image"

const AccessInput = ({label, img}: {label: string, img: string}) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <div>
                <div className="w-9 h-10">
                    <Image
                        src={img}
                        alt={`image input ${label}`}
                        width={20}
                        height={22}
                    />
                </div>
                <input type="text" id={label} />
            </div>
        </div>
    )
}

export default AccessInput