import axios from 'axios';
import {ListItemProps} from "../ListItem";
export const FetchRecipes = async () => {
    const response = await axios.get('http://localhost:3500/recipes');
    return response.data;
}
