import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo'
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import './styles/global.css'

export function App() {
    return (
        <div className='w-screen h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center gap-8'>
            <header className='flex flex-col items-center'>
                <Logo />

                <Heading size='2xl' className='mt-4'>
                    Ignite Lab
                </Heading>

                <Text size="lg" className='text-gray-400 mt-2'>
                    Faça login e comece a usar!
                </Text>
            </header>

            <form className='flex flex-col w-full max-w-sm gap-8'>
                <div className='flex flex-col gap-6'>
                    <label htmlFor='email' className='flex flex-col gap-2'>
                        <Text size='md' className='font-semibold'>Endereço de e-mail</Text>

                        <TextInput.Root full_width>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>

                            <TextInput.Input id='email' type='email' placeholder='Digite seu e-mail' />
                        </TextInput.Root>
                    </label>
                    <label htmlFor='password' className='flex flex-col gap-2'>
                        <Text size='md' className='font-semibold'>Sua senha</Text>

                        <TextInput.Root full_width>
                            <TextInput.Icon>
                                <Lock />
                            </TextInput.Icon>

                            <TextInput.Input id='password' type='password' placeholder='******' />
                        </TextInput.Root>
                    </label>

                    <label htmlFor='remember' className='flex items-center gap-3 cursor-pointer'>
                        <Checkbox id='remember' />
                        <Text size='sm'>Lembrar-me</Text>
                    </label>
                </div>

                <Button block size='md' type='submit'>
                    Entrar na plataforma
                </Button>
            </form>

            <footer className='flex flex-col items-center gap-2'>
                <Text asChild size='sm'>
                    <a href='' className='text-gray-400 underline hover:text-gray-100 transition duration-300'>Esqueceu sua senha?</a>
                </Text>
                <Text asChild size='sm'>
                    <a href='' className='text-gray-400 underline hover:text-gray-100 transition duration-300'>Não possui uma conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div >
    );
}