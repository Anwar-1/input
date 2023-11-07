import { useState } from "react"
import './App.css'


function App() {
  const [id,setid] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    if (name && email && phone) {
      const newUser = {id, name, email, phone };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
      setPhone('');
    }
  }

   const deletetable = (id) =>{
    
    setUsers(users.filter((a) => a.id !== id))
   }

 
   function updateTable(id) {

   setUsers(users.map(user =>
   user.id === id? {...user,phone:phone}:user
    
    ));
    
    }
    
 
  return (
    <>
   <div>
     
      <div>
        <div style={{"paddingTop":"1%"}}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
       
         <div style={{"paddingTop":"1%"}}>
         <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         </div>
        
        <div style={{"paddingTop":"1%"}}>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        </div>
        
        <div style={{"paddingTop":"1%"}} >
        <button  onClick={handleAddUser}>Add User</button>
        </div>
        
      </div>
      <table style={{"paddingTop":"1%"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <th>
                <button onClick={()=>   deletetable(user.id)}>Delete</button>
              </th>

              <th>
                <button onClick={() =>  updateTable(user.id)}>update</button>
                <input type="text"
                value={phone}
                placeholder="update your phone"
                onChange={(e) => setPhone(e.target.value)} 
              
                />
             
               
              </th>


            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  )
}

export default App