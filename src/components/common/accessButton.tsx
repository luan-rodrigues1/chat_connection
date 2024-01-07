const AccessButton = ({name, submit}: {name: string, submit: boolean}) => {
    return (
        <button 
            type={submit ? "submit": "button"}
            className="bg-gray-color w-[161px] h-[41px] font-semibold text-black-color text-large-size rounded-[5px]"
        >
            {name}
        </button>
    )
}

export default AccessButton