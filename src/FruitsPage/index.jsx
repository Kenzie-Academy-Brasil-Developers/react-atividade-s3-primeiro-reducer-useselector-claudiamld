import { useSelector } from "react-redux";
import { Container } from "./styles";

const FruitsPage = () => {
    const fruits = useSelector((state) => state.fruits);

    return(
        <Container>
            {fruits.map((fruit) => (
                <p key={fruit}>{fruit}</p>
            ))}
        </Container>
    )
}

export default FruitsPage