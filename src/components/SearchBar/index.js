import Form from 'react-bootstrap/Form';

export default function Searchbar(props) {


    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="input" placeholder="enter employee" onChange={props.handleInputChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}


