import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center bg-pink-500 h-screen'>
      <div className='space-y-6 text-center'>
        <h1 className='text-3xl drop-shadow-md'>🔏Authentication Service</h1>
        <div>
          <LoginButton mode='redirect'>
            <Button>
              Sign In
            </Button>
          </LoginButton>
        </div>


      </div>
    </main>
  )
}

export default Home