
import CustomerList from './components/CustomerList'
import ParentComponent from './lifecycle/ParentComponent'

function App() {
  return  <div>
        <h1>Customer Application</h1>
        <ParentComponent />
        <CustomerList />
  </div>
  

}

export default App
