import { ChatBotBottomHeader } from '../components/ChatBotBottomHeader'
import { ResponsiveAppBar } from '../components/Header'
import { Outlet } from 'react-router-dom'

export function ChatBot () {
  return (
    <section style={{ paddingTop: '90px' }}>
      <ResponsiveAppBar />
      <Outlet />
      <ChatBotBottomHeader />
    </section>
  )
}
