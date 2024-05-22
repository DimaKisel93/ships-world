import { ApolloProvider } from '@apollo/client'
import client from './apollo-client'
import ShipList from './pages/ShipList'
import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ShipList />
      </div>
    </ApolloProvider>
  )
}

export default App
