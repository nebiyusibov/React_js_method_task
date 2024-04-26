import './App.css'
import Input from './Input/Input'
import InputAddObject from './InputAddObject/InputAddObject'
import Modal from './Modal/Modal'
import NavBar from './NavBar/NavBar'
import TodoList from './TodoList/TodoList'

function App() {

  return (
    <>
  <NavBar></NavBar>
  <Modal></Modal>
  <Input></Input>
  <TodoList></TodoList>
  <InputAddObject></InputAddObject>
    </>
  )
}

export default App
