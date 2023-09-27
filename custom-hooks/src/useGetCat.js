import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGetCat = () => {
    const { data, refetch, isLoading: isCatLoading } = useQuery(["cat"], 
    async () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    );

    const refetchData = () => {
        alert("DATA RE-FETCHED!");
        refetch();
    }

    return { data, refetchData, isCatLoading };
}