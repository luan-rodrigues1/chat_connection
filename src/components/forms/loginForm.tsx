import AccessButton from "../common/accessButton"
import AccessInput from "../common/accessInput"
import Link from 'next/link'

const LoginForm = () => {
    return (
        <div className="lg:self-start">
            <section className="bg-white-color w-[467px] min-h-[532px] px-16 py-14 rounded-[20px] shadow-lg">
                <form className="flex flex-col items-center">
                    <h1 className="text-black-color text-extra-huge-size font-semibold">Login</h1>
                    <h2 className="mt-4 mb-7 font-light text-gray-dark-color text-extra-large-size">Faça seu login para acessar.</h2>
                    <ul className="w-full flex flex-col gap-7">
                        <AccessInput label="Usuário" img="/img/user.svg"/>
                        <AccessInput label="Senha" img="/img/Lockscsc.svg"/>
                    </ul>
                    <span className="mt-2 font-light text-medium-size text-black-color self-end">Esqueceu sua senha?</span>
                    <div className="flex self-start my-7">
                        <input className="w-5 h-6 mr-[7px] bg-gray-color appearance-none rounded-[5px] checked:bg-primary-color cursor-pointer" type="checkbox" id="remember" />
                        <label className="font-light text-gray-dark-color text-medium-size" htmlFor="remember">Lembrar-me</label>
                    </div>
                    <AccessButton name="Acessar" submit={true}/>
                </form>
                
            </section>
            <div className="flex flex-col items-center mt-7">
                <p className="font-light text-large-size text-black-color">Ainda não possui uma</p>
                <p className="font-light text-large-size text-black-color">conta? <Link href="/register" className="font-bold">Crie agora mesmo!</Link></p>
            </div>
        </div>
    )
}

export default LoginForm