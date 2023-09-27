import './Cat.css';
import { useGetCat } from '../useGetCat';

export const Cat = () => {
    const { data: catData, isCatLoading, refetchData } = useGetCat();
    
    if (isCatLoading) {
        return <h1 style={{color: "green"}}>Loading...</h1>
    }

    return (
        <div>
            <button 
            style={{fontSize: 30, padding: 12}} 
            onClick={refetchData}>Fetch Another Cat Fact</button>

            <h1>Cat Fact:</h1>
            <h1>{ catData?.fact }</h1>
        </div>
    );
}