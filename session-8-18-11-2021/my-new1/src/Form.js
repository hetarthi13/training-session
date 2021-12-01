import React, {useState} from 'react'



function Form() {
    
    const [user, setState] = useState({name: 'hetarthi', description: ''})
    
    function handleChange(event){
        console.log(event.target.value);
        setState({name: event.target.value});
    }

    function handleTextAreaChange(event) {
        console.log(event.target.value);
        setState({description: event.target.value});
    }

    return (
        <div>

        <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Input Area</label>
  <input type="text" onChange={handleChange} value={user.name} class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Text Area</label>
  <textarea type="text" class="form-control" onChange={handleTextAreaChange} value={user.description} id="formGroupExampleInput2" placeholder="Another input placeholder"></textarea>
</div>
            
        </div>
    )
}

export default Form
