import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Hero(){
    return(
        <>
            <img src="./handiwork.jpg" alt="handiwork.jpg" className="hero-image"></img>
            <Form className="property-search-bar">
                <Form.Group className="mb-3">
                    <Form.Text class="fs-2 text-light">Change starts here</Form.Text>
                    <div className="input-group">
                        <Form.Control className="col-xs-7 form-input" type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" />
                        <Button className="bg-light button-search" variant="primary" type="submit">
                            <img className='search-icon' src='https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png' alt='search-icon'></img>
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </>
    );
}

export default Hero;