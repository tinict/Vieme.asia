import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchForm() {
    return (
        <form>
            <FontAwesomeIcon icon= {faMagnifyingGlass} />
            <input type = "search"></input>
        </form>
    );
}

export default SearchForm;