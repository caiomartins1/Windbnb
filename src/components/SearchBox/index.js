import {} from 'material-design-icons';
import './index.css';

function SearchBox() {
  return (
    <div className="search-box">
      <div className="search-box-location-container">
        <input
          type="text"
          name="location"
          className="search-box-location-input"
          value="Helsinki, Finland"
        />
      </div>

      <div className="search-box-guests-container">
        <input
          type="text"
          name="guests"
          className="search-box-guests-input"
          placeholder="Add Guest"
        />
      </div>
      <div className="search-box-icon-container">
        <i
          className="material-icons"
          style={{ width: '17px', height: '17px', color: '#EB5757' }}
        >
          search
        </i>
      </div>
    </div>
  );
}

export default SearchBox;
