import Image from "next/image"

const AccessInput = ({label, img}: {label: string, img: string}) => {
    return (
        <div>
            <label className="font-light text-medium-size text-black-color mb-1" htmlFor={label}>{label}</label>
            <div className="flex">
                <div className="w-9 h-10 bg-gray-color flex justify-center rounded-[5px] mr-[2px]">
                    <Image
                        src={img}
                        alt={`image input ${label}`}
                        width={18}
                        height={20}
                    />
                </div>
                <input className="flex-grow rounded-[5px] bg-gray-color" type="text" id={label} />
            </div>
        </div>
    )
}

export default AccessInput