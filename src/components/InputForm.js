import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const InputForm = (props) => {
  return(
    <Form onSubmit={props.getData}>
      <Form.Field>
        <label>Enter city name</label>
        <input name="city" placeholder='e.g. Cape Town' />
      </Form.Field>
      <Form.Field>
        <label>Enter country name</label>
        <input name="country" placeholder='e.g. Republic of South Africa' />
      </Form.Field>
      <Button type="submit" color="blue">Get Forecast</Button>
    </Form>
  )
}

export default InputForm;