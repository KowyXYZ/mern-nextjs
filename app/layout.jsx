
import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promptoipa",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">

        <body>
          <Provider>
                <div className="main">
                    <div className='gradient'/>
                </div>

                <div className='app'>
                    <Navbar/>
                    {children}
                </div>
            </Provider>
        </body>

    </html>
  )
}

export default RootLayout