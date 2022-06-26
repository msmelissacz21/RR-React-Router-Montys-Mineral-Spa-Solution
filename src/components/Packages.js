import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => {
    return <ListGroup.Item>{eachPackage}</ListGroup.Item>
    })

    return (
        <Container>
            <ListGroup>
                {displayPackages}
            </ListGroup>
        </Container>
    )
}

{/* <div>
<div className="packages">
    <div className="packagesHeader">
        <h1>Our Packages</h1>
    </div>
    <ul>
        {displayPackages}
    </ul>
</div>
</div> */}