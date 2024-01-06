import AccessInput from "../common/accessInput"

const LoginForm = () => {
    return (
        <section>
            <div>
                <h1 className="m-14">Login</h1>
                <h2>Faça seu login para acessar</h2>
                <ul>
                    <AccessInput label="Usuário" img="/img/user.svg"/>
                    <AccessInput label="Senha" img="/img/Lockscsc.svg"/>
                </ul>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembrar-me</label>
                <button>Acessar</button>
            </div>
        </section>
    )
}

export default LoginForm