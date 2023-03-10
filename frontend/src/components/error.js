import {Alert, Container} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Errore() {
    const {state}=useLocation();
  return (
    <Container>
    <Alert variant="danger">
      <Alert.Heading>{state?.msg}</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    </Container>
  );
}

export default Errore;