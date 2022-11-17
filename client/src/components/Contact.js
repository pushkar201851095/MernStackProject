import React from 'react'

export const Contact = () => {
  return (
    
    
    
    <div className=''>

      <div className='Contact_display_'>
        <div className="Contact_display_item">
          <h5>Name</h5>
          <p>Xavier</p>
        </div>
        <div className="Contact_display_item">
          <h5>Phone</h5>
          <p>+91111222222</p>
        </div>
        <div className="Contact_display_item">
          <h5>Email</h5>
          <p>Test@test.com</p>
        </div>
      </div>
      <div className='Contact_'>
      <div className='Contact_input'>
        <div className='Contact_input_1'>
          <input type="text"  placeholder='Name' required='true'/>
        </div>
        <div className='Contact_input_1'>
          <input type="email"  placeholder='Eamil' required='true'/>
        </div>
        <div className='Contact_input_1'>
          <input type="number"  placeholder='Your Phone' required='true'/>
        </div>

        <div className='Contact_input_text_area'>
          <textarea placeholder='messege' cols="30" rows='10'></textarea>
          <button className='Contact_Button' type='submit' > Send Messege</button>
        </div>
        </div>
      </div>

    </div>
  )
}
