import AccessButton from "../common/accessButton"
import AccessInput from "../common/accessInput"
import Link from 'next/link'

const RegisterForm = () => {
    return (
        <div className="lg:self-end">
            <section className="bg-white-color w-[467px] min-h-[532px] px-[71px] py-8 rounded-[20px] shadow-lg">
                <form action="" className="flex flex-col items-center">
                    <h1 className="text-black-color text-extra-huge-size font-semibold">Cadastre-se</h1>
                    <h2 className="mt-4 mb-6 font-light text-gray-dark-color text-extra-large-size">E obtenha o melhor chat!</h2>
                    <ul className="w-full flex flex-col gap-4 mb-8">
                        <AccessInput label="Usuário" img="/img/user.svg"/>
                        <AccessInput label="E-mail" img="/img/message.svg"/>
                        <AccessInput label="Senha" img="/img/Lockscsc.svg"/>
                    </ul>
                    <AccessButton name="Cadastrar" submit={true}/>
                    <div className="w-full mt-[18px] flex flex-col items-center">
                        <p className="text-medium-size text-black-color font-light">Ao se cadastrar você concorda</p>
                        <p className="text-medium-size text-black-color font-light">com nossos <span className="font-bold">Termos de Uso.</span></p>
                    </div>
                </form>
            </section>
            <p className="text-large-size text-black-color font-light text-center mt-8">Já possui uma conta? <Link href="/" className="font-bold">Acesse!</Link></p>
        </div>
    )
}

export default RegisterForm