import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Memedoro</h1>
      <p>Your productivity app for managing time and tasks.</p>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  )
}

export default HomePage
