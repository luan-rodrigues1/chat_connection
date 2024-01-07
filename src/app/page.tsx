import LoginForm from '@/components/forms/loginForm'
import Image from 'next/image'

//TODO tentar utilizar grid nessa parte do formulario e foto pode funcionar melhor

export default function Home() {
  return (
        <main className="flex justify-center items-center pt-28 lg:pt-24 lg:pl-5 lg:h-screen xl:pl-auto">
            <LoginForm/>
            <div className="hidden lg:block lg:self-end">
                <Image
                    className=""
                    src="/img/loginLogoImg.svg"
                    alt="Next.js Logo"
                    width={999}
                    height={853}
                    priority
                />
            </div>
        </main>
  )
}
