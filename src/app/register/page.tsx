import RegisterForm from "@/components/forms/registerForm"
import Image from "next/image"

const Register = () => {
    return (
        <main className="flex justify-center items-center pt-28 lg:flex-row-reverse lg:pt-0 lg:h-screen lg:pb-[150px] lg:pr-[100px] xl:pr-auto">
            <RegisterForm/>
            <div className="hidden lg:block lg:self-start">
                <Image
                    className="registerLogoImg"
                    src="/img/registerLogoImg.svg"
                    alt="Next.js Logo"
                    width={999}
                    height={853}
                    priority
                />
            </div>
        </main>
    )
}

export default Register