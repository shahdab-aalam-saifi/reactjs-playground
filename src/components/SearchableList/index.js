import React from "react";
import Search from "./Search";
import List from "./List";

class SearchableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      archivedItems: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({
      query: value
    });
  }

  render() {
    const { list } = this.props;
    const { query } = this.state;
    return (
      <div>
        <Search query={query} onChange={this.onChange}>
          Search List:
        </Search>
        <List list={(list || []).filter(byQuery(query))} />
      </div>
    );
  }
}

const byQuery = query => item =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

export default SearchableList;
