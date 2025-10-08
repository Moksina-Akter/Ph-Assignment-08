import { useParams } from "react-router";
import useApp from "../hook/useHook";

const AppDetails = () => {
    const {id} = useParams();
    const {app} = useApp();
    const data = app.find(item => String(item.id) === id)
    console.log(data);
    return (
        <div>
            <h1>App</h1>
        </div>
    );
};

export default AppDetails;