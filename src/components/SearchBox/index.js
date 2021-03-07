import {} from 'material-design-icons';
import './index.css';

function SearchBox() {
  return (
    <div className="search-box">
      <div className="location">
        <input
          type="text"
          name="location"
          id="location"
          value="Helsinki, Finland"
        />
      </div>
      <div className="guests">
        <input type="text" name="guests" id="guests" placeholder="Add Guest" />
      </div>
      <div className="icon">
        <i
          className="material-icons"
          style={{ fontSize: '32px', color: '#EB5757' }}
        >
          search
        </i>
      </div>
    </div>
  );
}

export default SearchBox;
