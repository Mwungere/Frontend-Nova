import Dashboard from '@/components/Dashboard/Dashboard'
import { UserContextProvider } from '@/components/contexts/UserContext'

const Page = () => {
  return (
    <UserContextProvider>
            <Dashboard />
    </UserContextProvider>
  )
}

export default Page
