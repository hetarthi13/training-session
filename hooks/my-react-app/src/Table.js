import  React,{ useState} from 'react';

function Table(){
    const [employee,setEmployee] = useState([])

        function handleChange(e){
               e.preventDefault();
               setEmployee({...employee,
                [e.target.name] : e.target.value.trim()
               })
        }
        console.log(employee)

        function submithandle(e){
            e.preventDefault();
            console.log("text")
            console.log(employee)
            setEmployee([...employee,
                e.target.value.trim()
            ])
        }

        function formSubmit(e){
            e.preventDefault()
            // setEmployee({...employee})
        }
        return(
        <>
            <div className="container">
                <div className="row">
                    <div className='col-6'>
                            <form border="1"  onSubmit={formSubmit}>
                                <h4 className="text-sucess" >Add Employee Data :</h4>
                                    <div className='form-group'>
                                        <label>Enter employee id :</label>
                                            <div className="form-group">
                                                <input type="text" className='form-control' onChange={handleChange}  name="id" placeholder="Enter Your Id" />
                                            </div>
                                    </div>
                            
                                <div className='form-group'>
                                        <label>Enter employee name :</label>
                                        <div className="form-group">
                                            <input type="text" className='form-control'  onChange={handleChange} name="Username" placeholder="Enter Your User Name" />
                                        </div>
                                </div>
                                

                                <div className='form-group'>
                                    <label>Enter employee mail id :</label>
                                        <div className="form-group">
                                            <input type="email" className='form-control'  onChange={handleChange} name="email" placeholder="Enter Your Email-Id" />
                                        </div>
                                </div>

                                <div className='form-group'>
                                    <label>Enter employee salary :</label>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className='form-control'  onChange={handleChange} name="salary" placeholder="Enter Your salary" />
                                            </div>
                                        </div> 
                                </div><br />

                                <div className='form-group'>
                                    <button type="button" className='btn btn-primary' onClick={submithandle} >Submit employee data</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
            <table className="border">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>mail</th>
                    <th>salary</th>
                </tr>
                </thead>
                <tbody> {
               employee.map((obj,i)=>(
                <tr key={i}>
                <td>{obj.name}</td>
                <td>{obj.mail}</td>
                <td>{obj.salary}</td>
                </tr> 
               )
               )}
               </tbody>
                </table>
            </div>
        </>
    );
}

export default Table; 
