// import React, { useEffect, useState } from 'react';
// import { Button, Spinner, Row } from 'react-bootstrap';
// import Service from '../Service/Service';

// const Services = () => {
//     const [services, setServices] = useState([])
//     useEffect(() => {
//         fetch('http://localhost:5000/bikes')
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])
//     return (

//         <div>
//             {services.length === 0 ?
//                 <Button className="my-5 " variant="primary">
//                     <Spinner
//                         as="span"
//                         animation="grow"
//                         size="sm"
//                         role="status"
//                         aria-hidden="true"
//                     />
//                     Loading...
//                 </Button> :
//                 <div id="services" className="container">

//                     <h2 className="m-5">Best Bikes in Bangladesh</h2>
//                     <div className="row row-cols-1 row-cols-md-1 text-lg-start g-5 mt-5 ">
//                         <Row xs={1} md={2} lg={3} className="g-4 ">
//                             {
//                                 services.slice(0, 6).map(service => <Service
//                                     key={service.id}
//                                     service={service}
//                                 ></Service>)
//                             }
//                         </Row>
//                     </div>
//                 </div>
//             }
//         </div>
//     );
// };

// export default Services;








import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div>
            {services.length === 0 ?
                <Button className="my-5 " variant="primary">
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button> :
                <div id="services" className="container">

                    <h1 className="m-5 fw-bolder mt-5">Our Features Bike</h1>
                    <div className="row row-cols-1 row-cols-md-1 text-lg-start g-5 mt-5 ">

                        {
                            services.slice(0, 6).map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Services;